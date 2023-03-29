import GovernanceTokenPublicSale from "../../contracts/sales/GovernanceTokenSale.cdc"

pub struct Info {
  pub let tokenName: String
  pub let tokenSymbol: String
  pub let tokenSupply: UFix64
  pub let tokenPrice: UFix64
  pub let saleStart: UFix64
  pub let saleEnd: UFix64
  pub let minimumGoal: UFix64

    init(
        tokenName: String,
        tokenSymbol: String,
        tokenSupply: UFix64,
        tokenPrice: UFix64,
        saleStart: UFix64,
        saleEnd: UFix64,
        minimumGoal: UFix64,
    ) {
        self.tokenName = tokenName
        self.tokenSymbol = tokenSymbol
        self.tokenSupply = tokenSupply
        self.tokenPrice = tokenPrice
        self.saleStart = saleStart
        self.saleEnd = saleEnd
        self.minimumGoal = minimumGoal
    }
}

pub fun main(): Info {

  return Info(
    tokenName: GovernanceTokenPublicSale.tokenName,
    tokenSymbol: GovernanceTokenPublicSale.tokenSymbol,
    tokenSupply: GovernanceTokenPublicSale.tokenSupply,
    tokenPrice: GovernanceTokenPublicSale.tokenPrice,
    saleStart: GovernanceTokenPublicSale.saleStart,
    saleEnd: GovernanceTokenPublicSale.saleEnd,
    minimumGoal:GovernanceTokenPublicSale.minimumGoal
  )
}

