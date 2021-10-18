import VaultAbi from "./abi/Vault.json";
import AuthorizerAbi from "./abi/Authorizer.json";
import WeightedPoolFactoryAbi from "./abi/WeightedPoolFactory.json";
import WeightedPool2TokensFactoryAbi from "./abi/WeightedPool2TokensFactory.json";
import StablePoolFactoryAbi from "./abi/StablePoolFactory.json";
import LiquidityBootstrappingPoolFactoryAbi from "./abi/LiquidityBootstrappingPoolFactory.json";
import MetaStablePoolFactoryAbi from "./abi/MetaStablePoolFactory.json";
import InvestmentPoolFactoryAbi from "./abi/InvestmentPoolFactory.json";
import ExchangeProxy from "./abi/ExchangeProxy.json";
import BFactory from "./abi/BFactory.json";
import BPool from "./abi/BPool.json";

const addresses = {
  mainnet: {
    Vault: {
      abi: VaultAbi,
      address: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
    },
    Authorizer: {
      abi: AuthorizerAbi,
      address: "0xA331D84eC860Bf466b4CdCcFb4aC09a1B43F3aE6",
    },
    WeightedPoolFactory: {
      abi: WeightedPoolFactoryAbi,
      address: "0x8E9aa87E45e92bad84D5F8DD1bff34Fb92637dE9",
    },
    WeightedPool2TokensFactory: {
      abi: WeightedPool2TokensFactoryAbi,
      address: "0xA5bf2ddF098bb0Ef6d120C98217dD6B141c74EE0",
    },
    StablePoolFactory: {
      abi: StablePoolFactoryAbi,
      address: "0xc66Ba2B6595D3613CCab350C886aCE23866EDe24",
    },
    LiquidityBootstrappingPoolFactory: {
      abi: LiquidityBootstrappingPoolFactoryAbi,
      address: "0x751A0bC0e3f75b38e01Cf25bFCE7fF36DE1C87DE",
    },
    MetaStablePoolFactory: {
      abi: MetaStablePoolFactoryAbi,
      address: "0x67d27634E44793fE63c467035E31ea8635117cd4",
    },
    InvestmentPoolFactory: {
      abi: InvestmentPoolFactoryAbi,
      address: "0x48767F9F868a4A7b86A90736632F6E44C2df7fa9",
    },
    PoolFactory: {
      abi: BFactory,
      address: "0x9424B1412450D0f8Fc2255FAf6046b98213B76Bd",
    },
    ExchangeProxy: {
      abi: ExchangeProxy,
      address: "0x6317C5e82A06E1d8bf200d21F4510Ac2c038AC81",
    },
    BPool: {
      abi: BPool,
    }
  },


  matic: {
    Vault: {
      abi: VaultAbi,
      address: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
    },
    Authorizer: {
      abi: AuthorizerAbi,
      address: "0xA331D84eC860Bf466b4CdCcFb4aC09a1B43F3aE6",
    },
    WeightedPoolFactory: {
      abi: WeightedPoolFactoryAbi,
      address: "0x8E9aa87E45e92bad84D5F8DD1bff34Fb92637dE9",
    },
    WeightedPool2TokensFactory: {
      abi: WeightedPool2TokensFactoryAbi,
      address: "0xA5bf2ddF098bb0Ef6d120C98217dD6B141c74EE0",
    },
    StablePoolFactory: {
      abi: StablePoolFactoryAbi,
      address: "0xc66Ba2B6595D3613CCab350C886aCE23866EDe24",
    },
    LiquidityBootstrappingPoolFactory: {
      abi: LiquidityBootstrappingPoolFactoryAbi,
      address: "0x751A0bC0e3f75b38e01Cf25bFCE7fF36DE1C87DE",
    },
    MetaStablePoolFactory: {
      abi: MetaStablePoolFactoryAbi,
      address: "0xdAE7e32ADc5d490a43cCba1f0c736033F2b4eFca",
    },
    InvestmentPoolFactory: {
      abi: InvestmentPoolFactoryAbi,
      address: "0x0f7bb7ce7b6ed9366F9b6B910AdeFE72dC538193",
    }
  },


  arbitrum: {
    Vault: {
      abi: VaultAbi,
      address: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
    },
    Authorizer: {
      abi: AuthorizerAbi,
      address: "0xA331D84eC860Bf466b4CdCcFb4aC09a1B43F3aE6",
    },
    WeightedPoolFactory: {
      abi: WeightedPoolFactoryAbi,
      address: "0x7dFdEF5f355096603419239CE743BfaF1120312B",
    },
    WeightedPool2TokensFactory: {
      abi: WeightedPool2TokensFactoryAbi,
      address: "0xCF0a32Bbef8F064969F21f7e02328FB577382018",
    },
    StablePoolFactory: {
      abi: StablePoolFactoryAbi,
      address: "0x2433477A10FC5d31B9513C638F19eE85CaED53Fd",
    },
    LiquidityBootstrappingPoolFactory: {
      abi: LiquidityBootstrappingPoolFactoryAbi,
      address: "0x142B9666a0a3A30477b052962ddA81547E7029ab",
    },
    MetaStablePoolFactory: {
      abi: MetaStablePoolFactoryAbi,
      address: "0xEBFD5681977E38Af65A7487DC70B8221D089cCAD",
    },
    InvestmentPoolFactory: {
      abi: InvestmentPoolFactoryAbi,
      address: "0xaCd615B3705B9c880E4E7293f1030B34e57B4c1c",
    }
  }
};

export default addresses;
