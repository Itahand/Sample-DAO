import BlockVersityDAO from "../../contracts/DAO/BlockVersityDAO.cdc"

pub fun main(ProposalId: UInt64): BlockVersityDAO.CountStatus {
  return BlockVersityDAO.getTopic(id: ProposalId).count(size: 1)
}

