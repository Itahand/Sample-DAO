import GovernanceTokenPublicSale from "../../contracts/sales/GovernanceTokenSale.cdc"

transaction() {

      prepare(account: AuthAccount) {
        GovernanceTokenPublicSale.distribute()
      }
}