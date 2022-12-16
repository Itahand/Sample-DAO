export const signGuestbook = () => {
  return `
  import Guestbook from 0x800a10d0fff7acd4

  transaction {
    // Setup address variable
    let address: Address

    prepare(acct: AuthAccount) {
      // Assign the signer's address into our address variable
      self.address = acct.address
    }

    execute {
      // Add address to the Guestbook
      Guestbook.addAddress(newAddress: self.address)
    }
  }
  `
}