import NonFungibleToken from "../utility/NonFungibleToken.cdc"
import FungibleToken from "../utility/FungibleToken.cdc"
import GovernanceToken from "../GovernanceToken.cdc"

pub contract ExampleDAO {
  access(contract) var topics: [Topic]
  access(contract) var votedRecords: [{ Address: Int }]
  access(contract) var totalTopics: Int

  pub let AdminStoragePath: StoragePath;
  pub let VoterStoragePath: StoragePath;
  pub let VoterPublicPath: PublicPath;
  pub let VoterPath: PrivatePath;

  pub enum CountStatus: UInt8 {
    pub case invalid
    pub case success
    pub case finished
  }

  // Admin resourse holder can create Proposers
  pub resource Admin {
    pub fun createProposer(): @ExampleDAO.Proposer {
      return <- create Proposer()
    }
  }

  // Proposer resource holder can propose new topics
  pub resource Proposer {
    pub fun addTopic(title: String, description: String, options: [String], startAt: UFix64?, endAt: UFix64?, minHoldedGVTAmount: UFix64?) {
      ExampleDAO.topics.append(Topic(
        proposer: self.owner!.address,
        title: title,
        description: description,
        options: options,
        startAt: startAt,
        endAt: endAt,
        minHoldedGVTAmount: minHoldedGVTAmount
      ))
      ExampleDAO.votedRecords.append({})
      ExampleDAO.totalTopics = ExampleDAO.totalTopics + 1
    }

    pub fun updateTopic(id: Int, title: String?, description: String?, startAt: UFix64?, endAt: UFix64?, voided: Bool?) {
      pre {
        ExampleDAO.topics[id].proposer == self.owner!.address: "Only original proposer can update"
      }

      ExampleDAO.topics[id].update(
        title: title,
        description: description,
        startAt: startAt,
        endAt: endAt,
        voided: voided
      )
    }
  }

  pub resource interface VoterPublic {
    // voted topic id <-> options index mapping
    pub fun getVotedOption(topicId: UInt64): Int?
    pub fun getVotedOptions(): { UInt64: Int }
  }

  // Voter resource holder can vote on topics
  pub resource Voter: VoterPublic {
    access(self) var records: { UInt64: Int }

    pub fun vote(topicId: UInt64, optionIndex: Int) {
      pre {
        self.records[topicId] == nil: "Already voted"
        optionIndex < ExampleDAO.topics[topicId].options.length: "Invalid option"
      }
      ExampleDAO.topics[topicId].vote(voterAddr: self.owner!.address, optionIndex: optionIndex)
      self.records[topicId] = optionIndex
    };

    pub fun getVotedOption(topicId: UInt64): Int? {
      return self.records[topicId]
    }

    pub fun getVotedOptions(): { UInt64: Int } {
      return self.records
    }

    init() {
      self.records = {}
    }
  }

  pub struct VoteRecord {
    pub let address: Address
    pub let optionIndex: Int

    init(address: Address, optionIndex: Int) {
      self.address = address
      self.optionIndex = optionIndex
    }
  }

  pub struct Topic {
    pub let id: Int;
    pub let proposer: Address
    pub var title: String
    pub var description: String
    pub var options: [String]
    // options index <-> result mapping
    pub var votesCountActual: [UInt64]
    pub let createdAt: UFix64
    pub var updatedAt: UFix64
    pub var startAt: UFix64
    pub var endAt: UFix64
    pub var sealed: Bool
    pub var countIndex: Int
    pub var voided: Bool
    pub let minHoldedGVTAmount: UFix64

    init(proposer: Address, title: String, description: String, options: [String], startAt: UFix64?, endAt: UFix64?, minHoldedGVTAmount: UFix64?) {
      pre {
        title.length <= 1000: "New title too long"
        description.length <= 1000: "New description too long"
      }

      self.proposer = proposer
      self.title = title
      self.options = options
      self.description = description
      self.votesCountActual = []
      self.minHoldedGVTAmount = minHoldedGVTAmount != nil ? minHoldedGVTAmount! : 0.0

      for option in options {
        self.votesCountActual.append(0)
      }

      self.id = ExampleDAO.totalTopics

      self.sealed = false
      self.countIndex = 0

      self.createdAt = getCurrentBlock().timestamp
      self.updatedAt = getCurrentBlock().timestamp

      self.startAt = startAt != nil ? startAt! : getCurrentBlock().timestamp
      self.endAt = endAt != nil ? endAt! : self.createdAt + 86400.0 * 14.0 // Around a year

      self.voided = false
    }

    pub fun update(title: String?, description: String?, startAt: UFix64?, endAt: UFix64?, voided: Bool?) {
      pre {
        title?.length ?? 0 <= 1000: "Title too long"
        description?.length ?? 0 <= 1000: "Description too long"
        voided != true: "Can't update after started"
        getCurrentBlock().timestamp < self.startAt: "Can't update after started"
      }

      self.title = title != nil ? title! : self.title
      self.description = description != nil ? description! : self.description
      self.endAt = endAt != nil ? endAt! : self.endAt
      self.startAt = startAt != nil ? startAt! : self.startAt
      self.voided = voided != nil ? voided! : self.voided
      self.updatedAt = getCurrentBlock().timestamp
    }

    pub fun vote(voterAddr: Address, optionIndex: Int) {
      pre {
        self.isStarted(): "Vote not started"
        !self.isEnded(): "Vote ended"
        ExampleDAO.votedRecords[self.id][voterAddr] == nil: "Already voted"
      }

      let voterBVT = ExampleDAO.getHoldedGVT(address: voterAddr)

      assert(voterBVT >= self.minHoldedGVTAmount, message: "Not enought BVT in your Vault to vote")

      ExampleDAO.votedRecords[self.id][voterAddr] = optionIndex
    }

    // return if count ended
    pub fun count(size: Int): [UInt64] {
/*       if self.isEnded() == false {
        return CountStatus.invalid
      }
      if self.sealed {
        return CountStatus.finished
      } */

      // Fetch the keys of everyone who has voted on this proposal
      let votedList = ExampleDAO.votedRecords[self.id].keys
      // Count from the last time you counted
      var batchEnd = self.countIndex + size
      // If the count index is bigger than the number of voters
      // set the count index to the number of voters
      if batchEnd > votedList.length {
        batchEnd = votedList.length
      }

      while self.countIndex != batchEnd {
        let address = votedList[self.countIndex]
        let votedOptionIndex = ExampleDAO.votedRecords[self.id][address]!
        self.votesCountActual[votedOptionIndex] = self.votesCountActual[votedOptionIndex] + 1

        self.countIndex = self.countIndex + 1
      }

      self.sealed = self.countIndex == votedList.length

      return self.votesCountActual
    }

    pub fun isEnded(): Bool {
      return getCurrentBlock().timestamp >= self.endAt
    }

    pub fun isStarted(): Bool {
      return getCurrentBlock().timestamp >= self.startAt
    }

    pub fun getVotes(page: Int, pageSize: Int?): [VoteRecord] {
      var records: [VoteRecord] = []
      let size = pageSize != nil ? pageSize! : 100
      let addresses = ExampleDAO.votedRecords[self.id].keys
      var pageStart = (page - 1) * size
      var pageEnd = pageStart + size

      if pageEnd > addresses.length {
        pageEnd = addresses.length
      }

      while pageStart < pageEnd {
        let address = addresses[pageStart]
        let optionIndex = ExampleDAO.votedRecords[self.id][address]!
        records.append(VoteRecord(address: address, optionIndex: optionIndex))
        pageStart = pageStart + 1
      }

      return records
    }

    pub fun getTotalVoted(): Int {
      return ExampleDAO.votedRecords[self.id].keys.length
    }
  }

  pub fun getHoldedGVT(address: Address): UFix64 {
    let acct = getAccount(address)
    let vaultRef = acct.getCapability(GovernanceToken.VaultPublicPath)
        .borrow<&GovernanceToken.Vault{FungibleToken.Balance}>()
        ?? panic("Could not borrow Balance reference to the Vault")

    return vaultRef.balance
  }

  pub fun getTopics(): [Topic] {
    return self.topics
  }

  pub fun getTopicsLength(): Int {
    return self.topics.length
  }

  pub fun getTopic(id: UInt64): Topic {
    return self.topics[id]
  }

  pub fun count(topicId: UInt64, maxSize: Int): [UInt64] {
    return self.topics[topicId].count(size: maxSize)
  }

  pub fun initVoter(): @ExampleDAO.Voter {
    return <- create Voter()
  }

  init () {
    self.topics = []
    self.votedRecords = []
    self.totalTopics = 0

    self.AdminStoragePath = /storage/ExampleDAOAdmin
    self.VoterStoragePath = /storage/ExampleDAOVoter
    self.VoterPublicPath = /public/ExampleDAOVoter
    self.VoterPath = /private/ExampleDAOVoter
    self.account.save(<-create Admin(), to: self.AdminStoragePath)
    self.account.save(<-create Voter(), to: self.VoterStoragePath)
    self.account.link<&ExampleDAO.Voter>(
            self.VoterPublicPath,
            target: self.VoterStoragePath
        )
  }
}
