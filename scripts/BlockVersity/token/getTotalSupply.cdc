import BlockVersityTokenMetadataViews from "../../../contracts/BlockVersityTokenMetadataViews.cdc"

pub fun main(): UFix64 {
    return BlockVersityTokenMetadataViews.totalSupply
}