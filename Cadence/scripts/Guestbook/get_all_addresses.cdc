import Guestbook from "../../contracts/Blockversity/Guestbook.cdc"

pub fun main():[Address] {
  let timestamp = Guestbook.addressInfo.keys
  return timestamp
}
