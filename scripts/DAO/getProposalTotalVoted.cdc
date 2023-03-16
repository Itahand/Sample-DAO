import ExampleDAO from "../../contracts/DAO/ExampleDAO.cdc"

pub fun main(ProposalId: UInt64): Int {
  return ExampleDAO.getTopic(id: ProposalId).getTotalVoted()
}