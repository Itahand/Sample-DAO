import { config } from "@onflow/fcl";

config()
  .put('app.detail.title', "BlockVersity")
  //.put('app.detail.icon', 'https://www.blockversity.xyz/img/logo-1-1@1x.png')
  .put('accessNode.api', 'https://rest-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn');
  //.put('accessNode.api', 'https://rest-mainnet.onflow.org')
  //.put('discovery.wallet', 'https://fcl-discovery.onflow.org/authn')
// .put('accessNode.api', 'http://localhost:8888')
// .put('discovery.wallet', 'http://localhost:8701/fcl/authn')