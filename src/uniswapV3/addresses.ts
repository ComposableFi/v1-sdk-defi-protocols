import SwapRouterAbi from "./abi/IUniswapV3SwapRouter.json";
import QuoterAbi from "./abi/IUniswapV3Quoter.json";

const addresses = {
  quoter: {
    abi: QuoterAbi,
    address: "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6",
  },
  swapRouter: {
    abi: SwapRouterAbi,
    address: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
  },
};

export default addresses;
