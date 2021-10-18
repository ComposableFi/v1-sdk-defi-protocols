import LendingPoolAbi from "./abi/LendingPool.json";
import LendingPoolAddressesProviderAbi from "./abi/LendingPoolAddessProvider.json";
import LendingPoolAddessProviderRegistryAbi from "./abi/LendingPoolAddessProviderRegistry.json";
import LendingPoolCollateralManagerAbi from "./abi/LendingPoolCollateralManager.json";
import LendingPoolConfiguratorAbi from "./abi/LendingPoolConfigurator.json";
import LendingRateOracleAbi from "./abi/LendingRateOracle.json";
import PoolOracleAbi from "./abi/PoolOracle.json";
import PoolDataProviderAbi from "./abi/PoolDataProvider.json";
import WETHGatewayAbi from "./abi/WETHGateway.json";
import AaveCollectorAbi from "./abi/AaveCollector.json";
import ATokenAbi from "./abi/AToken.json";

const addresses = {
  mainnet: {
    ATokenAbi,
    LendingPoolAddressesProvider: {
      abi: LendingPoolAddressesProviderAbi,
      address: "0xb53c1a33016b2dc2ff3653530bff1848a515c8c5",
    },
    LendingPoolAddressesProviderRegistry: {
      abi: LendingPoolAddessProviderRegistryAbi,
      address: "0x52D306e36E3B6B02c153d0266ff0f85d18BCD413",
    },
    LendingPool: {
      abi: LendingPoolAbi,
      address: "0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9",
    },
    LendingPoolCollateralManager: {
      abi: LendingPoolCollateralManagerAbi,
      address: "0xbd4765210d4167ce2a5b87280d9e8ee316d5ec7c",
    },
    LendingPoolConfigurator: {
      abi: LendingPoolConfiguratorAbi,
      address: "0x311bb771e4f8952e6da169b425e7e92d6ac45756",
    },
    LendingRateOracle: {
      abi: LendingRateOracleAbi,
      address: "0x8a32f49ffba88aba6eff96f45d8bd1d4b3f35c7d",
    },
    PoolOracle: {
      abi: PoolOracleAbi,
      address: "0xa50ba011c48153de246e5192c8f9258a2ba79ca9",
    },
    PoolDataProvider: {
      abi: PoolDataProviderAbi,
      address: "0x057835Ad21a177dbdd3090bB1CAE03EaCF78Fc6d",
    },
    WETHGateway: {
      abi: WETHGatewayAbi,
      address: "0xcc9a0B7c43DC2a5F023Bb9b738E45B0Ef6B06E04",
    },
    AaveCollector: {
      abi: AaveCollectorAbi,
      address: "0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c",
    },
    aAMPL: {
      address: "0x1e6bb68acec8fefbd87d192be09bb274170a0548",
      abi: ATokenAbi,
      decimals: 18,
    },
    aBAL: {
      address: "0x272F97b7a56a387aE942350bBC7Df5700f8a4576",
      abi: ATokenAbi,
      decimals: 18,
    },
    aBAT: {
      address: "0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1",
      abi: ATokenAbi,
      decimals: 18,
    },
    aBUSD: {
      address: "0xA361718326c15715591c299427c62086F69923D9",
      abi: ATokenAbi,
      decimals: 18,
    },
    aCRV: {
      address: "0x8dAE6Cb04688C62d939ed9B68d32Bc62e49970b1",
      abi: ATokenAbi,
      decimals: 18,
    },
    aDAI: {
      address: "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
      abi: ATokenAbi,
      decimals: 18,
    },
    aENJ: {
      address: "0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef",
      abi: ATokenAbi,
      decimals: 18,
    },
    aGUSD: {
      address: "0xD37EE7e4f452C6638c96536e68090De8cBcdb583",
      abi: ATokenAbi,
      decimals: 2,
    },
    aKNC: {
      address: "0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA",
      abi: ATokenAbi,
      decimals: 18,
    },
    aLINK: {
      address: "0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0",
      abi: ATokenAbi,
      decimals: 18,
    },
    aMANA: {
      address: "0xa685a61171bb30d4072B338c80Cb7b2c865c873E",
      abi: ATokenAbi,
      decimals: 18,
    },
    aMKR: {
      address: "0xc713e5E149D5D0715DcD1c156a020976e7E56B88",
      abi: ATokenAbi,
      decimals: 18,
    },
    aPAX: {
      address: "0x2e8f4bdbe3d47d7d7de490437aea9915d930f1a3",
      abi: ATokenAbi,
      decimals: 18,
    },
    aRAI: {
      address: "0xc9BC48c72154ef3e5425641a3c747242112a46AF",
      abi: ATokenAbi,
      decimals: 18,
    },
    aREN: {
      address: "0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a",
      abi: ATokenAbi,
      decimals: 18,
    },
    aRENFIL: {
      address: "0x514cd6756ccbe28772d4cb81bc3156ba9d1744aa",
      abi: ATokenAbi,
      decimals: 18,
    },
    aSNX: {
      address: "0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2",
      abi: ATokenAbi,
      decimals: 18,
    },
    aSUSD: {
      address: "0x6C5024Cd4F8A59110119C56f8933403A539555EB",
      abi: ATokenAbi,
      decimals: 18,
    },
    aTUSD: {
      address: "0x101cc05f4A51C0319f570d5E146a8C625198e636",
      abi: ATokenAbi,
      decimals: 18,
    },
    aUNI: {
      address: "0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1",
      abi: ATokenAbi,
      decimals: 18,
    },
    aUSDC: {
      address: "0xBcca60bB61934080951369a648Fb03DF4F96263C",
      abi: ATokenAbi,
      decimals: 6,
    },
    aUSDT: {
      address: "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811",
      abi: ATokenAbi,
      decimals: 6,
    },
    aWBTC: {
      address: "0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656",
      abi: ATokenAbi,
      decimals: 8,
    },
    aWETH: {
      address: "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e",
      abi: ATokenAbi,
      decimals: 18,
    },
    aXSUSHI: {
      address: "0xf256cc7847e919fac9b808cc216cac87ccf2f47a",
      abi: ATokenAbi,
      decimals: 18,
    },
    aYFI: {
      address: "0x5165d24277cD063F5ac44Efd447B27025e888f37",
      abi: ATokenAbi,
      decimals: 18,
    },
    aZRX: {
      address: "0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e",
      abi: ATokenAbi,
      decimals: 18,
    },
  },


  matic: {
    ATokenAbi,
    LendingPoolAddressesProvider: {
      abi: LendingPoolAddressesProviderAbi,
      address: "0xd05e3E715d945B59290df0ae8eF85c1BdB684744",
    },
    LendingPoolAddressesProviderRegistry: {
      abi: LendingPoolAddessProviderRegistryAbi,
      address: "0x3ac4e9aa29940770aeC38fe853a4bbabb2dA9C19",
    },
    LendingPool: {
      abi: LendingPoolAbi,
      address: "0x8dff5e27ea6b7ac08ebfdf9eb090f32ee9a30fcf",
    },
    LendingPoolCollateralManager: {
      abi: LendingPoolCollateralManagerAbi,
      address: "0xa39599424642d9fd35e475ef802eddf798dc555b",
    },
    LendingPoolConfigurator: {
      abi: LendingPoolConfiguratorAbi,
      address: "0x26db2b833021583566323e3b8985999981b9f1f3",
    },
    LendingRateOracle: {
      abi: LendingRateOracleAbi,
      address: "0x17f73aead876cc4059089ff815eda37052960dfb",
    },
    PoolOracle: {
      abi: PoolOracleAbi,
      address: "0x0229f777b0fab107f9591a41d5f02e4e98db6f2d",
    },
    PoolDataProvider: {
      abi: PoolDataProviderAbi,
      address: "0x7551b5D2763519d4e37e8B81929D336De671d46d",
    },
    WETHGateway: {
      abi: WETHGatewayAbi,
      address: "0xbEadf48d62aCC944a06EEaE0A9054A90E5A7dc97",
    },
    AaveCollector: {
      abi: AaveCollectorAbi,
      address: "0x7734280A4337F37Fbf4651073Db7c28C80B339e9",
    },
    aDAI: {
      address: "0x27F8D03b3a2196956ED754baDc28D73be8830A6e",
      abi: ATokenAbi,
      decimals: 18,
    },
    aUSDC: {
      address: "0x1a13F4Ca1d028320A707D99520AbFefca3998b7F",
      abi: ATokenAbi,
      decimals: 6,
    },
    aUSDT: {
      address: "0x60D55F02A771d515e077c9C2403a1ef324885CeC",
      abi: ATokenAbi,
      decimals: 6,
    },
    aWBTC: {
      address: "0x5c2ed810328349100A66B82b78a1791B101C9D61",
      abi: ATokenAbi,
      decimals: 8,
    },
    aWETH: {
      address: "0x28424507fefb6f7f8E9D3860F56504E4e5f5f390",
      abi: ATokenAbi,
      decimals: 18,
    },
    aWMATIC: {
      address: "0x8dF3aad3a84da6b69A4DA8aeC3eA40d9091B2Ac4",
      abi: ATokenAbi,
      decimals: 18,
    }
  },

  avalanche: {
    ATokenAbi,
    LendingPoolAddressesProvider: {
      abi: LendingPoolAddressesProviderAbi,
      address: "0xb6A86025F0FE1862B372cb0ca18CE3EDe02A318f",
    },
    LendingPoolAddressesProviderRegistry: {
      abi: LendingPoolAddessProviderRegistryAbi,
      address: "0x4235E22d9C3f28DCDA82b58276cb6370B01265C2",
    },
    LendingPool: {
      abi: LendingPoolAbi,
      address: "0x4F01AeD16D97E3aB5ab2B501154DC9bb0F1A5A2C",
    },
    LendingPoolCollateralManager: {
      abi: LendingPoolCollateralManagerAbi,
      address: "0xa9c1bb836752a2Dfb3694ca084D8ffBB07768771",
    },
    LendingPoolConfigurator: {
      abi: LendingPoolConfiguratorAbi,
      address: "0x230B618aD4C475393A7239aE03630042281BD86e",
    },
    LendingRateOracle: {
      abi: LendingRateOracleAbi,
      address: "0xc34254642B504484465F38Cb1CC396d45a9c7c80",
    },
    PoolOracle: {
      abi: PoolOracleAbi,
      address: "0xdC336Cd4769f4cC7E9d726DA53e6d3fC710cEB89",
    },
    PoolDataProvider: {
      abi: PoolDataProviderAbi,
      address: "0x65285E9dfab318f57051ab2b139ccCf232945451",
    },
    WETHGateway: {
      abi: WETHGatewayAbi,
      address: "0x8a47F74d1eE0e2edEB4F3A7e64EF3bD8e11D27C8",
    },
    AaveCollector: {
      abi: AaveCollectorAbi,
      address: "0x467b92aF281d14cB6809913AD016a607b5ba8A36",
    },
    aDAI: {
      address: "0x47AFa96Cdc9fAb46904A55a6ad4bf6660B53c38a",
      abi: ATokenAbi,
      decimals: 18,
    },
    aUSDC: {
      address: "0x46A51127C3ce23fb7AB1DE06226147F446e4a857",
      abi: ATokenAbi,
      decimals: 6,
    },
    aUSDT: {
      address: "0x532E6537FEA298397212F09A61e03311686f548e",
      abi: ATokenAbi,
      decimals: 6,
    },
    aWBTC: {
      address: "0x686bEF2417b6Dc32C50a3cBfbCC3bb60E1e9a15D",
      abi: ATokenAbi,
      decimals: 8,
    },
    aWETH: {
      address: "0x53f7c5869a859F0AeC3D334ee8B4Cf01E3492f21",
      abi: ATokenAbi,
      decimals: 18,
    },
    aWAVAX: {
      address: "0xDFE521292EcE2A4f44242efBcD66Bc594CA9714B",
      abi: ATokenAbi,
      decimals: 18,
    }
  }
};

export default addresses;
