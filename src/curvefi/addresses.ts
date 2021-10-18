import TokenExchangeAbi from "./abi/TokenExchange.json";
import CurveTokenAbi from "./abi/CurveToken.json";


const addresses = {
  CurveTokenAbi,
  TokenExchangeAbi,
  mainnet: {
    BasePools: {
      StableSwap3Pool: "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
      crv3Pool: "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
      aave: "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
      StableSwapEURS: "0x0Ce6a5fF5217e38315f87032CF90686C96627CAA",
      crvEURS: "0x194eBd173F6cDacE046C53eACcE9B953F28411d1",
      StableSwapIronBank: "0x2dded6Da1BF5DBdF597C45fcFaa3194e53EcfeAF",
      crvIronBank: "0x5282a4eF67D9C33135340fB3289cc1711c13638C",
      StableSwapStETH: "0xDC24316b9AE028F1497c275EB9192a3Ea0f67022",
      crvStEth: "0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c",
      crvTriCrypto: "0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF"
    },
    MetaPools: {
      StableSwapbBtc: "0x071c661B4DeefB59E2a3DdB20Db036821eeE8F4b",
      crvbBtc: "0x410e3E86ef427e30B9235497143881f717d93c2A",
      StableSwapbdUsd: "0x8038C01A0390a8c547446a0b2c18fc9aEFEcc10c",
      crvdUsd: "0x3a664Ab939FD8482048609f652f9a0B0677337B9",
      StableSwapGUsd: "0x4f062658EaAF2C1ccf8C8e36D6824CDf41167956",
      crvGUsd: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
      StableSwapUst: "0x890f4e345B1dAED0367A877a1612f86A1f86985f",
      crvUst: "0x94e131324b6054c0D789b190b2dAC504e4361b53"
    }
  }
};

export default addresses;
