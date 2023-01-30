import FungibleToken from "../../../contracts/utility/FungibleToken.cdc"
import BlockVersityToken from "../../../contracts/BlockVersityToken.cdc"

transaction {

    prepare(signer: AuthAccount) {

        // If the account is already set up that's not a problem, but we don't want to replace it
        if(signer.borrow<&BlockVersityToken.Vault>(from: BlockVersityToken.TokenStoragePath) != nil) {
            return
        }

        // Create a new Blocto Token Vault and put it in storage
        signer.save(<-BlockVersityToken.createEmptyVault(), to: BlockVersityToken.TokenStoragePath)

        // Create a public capability to the Vault that only exposes
        // the deposit function through the Receiver interface
        signer.link<&BlockVersityToken.Vault{FungibleToken.Receiver}>(
            /public/blockVersityTokenReceiver,
            target: /storage/blockVersityTokenVault
        )

        // Create a public capability to the Vault that only exposes
        // the balance field through the Balance interface
        signer.link<&BlockVersityToken.Vault{FungibleToken.Balance}>(
            /public/blockVersityTokenBalance,
            target: /storage/blockVersityTokenVault
        )
    }
}
