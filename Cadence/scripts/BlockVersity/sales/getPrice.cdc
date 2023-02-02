import BlockVersityTokenPublicSale from "../../../contracts/sales/BlockVersityTokenPublicSale.cdc"

pub fun main(address: Address): UFix64 {
    return BlockVersityTokenPublicSale.getPrice()
}