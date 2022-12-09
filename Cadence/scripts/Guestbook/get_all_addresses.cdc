import Guestbook from "../../contracts/Blockversity/Guestbook.cdc"

pub fun main():[Address] {
  let timestamp = Guestbook.allUsers
  return timestamp
}
