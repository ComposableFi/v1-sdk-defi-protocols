import IdleTokenGovernanceAbi from "./abi/IdleTokenGovernance.json";
import IdleAbi from "./abi/Idle.json";
import GovernorAlphaAbi from "./abi/GovernorAlpha.json";
import TimelockAbi from "./abi/Timelock.json";
import IdleControllerAbi from "./abi/IdleController.json";
import EarlyRewardsAbi from "./abi/EarlyRewards.json";
import PriceOracleAbi from "./abi/PriceOracle.json";

const addresses = {
  mainnet: {
    IdleDai: {
      abi: IdleTokenGovernanceAbi,
      address: "0x3fe7940616e5bc47b0775a0dccf6237893353bb4"
    },
    IdleUSDC: {
      abi: IdleTokenGovernanceAbi,
      address: "0x5274891bEC421B39D23760c04A6755eCB444797C"
    },
    IdleUSDT: {
      abi: IdleTokenGovernanceAbi,
      address: "0xF34842d05A1c888Ca02769A633DF37177415C2f8"
    },
    IdleSUSD: {
      abi: IdleTokenGovernanceAbi,
      address: "0xf52cdcd458bf455aed77751743180ec4a595fd3f"
    },
    IdleTUSD: {
      abi: IdleTokenGovernanceAbi,
      address: "0xc278041fdd8249fe4c1aad1193876857eea3d68c"
    },
    IdleWBTC: {
      abi: IdleTokenGovernanceAbi,
      address: "0x8C81121B15197fA0eEaEE1DC75533419DcfD3151"
    },
    IdleWETH: {
      abi: IdleTokenGovernanceAbi,
      address: "0xc8e6ca6e96a326dc448307a5fde90a0b21fd7f80"
    },

    Idle: {
      abi: IdleAbi,
      address: "0x875773784Af8135eA0ef43b5a374AaD105c5D39e"
    },
    GovernorAlpha: {
      abi: GovernorAlphaAbi,
      address: "0x2256b25CFC8E35c3135664FD03E77595042fe31B"
    },
    Timelock: {
      abi: TimelockAbi,
      address: "0xD6dABBc2b275114a2366555d6C481EF08FDC2556"
    },
    EarlyRewards: {
      abi: EarlyRewardsAbi,
      address: "0xa1F71ED24ABA6c8Da8ca8C046bBc9804625d88Fc"
    },
    PriceOracle: {
      abi: PriceOracleAbi,
      address: "0x972A64d108e250dF98dbeac8170678501f5EF181"
    },
  },
}

export default addresses;