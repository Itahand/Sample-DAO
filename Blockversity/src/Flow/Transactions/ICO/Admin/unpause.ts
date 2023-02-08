export const unpause = () => {
  return `
import BlockVersityTokenPublicSale from 0x800a10d0fff7acd4

transaction() {

    let adminRef: &BlockVersityTokenPublicSale.Admin

    prepare(account: AuthAccount) {

        self.adminRef = account.borrow<&BlockVersityTokenPublicSale.Admin>(from: BlockVersityTokenPublicSale.SaleAdminStoragePath)
			?? panic("Could not borrow reference to the admin!")
    }

    execute {

        self.adminRef.unpause()
    }
}
  `
}