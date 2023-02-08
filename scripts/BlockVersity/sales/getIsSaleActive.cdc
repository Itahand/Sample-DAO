import BlockVersityTokenPublicSale from "../../../contracts/sales/BlockVersityTokenPublicSale.cdc"

pub fun main(): Bool {
    return BlockVersityTokenPublicSale.getIsSaleActive()
}