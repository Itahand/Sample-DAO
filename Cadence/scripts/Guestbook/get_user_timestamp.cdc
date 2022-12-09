import Guestbook from "../../contracts/Blockversity/Guestbook.cdc"

pub fun main(user: Address): UFix64? {
  let timestamp = Guestbook.addressInfo[user]
  return timestamp
}
