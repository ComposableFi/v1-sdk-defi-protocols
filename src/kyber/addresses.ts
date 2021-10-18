import ConversionRatesAbi from "./abi/ConversionRates.json";
import ExpectedRateAbi from "./abi/ExpectedRate.json";
import FeeBurnerAbi from "./abi/FeeBurner.json";
import KyberNetworkAbi from "./abi/KyberNetwork.json";
import KyberNetworkProxyAbi from "./abi/KyberNetworkProxy.json";
import KyberNetworkENSResolverAbi from "./abi/KyberNetworkENSResolver.json";
import KyberReserveAbi from "./abi/KyberReserve.json";
import LiquidityConversionRatesAbi from "./abi/LiquidityConversionRates.json";
import OrderbookReserveAbi from "./abi/OrderbookReserve.json";
import PermissionlessOrderbookReserveListerAbi from "./abi/PermissionlessOrderbookReserveLister.json";
import SanityRatesAbi from "./abi/SanityRates.json";
import WhiteListAbi from "./abi/WhiteList.json";

const addresses = {
  mainnet: {
    ConversionRates: {
      abi: ConversionRatesAbi,
      address: "0x798AbDA6Cc246D0EDbA912092A2a3dBd3d11191B"
    },
    ExpectedRate: {
      abi: ExpectedRateAbi,
      address: "0x96B610046D63638d970E6243151311d8827D69a5"
    },
    FeeBurner: {
      abi: FeeBurnerAbi,
      address: "0x52166528FCC12681aF996e409Ee3a421a4e128A3"
    },
    KyberNetwork: {
      abi: KyberNetworkAbi,
      address: "0x9ae49C0d7F8F9EF4B864e004FE86Ac8294E20950"
    },
    KyberNetworkProxy: {
      abi: KyberNetworkProxyAbi,
      address: "0x818E6FECD516Ecc3849DAf6845e3EC868087B755"
    },
    KyberNetworkENSResolver: {
      abi: KyberNetworkENSResolverAbi,
      address: "0x1982131C7D6959ff7768EE39c023Ad002d8c9759"
    },
    KyberReserve: {
      abi: KyberReserveAbi,
      address: "0x63825c174ab367968EC60f061753D3bbD36A0D8F"
    },
    LiquidityConversionRates: {
      abi: LiquidityConversionRatesAbi,
      address: "0x97D7126b6FF7C4D95601912f4Cdf790a3Cd1edaB"
    },
    OrderbookReserve: {
      abi: OrderbookReserveAbi,
      address: "0x9D27a2D71Ac44E075f764d5612581E9Afc1964fd"
    },
    PermissionlessOrderbookReserveLister: {
      abi: PermissionlessOrderbookReserveListerAbi,
      address: "0x84afa106fbf9b45e369724024cae14e8c7529c26"
    },
    SanityRates: {
      abi: SanityRatesAbi,
      address: "0xdfc85C08d5e5924aB49750E006CF8a826ffb7B13"
    },
    WhiteList: {
      abi: WhiteListAbi,
      address: "0x6e106a75D369d09A9Ea1DCc16Da844792aA669a3"
    },
  }
};

export default addresses;
