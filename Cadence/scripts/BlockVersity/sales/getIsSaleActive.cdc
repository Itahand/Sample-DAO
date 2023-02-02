import BlockVersityTokenPublicSale from "../../../contracts/sales/BlockVersityTokenPublicSale.cdc"

pub fun main(address: Address): Bool {
    return BlockVersityTokenPublicSale.getIsSaleActive()
}