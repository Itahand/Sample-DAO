import NonFungibleToken from "../../../../contracts/utility/NonFungibleToken.cdc"
import FUSD from "../../../../contracts/utility/FUSD.cdc"
import BlockVersityTokenPublicSale from "../../../../contracts/sales/BlockVersityTokenPublicSale.cdc"

// Public transaction to buy the BVT fungible token

transaction(amount: UFix64) {

    // The FUSD Vault resource that holds the tokens that are being transferred
    let sentVault:  @FUSD.Vault

    // The address of the BVT buyer
    let buyerAddress: Address

    prepare(account: AuthAccount) {

        // Get a reference to the signer's stored vault
        let vaultRef = account.borrow<&FUSD.Vault>(from: /storage/fusdVault)
            ?? panic("Could not borrow reference to the owner's Vault!")

        // Withdraw tokens from the signer's stored vault
        self.sentVault <- vaultRef.withdraw(amount: amount) as! @FUSD.Vault

        // Record the buyer address
        self.buyerAddress = account.address

    }

    execute {
        // Enroll in BVT public sale
        BlockVersityTokenPublicSale.purchase(from: <-self.sentVault, address: self.buyerAddress)
    }
}