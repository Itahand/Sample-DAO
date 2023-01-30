import BlockVersityTokenPublicSale from "../../../contracts/sales/BlockVersityTokenPublicSale.cdc"

pub fun main(): [Address] {
    return BlockVersityTokenPublicSale.getPurchasers()
}