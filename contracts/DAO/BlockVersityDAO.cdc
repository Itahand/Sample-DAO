import NonFungibleToken from "../utility/NonFungibleToken.cdc"
// This is not used yet, but I plan to make the contract count the voter's BVT
// Still not sure how, tho
import BlockVersityToken from "../BlockVersityToken.cdc"

pub contract BlockVersityDAO {
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
    pub fun createProposer(): @BlockVersityDAO.Proposer {
      return <- create Proposer()
    }
  }

  // Proposer resource holder can propose new topics
  pub resource Proposer {
    pub fun addTopic(title: String, description: String, options: [String], startAt: UFix64?, endAt: UFix64?) {
      BlockVersityDAO.topics.append(Topic(
        proposer: self.owner!.address,
        title: title,
        description: description,
        options: options,
        startAt: startAt,
        endAt: endAt
      ))
      BlockVersityDAO.votedRecords.append({})
      BlockVersityDAO.totalTopics = BlockVersityDAO.totalTopics + 1
    }

    pub fun updateTopic(id: Int, title: String?, description: String?, startAt: UFix64?, endAt: UFix64?, voided: Bool?) {
      pre {
        BlockVersityDAO.topics[id].proposer == self.owner!.address: "Only original proposer can update"
      }

      BlockVersityDAO.topics[id].update(
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
        optionIndex < BlockVersityDAO.topics[topicId].options.length: "Invalid option"
      }
      BlockVersityDAO.topics[topicId].vote(voterAddr: self.owner!.address, optionIndex: optionIndex)
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
    pub var votesCountActual: [UFix64]
    pub let createdAt: UFix64
    pub var updatedAt: UFix64
    pub var startAt: UFix64
    pub var endAt: UFix64
    pub var sealed: Bool
    pub var countIndex: Int
    pub var voided: Bool

    init(proposer: Address, title: String, description: String, options: [String], startAt: UFix64?, endAt: UFix64?) {
      pre {
        title.length <= 1000: "New title too long"
        description.length <= 1000: "New description too long"
      }

      self.proposer = proposer
      self.title = title
      self.options = options
      self.description = description
      self.votesCountActual = []

      for option in options {
        self.votesCountActual.append(0.0)
      }

      self.id = BlockVersityDAO.totalTopics

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
        BlockVersityDAO.votedRecords[self.id][voterAddr] == nil: "Already voted"
      }

      BlockVersityDAO.votedRecords[self.id][voterAddr] = optionIndex
    }

    // return if count ended
    pub fun count(size: Int): CountStatus {
      if self.isEnded() == false {
        return CountStatus.invalid
      }
      if self.sealed {
        return CountStatus.finished
      }

      let votedList = BlockVersityDAO.votedRecords[self.id].keys
      var batchEnd = self.countIndex + size

      if batchEnd > votedList.length {
        batchEnd = votedList.length
      }

      while self.countIndex != batchEnd {
        let address = votedList[self.countIndex]
        let votedOptionIndex = BlockVersityDAO.votedRecords[self.id][address]!
        self.votesCountActual[votedOptionIndex] = self.votesCountActual[votedOptionIndex] + 1.0

        self.countIndex = self.countIndex + 1
      }

      self.sealed = self.countIndex == votedList.length

      return CountStatus.success
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
      let addresses = BlockVersityDAO.votedRecords[self.id].keys
      var pageStart = (page - 1) * size
      var pageEnd = pageStart + size

      if pageEnd > addresses.length {
        pageEnd = addresses.length
      }

      while pageStart < pageEnd {
        let address = addresses[pageStart]
        let optionIndex = BlockVersityDAO.votedRecords[self.id][address]!
        records.append(VoteRecord(address: address, optionIndex: optionIndex))
        pageStart = pageStart + 1
      }

      return records
    }

    pub fun getTotalVoted(): Int {
      return BlockVersityDAO.votedRecords[self.id].keys.length
    }
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

  pub fun count(topicId: UInt64, maxSize: Int): CountStatus {
    return self.topics[topicId].count(size: maxSize)
  }

  pub fun initVoter(): @BlockVersityDAO.Voter {
    return <- create Voter()
  }

  init () {
    self.topics = []
    self.votedRecords = []
    self.totalTopics = 0

    self.AdminStoragePath = /storage/BlockVersityDAOAdmin
    self.VoterStoragePath = /storage/BlockVersityDAOVoter
    self.VoterPublicPath = /public/BlockVersityDAOVoter
    self.VoterPath = /private/BlockVersityDAOVoter
    self.account.save(<-create Admin(), to: self.AdminStoragePath)
    self.account.save(<-create Voter(), to: self.VoterStoragePath)
    self.account.link<&BlockVersityDAO.Voter>(
            self.VoterPublicPath,
            target: self.VoterStoragePath
        )
  }
}
