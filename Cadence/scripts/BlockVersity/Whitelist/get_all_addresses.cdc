import Whitelist from "../../../contracts/Whitelist.cdc"

pub fun main():[Address] {
  let timestamp = Whitelist.addressInfo.keys
  return timestamp
}
