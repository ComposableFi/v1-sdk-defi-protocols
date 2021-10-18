"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ERC20_json_1 = __importDefault(require("./abi/ERC20.json"));
var tokens = {
    eth: {
        symbol: "ETH",
        decimals: 18,
        address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    },
    dai: {
        symbol: "DAI",
        decimals: 18,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        abi: ERC20_json_1.default,
    },
    usdc: {
        symbol: "USDC",
        decimals: 6,
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        abi: ERC20_json_1.default,
    },
    weth: {
        symbol: "WETH",
        decimals: 18,
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    },
    wbtc: {
        symbol: "WBTC",
        decimals: 8,
        address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        abi: ERC20_json_1.default,
    },
};
exports.default = tokens;
