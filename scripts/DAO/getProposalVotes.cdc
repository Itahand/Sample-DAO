import BlockVersityDAO from "../../contracts/DAO/BlockVersityDAO.cdc"

pub fun main(ProposalId: UInt64): [BlockVersityDAO.VoteRecord] {
  return BlockVersityDAO.getTopic(id: ProposalId).getVotes(page: 1, pageSize: 10)
}