import GovernanceTokenPublicSale from "../../contracts/sales/GovernanceTokenSale.cdc"

transaction() {

      prepare() {
        GovernanceTokenPublicSale.refund()
      }
}