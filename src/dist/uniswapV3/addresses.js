"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IUniswapV3SwapRouter_json_1 = __importDefault(require("./abi/IUniswapV3SwapRouter.json"));
var IUniswapV3Quoter_json_1 = __importDefault(require("./abi/IUniswapV3Quoter.json"));
var addresses = {
    quoter: {
        abi: IUniswapV3Quoter_json_1.default,
        address: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",
    },
    swapRouter: {
        abi: IUniswapV3SwapRouter_json_1.default,
        address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    },
};
exports.default = addresses;
