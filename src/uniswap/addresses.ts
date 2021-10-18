import ExchangeAbi from "./abi/Exchange.json";
import FactoryAbi from "./abi/Factory.json";

const addresses = {
  mainnet: {
    factory: {
      address: "0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95",
      abi: FactoryAbi,
    },
    exchange: {
      abi: ExchangeAbi,
    }
  }
};

export default addresses;
