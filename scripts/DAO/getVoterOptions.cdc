import BlockVersityDAO from "../../contracts/DAO/BlockVersityDAO.cdc"

pub fun main(address: Address): {UInt64: Int} {
  let account = getAccount(address)

      let voterRef = account.getCapability(/public/BlockVersityDAOVoter)
        .borrow<&BlockVersityDAO.Voter>()
        ?? panic("Could not borrow Voter reference")

        return voterRef.getVotedOptions()
}

