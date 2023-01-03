export const signWhitelist = () => {
  return `
  import Whitelist from 0x800a10d0fff7acd4

  transaction {
    // Setup address variable
    let address: Address

    prepare(acct: AuthAccount) {
      // Assign the signer's address into our address variable
      self.address = acct.address
    }

    execute {
      // Add address to the Whitelist
      Guestbook.addAddress(newAddress: self.address)
    }
  }
  `
}