import ExampleDAO from "../../contracts/DAO/ExampleDAO.cdc"

pub fun main(ProposalId: UInt64): [ExampleDAO.VoteRecord] {
  return ExampleDAO.getTopic(id: ProposalId).getVotes(page: 1, pageSize: 10)
}