"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var L2Vault_json_1 = __importDefault(require("./abi/L2Vault.json"));
var addresses = {
    mainnet: {
        L2Vault: {
            abi: L2Vault_json_1.default,
            address: "0x29E0A2A859301957C93E626Eb611Ff4D41291cAD",
        },
    },
    matic: {
        L2Vault: {
            abi: L2Vault_json_1.default,
            address: "0xCd8e7322dc2659b1ec447e5d52FDd9c67e8C3c01",
        },
    },
    arbitrum: {
        L2Vault: {
            abi: L2Vault_json_1.default,
            address: "0xEba8C2Bf0d1C9413543188fc42D7323690AED051",
        },
    },
    avalanche: {
        L2Vault: {
            abi: L2Vault_json_1.default,
            address: "0xAC5b41d45ac10E28C34d201E491a3CCe6932FDF1",
        },
    },
    moonriver: {
        L2Vault: {
            abi: L2Vault_json_1.default,
            address: "0x23Bdb092ACC1660faF1f6eE8C1846BbCf2A7aFB2",
        },
    },
};
exports.default = addresses;
