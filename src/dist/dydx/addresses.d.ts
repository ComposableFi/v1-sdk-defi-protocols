declare const addresses: {
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
export default addresses;
