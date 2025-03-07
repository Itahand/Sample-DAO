import FlowToken from "../../../contracts/utility/FlowToken.cdc"

transaction(pairTemplateCode: String) {

    prepare(deployAccount: AuthAccount) {

        let token0Vault <- FlowToken.createEmptyVault()

        let token1Vault <- FlowToken.createEmptyVault()

        deployAccount.contracts.add(name: "SwapPair", code: pairTemplateCode.utf8, token0Vault: <-token0Vault, token1Vault: <-token1Vault)

    }

}