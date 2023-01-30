// This script reads the balance field of an account's BlockVersityTokenMetadataViews Balance
import FungibleToken from "../../../contracts/utility/FungibleToken.cdc"
import BlockVersityTokenMetadataViews from "../../../contracts/BlockVersityTokenMetadataViews.cdc"

pub fun main(account: Address): UFix64 {
    let acct = getAccount(account)
    let vaultRef = acct.getCapability(BlockVersityTokenMetadataViews.VaultPublicPath)
        .borrow<&BlockVersityTokenMetadataViews.Vault{FungibleToken.Balance}>()
        ?? panic("Could not borrow Balance reference to the Vault")

    return vaultRef.balance
}