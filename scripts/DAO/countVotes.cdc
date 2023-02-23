import BlockVersityDAO from "../../contracts/DAO/BlockVersityDAO.cdc"

pub fun main(topicId: UInt64, maxSize: Int): BlockVersityDAO.CountStatus {
  return BlockVersityDAO.count(topicId: topicId, maxSize: maxSize)
}

