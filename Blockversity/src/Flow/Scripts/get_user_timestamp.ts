export const getUserTimestamp = `
import Guestbook from 0x800a10d0fff7acd4
pub fun main(user: Address): UFix64? {
  let timestamp = Guestbook.addressInfo[user]
  return timestamp
}
`