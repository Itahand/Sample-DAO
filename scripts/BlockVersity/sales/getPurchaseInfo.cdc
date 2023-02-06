import BlockVersityTokenPublicSale from "../../../contracts/sales/BlockVersityTokenPublicSale.cdc"

pub fun main(address: Address): BlockVersityTokenPublicSale.PurchaseInfo? {
    return BlockVersityTokenPublicSale.getPurchase(address: address)
}