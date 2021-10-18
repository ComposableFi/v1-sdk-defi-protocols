"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protocols = void 0;
var aave_1 = __importDefault(require("./aave"));
var balancer_1 = __importDefault(require("./balancer"));
var chainlink_1 = __importDefault(require("./chainlink"));
var compound_1 = __importDefault(require("./compound"));
var curvefi_1 = __importDefault(require("./curvefi"));
var dydx_1 = __importDefault(require("./dydx"));
var idle_1 = __importDefault(require("./idle"));
var kyber_1 = __importDefault(require("./kyber"));
var maker_1 = __importDefault(require("./maker"));
var mstable_1 = __importDefault(require("./mstable"));
var uniswap_1 = __importDefault(require("./uniswap"));
var uniswapV2_1 = __importDefault(require("./uniswapV2"));
var uniswapV3_1 = __importDefault(require("./uniswapV3"));
var erc20_1 = __importDefault(require("./erc20"));
var composable_1 = __importDefault(require("./composable"));
exports.protocols = {
    aave: aave_1.default,
    balancer: balancer_1.default,
    chainlink: chainlink_1.default,
    compound: compound_1.default,
    curvefi: curvefi_1.default,
    dydx: dydx_1.default,
    idle: idle_1.default,
    kyber: kyber_1.default,
    maker: maker_1.default,
    mstable: mstable_1.default,
    uniswap: uniswap_1.default,
    uniswapV2: uniswapV2_1.default,
    uniswapV3: uniswapV3_1.default,
    erc20: erc20_1.default,
    composable: composable_1.default
};
