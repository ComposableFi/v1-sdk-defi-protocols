import AggregatorV3 from "./abi/AggregatorV3.json";
import FeedRegistryAbi from "./abi/FeedRegistry.json";

const addresses = {
  mainnet: {
    FeedRegistry: {
      abi: FeedRegistryAbi,
      address: "0x47Fb2585D2C56Fe188D0E6ec628a38b74fCeeeDf"
    },
    AggregatorV3: {
      abi: AggregatorV3,
    }
  },
}

export default addresses;