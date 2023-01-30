import BlockVersityTokenPublicSale from "../../../../../contracts/sales/BlockVersityTokenPublicSale.cdc"

transaction(addresses: [Address]) {

    // The reference to the Admin Resource
    let adminRef: &BlockVersityTokenPublicSale.Admin

    prepare(account: AuthAccount) {

        // Get admin reference
        self.adminRef = account.borrow<&BlockVersityTokenPublicSale.Admin>(from: BlockVersityTokenPublicSale.SaleAdminStoragePath)
			?? panic("Could not borrow reference to the admin!")
    }

    execute {

        // Distribute BVT purchase to all addresses in the list
        for address in addresses {
            let purchaseInfo = BlockVersityTokenPublicSale.getPurchase(address: address)!
            self.adminRef.distribute(address: address, allocationAmount: purchaseInfo.amount)
        }
    }
}