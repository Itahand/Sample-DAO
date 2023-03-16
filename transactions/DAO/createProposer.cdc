import ExampleDAO from "../../contracts/DAO/ExampleDAO.cdc"

transaction {

  prepare(signer: AuthAccount) {
    let admin = signer
      .borrow<&ExampleDAO.Admin>(from: ExampleDAO.AdminStoragePath)
      ?? panic("Signer is not the admin")

    let proposer <- admin.createProposer()

    signer.save(<-proposer, to: /storage/ExampleDAOProposer)
    signer.link<&ExampleDAO.Proposer>(
      /private/ExampleDAOProposer,
      target: /storage/ExampleDAOProposer
    )
  }
}