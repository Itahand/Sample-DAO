export const withdrawBVT = () => {
  return `
import BlockVersityTokenPublicSale from 0x800a10d0fff7acd4
import BlockVersityTokenMetadataViews from 0x800a10d0fff7acd4
import FungibleToken from 0x9a0766d93b6608b7


transaction(amount: UFix64, to: Address) {

    let adminRef: &BlockVersityTokenPublicSale.Admin

    prepare(signer: AuthAccount) {

        self.adminRef = signer.borrow<&BlockVersityTokenPublicSale.Admin>(from: BlockVersityTokenPublicSale.SaleAdminStoragePath)
			?? panic("Could not borrow reference to the admin!")
    }

    execute {

        let vault <- self.adminRef.withdrawBVT(amount: amount)

        let recipient = getAccount(to)

        let receiverRef = recipient.getCapability(BlockVersityToken.ReceiverPublicPath)
            .borrow<&{FungibleToken.Receiver}>()
			?? panic("Could not borrow receiver reference to the recipient's Vault")

        receiverRef.deposit(from: <- vault)
    }
}
  `
}