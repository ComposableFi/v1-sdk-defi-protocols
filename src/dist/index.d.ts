export declare const protocols: {
    aave: {
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
    balancer: {
        mainnet: {
            Vault: {
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
                    inputs: ({
                        internalType: string;
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        internalType: string;
                        name: string;
                        type: string;
                    })[];
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
                    stateMutability: string;
                    type: string;
                    inputs?: undefined;
                    anonymous?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                })[];
                address: string;
            };
            Authorizer: {
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
            WeightedPoolFactory: {
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
            WeightedPool2TokensFactory: {
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
            StablePoolFactory: {
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
            LiquidityBootstrappingPoolFactory: {
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
            MetaStablePoolFactory: {
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
            InvestmentPoolFactory: {
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
            PoolFactory: {
                abi: ({
                    inputs: never[];
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
                address: string;
            };
            ExchangeProxy: {
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
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    inputs?: undefined;
                    anonymous?: undefined;
                    name?: undefined;
                    constant?: undefined;
                    outputs?: undefined;
                } | {
                    constant: boolean;
                    inputs: ({
                        components: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        internalType: string;
                        name: string;
                        type: string;
                    } | {
                        internalType: string;
                        name: string;
                        type: string;
                        components?: undefined;
                    })[];
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
                address: string;
            };
            BPool: {
                abi: ({
                    inputs: never[];
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
            };
        };
        matic: {
            Vault: {
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
                    inputs: ({
                        internalType: string;
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        internalType: string;
                        name: string;
                        type: string;
                    })[];
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
                    stateMutability: string;
                    type: string;
                    inputs?: undefined;
                    anonymous?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                })[];
                address: string;
            };
            Authorizer: {
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
            WeightedPoolFactory: {
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
            WeightedPool2TokensFactory: {
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
            StablePoolFactory: {
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
            LiquidityBootstrappingPoolFactory: {
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
            MetaStablePoolFactory: {
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
            InvestmentPoolFactory: {
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
        };
        arbitrum: {
            Vault: {
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
                    inputs: ({
                        internalType: string;
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        internalType: string;
                        name: string;
                        type: string;
                    })[];
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
                    stateMutability: string;
                    type: string;
                    inputs?: undefined;
                    anonymous?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                })[];
                address: string;
            };
            Authorizer: {
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
            WeightedPoolFactory: {
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
            WeightedPool2TokensFactory: {
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
            StablePoolFactory: {
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
            LiquidityBootstrappingPoolFactory: {
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
            MetaStablePoolFactory: {
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
            InvestmentPoolFactory: {
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
        };
    };
    chainlink: {
        mainnet: {
            FeedRegistry: {
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
                } | {
                    inputs: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
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
                    anonymous?: undefined;
                })[];
                address: string;
            };
            AggregatorV3: {
                abi: {
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
                }[];
            };
        };
    };
    compound: {
        mainnet: {
            cToken: {
                abi: ({
                    inputs: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    signature: string;
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
                    signature: string;
                    payable?: undefined;
                    stateMutability?: undefined;
                    constant?: undefined;
                    outputs?: undefined;
                } | {
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    inputs?: undefined;
                    signature?: undefined;
                    anonymous?: undefined;
                    name?: undefined;
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
                    signature: string;
                    anonymous?: undefined;
                })[];
            };
            comptroller: {
                address: string;
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    signature: string;
                    anonymous?: undefined;
                } | {
                    inputs: never[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    signature: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    inputs?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    signature?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    signature: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
                    signature: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
                    signature: string;
                    anonymous?: undefined;
                })[];
            };
            priceOracle: {
                address: string;
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    inputs?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
            };
            cEther: {
                decimals: number;
                address: string;
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    signature: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    signature: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    inputs?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    signature?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    signature: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
            };
            cDAI: {
                decimals: number;
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
                    signature: string;
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
                    signature: string;
                    payable?: undefined;
                    stateMutability?: undefined;
                    constant?: undefined;
                    outputs?: undefined;
                } | {
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    inputs?: undefined;
                    signature?: undefined;
                    anonymous?: undefined;
                    name?: undefined;
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
                    signature: string;
                    anonymous?: undefined;
                })[];
            };
            cSAI: {
                decimals: number;
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
                    signature: string;
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
                    signature: string;
                    payable?: undefined;
                    stateMutability?: undefined;
                    constant?: undefined;
                    outputs?: undefined;
                } | {
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    inputs?: undefined;
                    signature?: undefined;
                    anonymous?: undefined;
                    name?: undefined;
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
                    signature: string;
                    anonymous?: undefined;
                })[];
            };
            cBAT: {
                decimals: number;
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
                    signature: string;
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
                    signature: string;
                    payable?: undefined;
                    stateMutability?: undefined;
                    constant?: undefined;
                    outputs?: undefined;
                } | {
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    inputs?: undefined;
                    signature?: undefined;
                    anonymous?: undefined;
                    name?: undefined;
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
                    signature: string;
                    anonymous?: undefined;
                })[];
            };
            cZRX: {
                decimals: number;
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
                    signature: string;
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
                    signature: string;
                    payable?: undefined;
                    stateMutability?: undefined;
                    constant?: undefined;
                    outputs?: undefined;
                } | {
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    inputs?: undefined;
                    signature?: undefined;
                    anonymous?: undefined;
                    name?: undefined;
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
                    signature: string;
                    anonymous?: undefined;
                })[];
            };
            cUSDC: {
                decimals: number;
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
                    signature: string;
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
                    signature: string;
                    payable?: undefined;
                    stateMutability?: undefined;
                    constant?: undefined;
                    outputs?: undefined;
                } | {
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    inputs?: undefined;
                    signature?: undefined;
                    anonymous?: undefined;
                    name?: undefined;
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
                    signature: string;
                    anonymous?: undefined;
                })[];
            };
            cREP: {
                decimals: number;
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
                    signature: string;
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
                    signature: string;
                    payable?: undefined;
                    stateMutability?: undefined;
                    constant?: undefined;
                    outputs?: undefined;
                } | {
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    inputs?: undefined;
                    signature?: undefined;
                    anonymous?: undefined;
                    name?: undefined;
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
                    signature: string;
                    anonymous?: undefined;
                })[];
            };
            cWBTC: {
                decimals: number;
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
                    signature: string;
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
                    signature: string;
                    payable?: undefined;
                    stateMutability?: undefined;
                    constant?: undefined;
                    outputs?: undefined;
                } | {
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    inputs?: undefined;
                    signature?: undefined;
                    anonymous?: undefined;
                    name?: undefined;
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
                    signature: string;
                    anonymous?: undefined;
                })[];
            };
        };
    };
    curvefi: {
        CurveTokenAbi: ({
            name: string;
            inputs: {
                type: string;
                name: string;
                indexed: boolean;
            }[];
            anonymous: boolean;
            type: string;
            outputs?: undefined;
            constant?: undefined;
            payable?: undefined;
            gas?: undefined;
        } | {
            outputs: never[];
            inputs: {
                type: string;
                name: string;
            }[];
            constant: boolean;
            payable: boolean;
            type: string;
            name?: undefined;
            anonymous?: undefined;
            gas?: undefined;
        } | {
            name: string;
            outputs: {
                type: string;
                name: string;
            }[];
            inputs: {
                type: string;
                name: string;
            }[];
            constant: boolean;
            payable: boolean;
            type: string;
            gas: number;
            anonymous?: undefined;
        })[];
        TokenExchangeAbi: ({
            name: string;
            inputs: ({
                type: string;
                name: string;
                indexed: boolean;
                unit: string;
            } | {
                type: string;
                name: string;
                indexed: boolean;
                unit?: undefined;
            })[];
            anonymous: boolean;
            type: string;
            outputs?: undefined;
            constant?: undefined;
            payable?: undefined;
            gas?: undefined;
        } | {
            outputs: never[];
            inputs: {
                type: string;
                name: string;
            }[];
            constant: boolean;
            payable: boolean;
            type: string;
            name?: undefined;
            anonymous?: undefined;
            gas?: undefined;
        } | {
            name: string;
            outputs: never[];
            inputs: ({
                type: string;
                name: string;
                unit?: undefined;
            } | {
                type: string;
                unit: string;
                name: string;
            })[];
            constant: boolean;
            payable: boolean;
            type: string;
            gas: number;
            anonymous?: undefined;
        } | {
            name: string;
            outputs: {
                type: string;
                name: string;
            }[];
            inputs: {
                type: string;
                name: string;
            }[];
            constant: boolean;
            payable: boolean;
            type: string;
            gas: number;
            anonymous?: undefined;
        } | {
            name: string;
            outputs: {
                type: string;
                unit: string;
                name: string;
            }[];
            inputs: never[];
            constant: boolean;
            payable: boolean;
            type: string;
            gas: number;
            anonymous?: undefined;
        })[];
        mainnet: {
            BasePools: {
                StableSwap3Pool: string;
                crv3Pool: string;
                aave: string;
                StableSwapEURS: string;
                crvEURS: string;
                StableSwapIronBank: string;
                crvIronBank: string;
                StableSwapStETH: string;
                crvStEth: string;
                crvTriCrypto: string;
            };
            MetaPools: {
                StableSwapbBtc: string;
                crvbBtc: string;
                StableSwapbdUsd: string;
                crvdUsd: string;
                StableSwapGUsd: string;
                crvGUsd: string;
                StableSwapUst: string;
                crvUst: string;
            };
        };
    };
    dydx: {
        mainnet: {
            WethPriceOracle: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                } | {
                    constant: boolean;
                    inputs: never[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                })[];
                address: string;
            };
            UsdcPriceOracle: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                } | {
                    constant: boolean;
                    inputs: never[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                })[];
                address: string;
            };
            DaiPriceOracle: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    constant: boolean;
                    inputs: never[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: ({
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    })[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            Expiry: {
                abi: ({
                    constant: boolean;
                    inputs: ({
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    } | {
                        name: string;
                        type: string;
                        components?: undefined;
                    })[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    constant: boolean;
                    inputs: ({
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    })[];
                    name: string;
                    outputs: {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            ExpiryV2: {
                abi: ({
                    constant: boolean;
                    inputs: ({
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    } | {
                        name: string;
                        type: string;
                        components?: undefined;
                    })[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    constant: boolean;
                    inputs: ({
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    })[];
                    name: string;
                    outputs: {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            AdminImpl: {
                abi: {
                    anonymous: boolean;
                    inputs: ({
                        indexed: boolean;
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        indexed: boolean;
                        name: string;
                        type: string;
                    })[];
                    name: string;
                    type: string;
                }[];
                address: string;
            };
            OperationImpl: {
                abi: never[];
                address: string;
            };
            LimitOrders: {
                abi: ({
                    constant: boolean;
                    inputs: ({
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    })[];
                    name: string;
                    outputs: {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            StopLimitOrders: {
                abi: ({
                    constant: boolean;
                    inputs: ({
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    })[];
                    name: string;
                    outputs: {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            CanonicalOrders: {
                abi: ({
                    constant: boolean;
                    inputs: ({
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    })[];
                    name: string;
                    outputs: {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: ({
                        indexed: boolean;
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        indexed: boolean;
                        name: string;
                        type: string;
                    })[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            Refunder: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    constant: boolean;
                    inputs: ({
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    })[];
                    name: string;
                    outputs: {
                        components: {
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: ({
                        components: {
                            name: string;
                            type: string;
                        }[];
                        indexed: boolean;
                        name: string;
                        type: string;
                    } | {
                        indexed: boolean;
                        name: string;
                        type: string;
                        components?: undefined;
                    })[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            PerpetualProxy: {
                "PBTC-USDC": string;
                "PLINK-USDC": string;
                "WETH-PUSD": string;
            };
            PerpetualV1: {
                "PBTC-USDC": string;
                "PLINK-USDC": string;
                "WETH-PUSD": string;
            };
            P1FundingOracle: {
                "PBTC-USDC": string;
                "PLINK-USDC": string;
            };
            P1InverseFundingOracle: string;
            P1MakerOracle: {
                "PBTC-USDC": string;
                "WETH-PUSD": string;
            };
            P1OracleInverter: {
                "WETH-PUSD": string;
            };
            P1ChainlinkOracle: {
                "PLINK-USDC": string;
            };
            P1Orders: {
                "PBTC-USDC": string;
                "PLINK-USDC": string;
            };
            P1InverseOrders: {
                "WETH-PUSD": string;
            };
            P1Deleveraging: {
                "PBTC-USDC": string;
                "PLINK-USDC": string;
                "WETH-PUSD": string;
            };
            P1Liquidation: {
                "PBTC-USDC": string;
                "PLINK-USDC": string;
                "WETH-PUSD": string;
            };
            P1LiquidatorProxy: {
                "PBTC-USDC": string;
                "PLINK-USDC": string;
                "WETH-PUSD": string;
                P1CurrencyConverterProxy: {
                    "PBTC-USDC": string;
                    "PLINK-USDC": string;
                    "WETH-PUSD": string;
                };
                P1WethProxy: {
                    "WETH-PUSD": string;
                };
                P1MirrorOracleETHUSD: {
                    "PBTC-USDC": string;
                    "PLINK-USDC": string;
                    "WETH-PUSD": string;
                };
            };
        };
    };
    idle: {
        mainnet: {
            IdleDai: {
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
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
                address: string;
            };
            IdleUSDC: {
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
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
                address: string;
            };
            IdleUSDT: {
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
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
                address: string;
            };
            IdleSUSD: {
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
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
                address: string;
            };
            IdleTUSD: {
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
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
                address: string;
            };
            IdleWBTC: {
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
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
                address: string;
            };
            IdleWETH: {
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
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
                address: string;
            };
            Idle: {
                abi: ({
                    inputs: never[];
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    constant?: undefined;
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
                    constant?: undefined;
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
                    constant: boolean;
                    anonymous?: undefined;
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
                    constant?: undefined;
                })[];
                address: string;
            };
            GovernorAlpha: {
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
                    constant?: undefined;
                    payable?: undefined;
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
                    constant?: undefined;
                    payable?: undefined;
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
                    constant: boolean;
                    anonymous?: undefined;
                    payable?: undefined;
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
                    constant?: undefined;
                    payable?: undefined;
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
                    payable: boolean;
                    anonymous?: undefined;
                    constant?: undefined;
                } | {
                    inputs: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
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
                    constant: boolean;
                    anonymous?: undefined;
                    payable?: undefined;
                })[];
                address: string;
            };
            Timelock: {
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
                    constant?: undefined;
                    payable?: undefined;
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
                    constant?: undefined;
                    payable?: undefined;
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
                    constant: boolean;
                    anonymous?: undefined;
                    payable?: undefined;
                } | {
                    stateMutability: string;
                    type: string;
                    payable: boolean;
                    inputs?: undefined;
                    anonymous?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    constant?: undefined;
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
                    constant?: undefined;
                    payable?: undefined;
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
                    payable: boolean;
                    anonymous?: undefined;
                    constant?: undefined;
                })[];
                address: string;
            };
            EarlyRewards: {
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
                    constant?: undefined;
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
                    constant?: undefined;
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
                    constant: boolean;
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
                    constant?: undefined;
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
                    constant?: undefined;
                })[];
                address: string;
            };
            PriceOracle: {
                abi: ({
                    inputs: never[];
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    constant?: undefined;
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
                    constant?: undefined;
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
                    constant: boolean;
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
                    constant?: undefined;
                })[];
                address: string;
            };
        };
    };
    kyber: {
        mainnet: {
            ConversionRates: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            ExpectedRate: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            FeeBurner: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            KyberNetwork: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    inputs?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            KyberNetworkProxy: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            KyberNetworkENSResolver: {
                abi: {
                    constant: boolean;
                    inputs: never[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                }[];
                address: string;
            };
            KyberReserve: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    inputs?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            LiquidityConversionRates: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            OrderbookReserve: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            PermissionlessOrderbookReserveLister: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            SanityRates: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
            WhiteList: {
                abi: ({
                    constant: boolean;
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                } | {
                    inputs: {
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    constant?: undefined;
                    name?: undefined;
                    outputs?: undefined;
                    anonymous?: undefined;
                } | {
                    anonymous: boolean;
                    inputs: {
                        indexed: boolean;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    type: string;
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                })[];
                address: string;
            };
        };
    };
    maker: {
        ethUsdPriceFeed: {
            address: string;
            abi: ({
                constant: boolean;
                inputs: {
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    name: string;
                    type: string;
                }[];
                payable: boolean;
                type: string;
                anonymous?: undefined;
            } | {
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                constant?: undefined;
                outputs?: undefined;
                payable?: undefined;
            })[];
        };
        proxyRegistry: {
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
                constant?: undefined;
                name?: undefined;
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
            })[];
        };
        dssCdpManager: {
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
        };
        dssProxyActions: {
            address: string;
            abi: {
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
            }[];
        };
        jug: {
            address: string;
        };
        daiJoin: {
            address: string;
        };
        batAJoin: {
            address: string;
        };
        ethAJoin: {
            address: string;
        };
        usdcJoin: {
            address: string;
        };
    };
    mstable: {
        mainnet: {
            mUSD: {
                symbol: string;
                decimals: number;
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
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
                address: string;
            };
            MTA: {
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
                address: string;
            };
            MassetValidationHelper: {
                abi: {
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
                }[];
                address: string;
            };
            ForgeValidator: {
                abi: {
                    constant: boolean;
                    inputs: ({
                        internalType: string;
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        internalType: string;
                        name: string;
                        type: string;
                    })[];
                    name: string;
                    outputs: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                }[];
                address: string;
            };
            BasketManager: {
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
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
                } | {
                    constant: boolean;
                    inputs: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
                    name: string;
                    outputs: ({
                        internalType: string;
                        name: string;
                        type: string;
                        components?: undefined;
                    } | {
                        components: ({
                            components: {
                                internalType: string;
                                name: string;
                                type: string;
                            }[];
                            internalType: string;
                            name: string;
                            type: string;
                        } | {
                            internalType: string;
                            name: string;
                            type: string;
                            components?: undefined;
                        })[];
                        internalType: string;
                        name: string;
                        type: string;
                    })[];
                    payable: boolean;
                    stateMutability: string;
                    type: string;
                    anonymous?: undefined;
                })[];
                address: string;
            };
            AaveIntegration: {
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
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
                address: string;
            };
            CompoundIntegration: {
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
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
                address: string;
            };
            Nexus: {
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
                address: string;
            };
            DelayedProxyAdmin: {
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
                address: string;
            };
            SavingsManager: {
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
                address: string;
            };
            SavingsContract: {
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
                address: string;
            };
            RewardsDistributor: {
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
                address: string;
            };
            StakingRewardsWithPlatformToken: {
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
            };
        };
    };
    uniswap: {
        mainnet: {
            factory: {
                address: string;
                abi: ({
                    name: string;
                    inputs: {
                        type: string;
                        name: string;
                        indexed: boolean;
                    }[];
                    anonymous: boolean;
                    type: string;
                    outputs?: undefined;
                    constant?: undefined;
                    payable?: undefined;
                    gas?: undefined;
                } | {
                    name: string;
                    outputs: {
                        type: string;
                        name: string;
                    }[];
                    inputs: {
                        type: string;
                        name: string;
                    }[];
                    constant: boolean;
                    payable: boolean;
                    type: string;
                    gas: number;
                    anonymous?: undefined;
                })[];
            };
            exchange: {
                abi: ({
                    name: string;
                    inputs: {
                        type: string;
                        name: string;
                        indexed: boolean;
                    }[];
                    anonymous: boolean;
                    type: string;
                    outputs?: undefined;
                    constant?: undefined;
                    payable?: undefined;
                    gas?: undefined;
                } | {
                    name: string;
                    outputs: {
                        type: string;
                        name: string;
                    }[];
                    inputs: {
                        type: string;
                        name: string;
                    }[];
                    constant: boolean;
                    payable: boolean;
                    type: string;
                    gas: number;
                    anonymous?: undefined;
                } | {
                    name: string;
                    outputs: never[];
                    inputs: never[];
                    constant: boolean;
                    payable: boolean;
                    type: string;
                    anonymous?: undefined;
                    gas?: undefined;
                })[];
            };
        };
    };
    uniswapV2: {
        mainnet: {
            Factory: {
                address: string;
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
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
            };
            Pair: {
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
                    constant?: undefined;
                    outputs?: undefined;
                    payable?: undefined;
                    stateMutability?: undefined;
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
            };
            Router01: {
                address: string;
                abi: {
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
                }[];
            };
            Router02: {
                address: string;
                abi: {
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
                }[];
            };
        };
    };
    uniswapV3: {
        quoter: {
            abi: {
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
            }[];
            address: string;
        };
        swapRouter: {
            abi: {
                inputs: {
                    components: {
                        internalType: string;
                        name: string;
                        type: string;
                    }[];
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
            }[];
            address: string;
        };
    };
    erc20: {
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
        eth: {
            symbol: string;
            decimals: number;
            address: string;
        };
        dai: {
            symbol: string;
            decimals: number;
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
        };
        usdc: {
            symbol: string;
            decimals: number;
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
        };
        weth: {
            symbol: string;
            decimals: number;
            address: string;
        };
        wbtc: {
            symbol: string;
            decimals: number;
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
        };
    };
    composable: {
        mainnet: {
            L2Vault: {
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
        };
        matic: {
            L2Vault: {
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
        };
        arbitrum: {
            L2Vault: {
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
        };
        avalanche: {
            L2Vault: {
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
        };
        moonriver: {
            L2Vault: {
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
        };
    };
};
