import MassetAbi from "./abi/Masset.json";
import MetaTokenAbi from "./abi/MetaToken.json";
import MassetValidationHelperAbi from "./abi/MassetValidationHelper.json";
import ForgeValidatorAbi from "./abi/ForgeValidator.json";
import BasketManagerAbi from "./abi/BasketManager.json";
import AaveIntegrationAbi from "./abi/AaveIntegration.json";
import CompoundIntegrationAbi from "./abi/CompoundIntegration.json";
import NexusAbi from "./abi/Nexus.json";
import DelayedProxyAdminAbi from "./abi/DelayedProxyAdmin.json";
import SavingsManagerAbi from "./abi/SavingsManager.json";
import SavingsContractAbi from "./abi/SavingsContract.json";
import RewardsDistributorAbi from "./abi/RewardsDistributor.json";
import StakingRewardsWithPlatformTokenAbi from "./abi/StakingRewardsWithPlatformToken.json";

const addresses = {
  mainnet: {
    mUSD: {
      symbol: "mUSD",
      decimals: 18,
      abi: MassetAbi,
      address: "0xe2f2a5C287993345a840Db3B0845fbC70f5935a5",
    },
    MTA: {
      abi: MetaTokenAbi,
      address: "0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2",
    },
    MassetValidationHelper: {
      abi: MassetValidationHelperAbi,
      address: "0xabcc93c3be238884cc3309c19afd128fafc16911",
    },
    ForgeValidator: {
      abi: ForgeValidatorAbi,
      address: "0xbB90D06371030fFa150E463621c22950b212eaa1",
    },
    BasketManager: {
      abi: BasketManagerAbi,
      address: "0x66126B4aA2a1C07536Ef8E5e8bD4EfDA1FdEA96D",
    },
    AaveIntegration: {
      abi: AaveIntegrationAbi,
      address: "0xf617346a0fb6320e9e578e0c9b2a4588283d9d39",
    },
    CompoundIntegration: {
      abi: CompoundIntegrationAbi,
      address: "0xd55684f4369040c12262949ff78299f2bc9db735",
    },
    Nexus: {
      abi: NexusAbi,
      address: "0xAFcE80b19A8cE13DEc0739a1aaB7A028d6845Eb3",
    },
    DelayedProxyAdmin: {
      abi: DelayedProxyAdminAbi,
      address: "0x5C8eb57b44C1c6391fC7a8A0cf44d26896f92386",
    },
    SavingsManager: {
      abi: SavingsManagerAbi,
      address: "0x7046b0bfc4c5eeb90559c0805dd9c1a6f4815370",
    },
    SavingsContract: {
      abi: SavingsContractAbi,
      address: "0xcf3f73290803fc04425bee135a4caeb2bab2c2a1",
    },
    RewardsDistributor: {
      abi: RewardsDistributorAbi,
      address: "0x04dfdfa471b79cc9e6e8c355e6c71f8ec4916c50",
    },
    StakingRewardsWithPlatformToken: {
      abi: StakingRewardsWithPlatformTokenAbi,
    },
  }
};

export default addresses;
