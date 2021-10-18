"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConversionRates_json_1 = __importDefault(require("./abi/ConversionRates.json"));
var ExpectedRate_json_1 = __importDefault(require("./abi/ExpectedRate.json"));
var FeeBurner_json_1 = __importDefault(require("./abi/FeeBurner.json"));
var KyberNetwork_json_1 = __importDefault(require("./abi/KyberNetwork.json"));
var KyberNetworkProxy_json_1 = __importDefault(require("./abi/KyberNetworkProxy.json"));
var KyberNetworkENSResolver_json_1 = __importDefault(require("./abi/KyberNetworkENSResolver.json"));
var KyberReserve_json_1 = __importDefault(require("./abi/KyberReserve.json"));
var LiquidityConversionRates_json_1 = __importDefault(require("./abi/LiquidityConversionRates.json"));
var OrderbookReserve_json_1 = __importDefault(require("./abi/OrderbookReserve.json"));
var PermissionlessOrderbookReserveLister_json_1 = __importDefault(require("./abi/PermissionlessOrderbookReserveLister.json"));
var SanityRates_json_1 = __importDefault(require("./abi/SanityRates.json"));
var WhiteList_json_1 = __importDefault(require("./abi/WhiteList.json"));
var addresses = {
    mainnet: {
        ConversionRates: {
            abi: ConversionRates_json_1.default,
            address: "0x798AbDA6Cc246D0EDbA912092A2a3dBd3d11191B"
        },
        ExpectedRate: {
            abi: ExpectedRate_json_1.default,
            address: "0x96B610046D63638d970E6243151311d8827D69a5"
        },
        FeeBurner: {
            abi: FeeBurner_json_1.default,
            address: "0x52166528FCC12681aF996e409Ee3a421a4e128A3"
        },
        KyberNetwork: {
            abi: KyberNetwork_json_1.default,
            address: "0x9ae49C0d7F8F9EF4B864e004FE86Ac8294E20950"
        },
        KyberNetworkProxy: {
            abi: KyberNetworkProxy_json_1.default,
            address: "0x818E6FECD516Ecc3849DAf6845e3EC868087B755"
        },
        KyberNetworkENSResolver: {
            abi: KyberNetworkENSResolver_json_1.default,
            address: "0x1982131C7D6959ff7768EE39c023Ad002d8c9759"
        },
        KyberReserve: {
            abi: KyberReserve_json_1.default,
            address: "0x63825c174ab367968EC60f061753D3bbD36A0D8F"
        },
        LiquidityConversionRates: {
            abi: LiquidityConversionRates_json_1.default,
            address: "0x97D7126b6FF7C4D95601912f4Cdf790a3Cd1edaB"
        },
        OrderbookReserve: {
            abi: OrderbookReserve_json_1.default,
            address: "0x9D27a2D71Ac44E075f764d5612581E9Afc1964fd"
        },
        PermissionlessOrderbookReserveLister: {
            abi: PermissionlessOrderbookReserveLister_json_1.default,
            address: "0x84afa106fbf9b45e369724024cae14e8c7529c26"
        },
        SanityRates: {
            abi: SanityRates_json_1.default,
            address: "0xdfc85C08d5e5924aB49750E006CF8a826ffb7B13"
        },
        WhiteList: {
            abi: WhiteList_json_1.default,
            address: "0x6e106a75D369d09A9Ea1DCc16Da844792aA669a3"
        },
    }
};
exports.default = addresses;
