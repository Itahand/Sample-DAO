// This script reads the balance field of an account's BlockVersityToken Balance
import BlockVersityToken from "../../../contracts/BlockVersityToken.cdc"
import FungibleToken from "../../../contracts/utility/FungibleToken.cdc"

pub fun main(account: Address): UFix64 {
    let acct = getAccount(account)
    let vaultRef = acct.getCapability(BlockVersityToken.VaultPublicPath)
        .borrow<&BlockVersityToken.Vault{FungibleToken.Balance}>()
        ?? panic("Could not borrow Balance reference to the Vault")

    return vaultRef.balance
}
