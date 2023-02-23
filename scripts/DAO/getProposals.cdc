import BlockVersityDAO from "../../contracts/DAO/BlockVersityDAO.cdc"

pub fun main(): [BlockVersityDAO.Topic] {
  return BlockVersityDAO.getTopics()
}