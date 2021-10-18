declare const addresses: {
    mainnet: {
        ATokenAbi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            constant?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            payable?: undefined;
            stateMutability?: undefined;
            constant?: undefined;
            outputs?: undefined;
        } | {
            constant: boolean;
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        LendingPoolAddressesProvider: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                stateMutability?: undefined;
                outputs?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingPoolAddressesProviderRegistry: {
            abi: ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingPool: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                stateMutability?: undefined;
                outputs?: undefined;
            } | {
                stateMutability: string;
                type: string;
                inputs?: undefined;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                inputs: never[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingPoolCollateralManager: {
            abi: ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingPoolConfigurator: {
            abi: ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingRateOracle: {
            abi: ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        PoolOracle: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                stateMutability?: undefined;
                outputs?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        PoolDataProvider: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                name?: undefined;
                outputs?: undefined;
            } | {
                inputs: never[];
                name: string;
                outputs: {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            })[];
            address: string;
        };
        WETHGateway: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                stateMutability?: undefined;
                outputs?: undefined;
            } | {
                stateMutability: string;
                type: string;
                inputs?: undefined;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: never[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        AaveCollector: {
            abi: {
                inputs: never[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            }[];
            address: string;
        };
        aAMPL: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aBAL: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aBAT: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aBUSD: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aCRV: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aDAI: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aENJ: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aGUSD: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aKNC: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aLINK: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aMANA: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aMKR: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aPAX: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aRAI: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aREN: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aRENFIL: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aSNX: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aSUSD: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aTUSD: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aUNI: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aUSDC: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aUSDT: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aWBTC: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aWETH: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aXSUSHI: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aYFI: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aZRX: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
    };
    matic: {
        ATokenAbi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            constant?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            payable?: undefined;
            stateMutability?: undefined;
            constant?: undefined;
            outputs?: undefined;
        } | {
            constant: boolean;
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        LendingPoolAddressesProvider: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                stateMutability?: undefined;
                outputs?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingPoolAddressesProviderRegistry: {
            abi: ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingPool: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                stateMutability?: undefined;
                outputs?: undefined;
            } | {
                stateMutability: string;
                type: string;
                inputs?: undefined;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                inputs: never[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingPoolCollateralManager: {
            abi: ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingPoolConfigurator: {
            abi: ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingRateOracle: {
            abi: ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        PoolOracle: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                stateMutability?: undefined;
                outputs?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        PoolDataProvider: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                name?: undefined;
                outputs?: undefined;
            } | {
                inputs: never[];
                name: string;
                outputs: {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            })[];
            address: string;
        };
        WETHGateway: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                stateMutability?: undefined;
                outputs?: undefined;
            } | {
                stateMutability: string;
                type: string;
                inputs?: undefined;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: never[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        AaveCollector: {
            abi: {
                inputs: never[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            }[];
            address: string;
        };
        aDAI: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aUSDC: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aUSDT: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aWBTC: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aWETH: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aWMATIC: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
    };
    avalanche: {
        ATokenAbi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            constant?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            payable?: undefined;
            stateMutability?: undefined;
            constant?: undefined;
            outputs?: undefined;
        } | {
            constant: boolean;
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            payable: boolean;
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        LendingPoolAddressesProvider: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                stateMutability?: undefined;
                outputs?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingPoolAddressesProviderRegistry: {
            abi: ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingPool: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                stateMutability?: undefined;
                outputs?: undefined;
            } | {
                stateMutability: string;
                type: string;
                inputs?: undefined;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                inputs: never[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingPoolCollateralManager: {
            abi: ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingPoolConfigurator: {
            abi: ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        LendingRateOracle: {
            abi: ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        PoolOracle: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                stateMutability?: undefined;
                outputs?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        PoolDataProvider: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                name?: undefined;
                outputs?: undefined;
            } | {
                inputs: never[];
                name: string;
                outputs: {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            })[];
            address: string;
        };
        WETHGateway: {
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                stateMutability?: undefined;
                outputs?: undefined;
            } | {
                stateMutability: string;
                type: string;
                inputs?: undefined;
                anonymous?: undefined;
                name?: undefined;
                outputs?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            } | {
                inputs: never[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            address: string;
        };
        AaveCollector: {
            abi: {
                inputs: never[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            }[];
            address: string;
        };
        aDAI: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aUSDC: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aUSDT: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aWBTC: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aWETH: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
        aWAVAX: {
            address: string;
            abi: ({
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
                name?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                payable?: undefined;
                stateMutability?: undefined;
                constant?: undefined;
                outputs?: undefined;
            } | {
                constant: boolean;
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[];
            decimals: number;
        };
    };
};
export default addresses;
