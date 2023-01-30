// This transaction is a template for a transaction to allow
// anyone to add a Vault resource to their account so that
// they can use the BlockVersityTokenMetadataViews
import FungibleToken from "../../../contracts/utility/FungibleToken.cdc"
import BlockVersityTokenMetadataViews from "../../../contracts/BlockVersityTokenMetadataViews.cdc"
import MetadataViews from "../../../contracts/utility/MetadataViews.cdc"

transaction () {

    prepare(signer: AuthAccount) {

        // Return early if the account already stores a BlockVersityToken Vault
        if signer.borrow<&BlockVersityTokenMetadataViews.Vault>(from: BlockVersityTokenMetadataViews.VaultStoragePath) != nil {
            return
        }

        // Create a new BlockVersityTokenMetadataViews Vault and put it in storage
        signer.save(
            <-BlockVersityTokenMetadataViews.createEmptyVault(),
            to: BlockVersityTokenMetadataViews.VaultStoragePath
        )

        // Create a public capability to the Vault that only exposes
        // the deposit function through the Receiver interface
        signer.link<&BlockVersityTokenMetadataViews.Vault{FungibleToken.Receiver}>(
            BlockVersityTokenMetadataViews.ReceiverPublicPath,
            target: BlockVersityTokenMetadataViews.VaultStoragePath
        )

        // Create a public capability to the Vault that exposes the Balance and Resolver interfaces
        signer.link<&BlockVersityTokenMetadataViews.Vault{FungibleToken.Balance, MetadataViews.Resolver}>(
            BlockVersityTokenMetadataViews.VaultPublicPath,
            target: BlockVersityTokenMetadataViews.VaultStoragePath
        )
    }
}