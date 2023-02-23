import BlockVersityDAO from "../../contracts/DAO/BlockVersityDAO.cdc"

pub fun main(ProposalId: UInt64): BlockVersityDAO.Topic {
  return BlockVersityDAO.getTopic(id: ProposalId)
}