import { config } from "@onflow/fcl";

config()
<<<<<<< HEAD
  .put('app.detail.title', "Sample DAO")
  .put('app.detail.icon', '../assets/flow-logo.png')
=======
  .put('app.detail.title', "BlockVersity")
  //.put('app.detail.icon', 'https://www.blockversity.xyz/img/logo-1-1@1x.png')
>>>>>>> 10cf48f50083f869938c73f6a6df4ecf0e1bcf82
  .put('accessNode.api', 'https://rest-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn');
  //.put('accessNode.api', 'https://rest-mainnet.onflow.org')
  //.put('discovery.wallet', 'https://fcl-discovery.onflow.org/authn')
// .put('accessNode.api', 'http://localhost:8888')
// .put('discovery.wallet', 'http://localhost:8701/fcl/authn')