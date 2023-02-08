export const getPurchasers = () => {
  return `
import BlockVersityTokenPublicSale from 0x800a10d0fff7acd4

pub fun main(): [Address] {
    return BlockVersityTokenPublicSale.getPurchasers()
}
  `
}