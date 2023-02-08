export const getBVTBalance = () => {
  return `
import BlockVersityTokenPublicSale from 0x800a10d0fff7acd4

pub fun main(): UFix64 {
    return BlockVersityTokenPublicSale.getBVTVaultBalance()
}
  `
}