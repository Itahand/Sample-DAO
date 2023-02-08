export const getIsSaleActive = () => {
  return `
import BlockVersityTokenPublicSale from 0x800a10d0fff7acd4

pub fun main(): Bool  {
    return BlockVersityTokenPublicSale.getIsSaleActive()
}
  `
}