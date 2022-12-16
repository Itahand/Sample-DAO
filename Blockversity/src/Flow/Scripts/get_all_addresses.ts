export const getAllAddresses = () => {
  return `
  import Guestbook from 0x800a10d0fff7acd4
  pub fun main():[Address] {
    let timestamp = Guestbook.addressInfo.keys
    return timestamp
  }
  `
}