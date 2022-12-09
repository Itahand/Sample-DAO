pub contract Guestbook {

    // Contract Information
    pub var addressInfo: {Address: UFix64}
    pub var allUsers: [Address]

    // Events
    //
    pub event ContractInitialized()
    pub event Signed(user: Address, timestamp: UFix64)
    // Public function to add a new Address
    pub fun addAddress(newAddress: Address) {
        pre {
            self.addressInfo[newAddress] == nil: "This address has already signed!"
        }

        let timestamp = getCurrentBlock().timestamp
        self.addressInfo[newAddress] = timestamp
        self.allUsers.append(newAddress)

        emit Signed(user: newAddress, timestamp: timestamp)
    }

    init() {
        self.addressInfo = {}
        self.allUsers = []

        emit ContractInitialized()
    }

}
