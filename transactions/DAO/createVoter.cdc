import BlockVersityDAO from "../../contracts/DAO/BlockVersityDAO.cdc"

transaction {

  prepare(signer: AuthAccount) {

    let voter <- BlockVersityDAO.initVoter()

    signer.save(<-voter, to: /storage/BlockVersityDAOVoter)
    signer.link<&BlockVersityDAO.Voter>(
      /public/BlockVersityDAOVoter,
      target: /storage/BlockVersityDAOVoter
    )
  }
}