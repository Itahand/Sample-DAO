export const getPurchaseInfo = () => {
  return `
import BlockVersityTokenPublicSale from 0x800a10d0fff7acd4

pub fun main(address: Address): BlockVersityTokenPublicSale.PurchaseInfo? {
    return BlockVersityTokenPublicSale.getPurchase(address: address)
}
  `
}