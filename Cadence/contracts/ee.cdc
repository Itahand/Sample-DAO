        pub fun resolveView(_ view: Type): AnyStruct? {
            switch view {
                case Type<FungibleTokenMetadataViews.FTView>():
                    return FungibleTokenMetadataViews.FTView(
                        ftDisplay: self.resolveView(Type<FungibleTokenMetadataViews.FTDisplay>()) as! FungibleTokenMetadataViews.FTDisplay?,
                        ftVaultData: self.resolveView(Type<FungibleTokenMetadataViews.FTVaultData>()) as! FungibleTokenMetadataViews.FTVaultData?
                    )
                case Type<FungibleTokenMetadataViews.FTDisplay>():
                    let media = MetadataViews.Media(
                            file: MetadataViews.HTTPFile(
                            url: "https://www.blockversity.xyz/img/logo-1-1@1x.png"
                        ),
                        mediaType: "image/svg+xml"
                    )
                    let medias = MetadataViews.Medias([media])
                    return FungibleTokenMetadataViews.FTDisplay(
                        name: "BlockVersity Fungible Token",
                        symbol: "BVT",
                        description: "This fungible token is used as a governance token for the BlockVersity DAO built on Flow",
                        externalURL: MetadataViews.ExternalURL("https://www.blockversity.xyz/"),
                        logos: medias,
                        socials: {
                            "Twitter": MetadataViews.ExternalURL("https://twitter.com/BlockV3rsity"),
                            "Instagram": MetadataViews.ExternalURL("https://www.instagram.com/blockversity3.0"),
                            "Facebook": MetadataViews.ExternalURL("https://www.facebook.com/BlockV3rsity"),
                            "LinkedIn": MetadataViews.ExternalURL("https://www.linkedin.com/company/blockversity/")
                        }
                    )
                case Type<FungibleTokenMetadataViews.FTVaultData>():
                    return FungibleTokenMetadataViews.FTVaultData(
                        storagePath: BlockVersityTokenMetadataViews.VaultStoragePath,
                        receiverPath: BlockVersityTokenMetadataViews.ReceiverPublicPath,
                        metadataPath: BlockVersityTokenMetadataViews.VaultPublicPath,
                        providerPath: /private/BlockVersityTokenMetadataViewsVault,
                        receiverLinkedType: Type<&BlockVersityTokenMetadataViews.Vault{FungibleToken.Receiver}>(),
                        metadataLinkedType: Type<&BlockVersityTokenMetadataViews.Vault{FungibleToken.Balance, MetadataViews.Resolver}>(),
                        providerLinkedType: Type<&BlockVersityTokenMetadataViews.Vault{FungibleToken.Provider}>(),
                        createEmptyVaultFunction: (fun (): @FungibleToken.Vault {
                            return <-BlockVersityTokenMetadataViews.createEmptyVault()
                        })
                    )
            }
            return nil
        }