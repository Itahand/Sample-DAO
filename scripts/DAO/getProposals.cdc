import ExampleDAO from "../../contracts/DAO/ExampleDAO.cdc"

pub fun main(): [ExampleDAO.Topic] {
  return ExampleDAO.getTopics()
}
