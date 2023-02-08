import BlockVersityTokenPublicSale from "../../../contracts/sales/BlockVersityTokenPublicSale.cdc"

pub fun main(): UFix64 {
    return BlockVersityTokenPublicSale.getPrice()
}