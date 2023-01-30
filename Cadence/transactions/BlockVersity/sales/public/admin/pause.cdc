import BlockVersityTokenPublicSale from "../../../../../contracts/sales/BlockVersityTokenPublicSale.cdc"

transaction() {

    // The reference to the Admin Resource
    let adminRef: &BlockVersityTokenPublicSale.Admin

    prepare(account: AuthAccount) {

        // Get admin reference
        self.adminRef = account.borrow<&BlockVersityTokenPublicSale.Admin>(from: BlockVersityTokenPublicSale.SaleAdminStoragePath)
			?? panic("Could not borrow reference to the admin!")
    }

    execute {

        // Pause sale
        self.adminRef.pause()
    }
}