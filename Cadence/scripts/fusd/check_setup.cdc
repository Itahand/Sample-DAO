import FungibleToken from "../../contracts/utility/FungibleToken.cdc"
import FUSD from "../../contracts/utility/FUSD.cdc"

pub fun main(address: Address): Bool {
    let account = getAccount(address)

    let receiverRef = account.getCapability(/public/fusdReceiver)
        .borrow<&FUSD.Vault{FungibleToken.Receiver}>()
        ?? nil

    let balanceRef = account.getCapability(/public/fusdBalance)
        .borrow<&FUSD.Vault{FungibleToken.Balance}>()
        ?? nil

    return (receiverRef != nil) && (balanceRef != nil)
}