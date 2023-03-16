import ExampleDAO from "../../contracts/DAO/ExampleDAO.cdc"

pub fun main(ProposalId: UInt64): ExampleDAO.Topic {
  return ExampleDAO.getTopic(id: ProposalId)
}