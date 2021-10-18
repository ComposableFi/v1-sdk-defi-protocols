"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AggregatorV3_json_1 = __importDefault(require("./abi/AggregatorV3.json"));
var FeedRegistry_json_1 = __importDefault(require("./abi/FeedRegistry.json"));
var addresses = {
    mainnet: {
        FeedRegistry: {
            abi: FeedRegistry_json_1.default,
            address: "0x47Fb2585D2C56Fe188D0E6ec628a38b74fCeeeDf"
        },
        AggregatorV3: {
            abi: AggregatorV3_json_1.default,
        }
    },
};
exports.default = addresses;
