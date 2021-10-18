declare const _default: {
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
export = _default;
