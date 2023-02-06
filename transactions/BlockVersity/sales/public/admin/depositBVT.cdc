import FungibleToken from "../../../../../contracts/utility/FungibleToken.cdc"
import BlockVersityTokenMetadataViews from "../../../../../contracts/BlockVersityTokenMetadataViews.cdc"
import BlockVersityTokenPublicSale from "../../../../../contracts/sales/BlockVersityTokenPublicSale.cdc"

// This is used to deposit BVT tokens into the public ICO contract by the Admin

transaction(amount: UFix64) {

    // The reference to the Admin Resource
    let adminRef: &BlockVersityTokenPublicSale.Admin

    // The FUSD Vault resource that holds the tokens that are being transferred
    let sentVault:  @FungibleToken.Vault

    prepare(account: AuthAccount) {

        // Get admin reference
        self.adminRef = account.borrow<&BlockVersityTokenPublicSale.Admin>(from: BlockVersityTokenPublicSale.SaleAdminStoragePath)
			?? panic("Could not borrow reference to the admin!")

        // Get a reference to the signer's stored vault
        let vaultRef = account.borrow<&BlockVersityTokenMetadataViews.Vault>(from: BlockVersityTokenMetadataViews.VaultStoragePath)
			?? panic("Could not borrow reference to the owner's Vault!")

        // Withdraw tokens from the signer's stored vault
        self.sentVault <- vaultRef.withdraw(amount: amount)
    }

    execute {

        // Deposit BVT
        self.adminRef.depositBVT(from: <-self.sentVault)
    }
}