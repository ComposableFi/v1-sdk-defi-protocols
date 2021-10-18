Provides ABIs, Addresses, and Solidity Interfaces to popular DeFi protocols. 

Protocols supported:

- AAVE
- Balancer
- Chainlink
- Composable
- Compound
- Curve
- dydx
- Idle
- Kyber
- MakerDAO
- mStable
- Uniswap V1
- Uniswap V2
- Uniswap V3

# Installation

To install it in your project, simply run `yarn add @composable-finance/sdk-defi-protocols` (or `npm install @composable-finance/sdk-defi-protocols`).


# Javascript/Typescript

```typescript
import { protocols } from "@composable-finance/sdk-defi-protocols";

//retrieve LendingPoolAddressProvider abi
protocols.aave.mainnet.LendingPoolAddressProvider.abi

// or LendingPoolAddressProvider mainnet address
protocols.aave.mainnet.LendingPoolAddressProvider.address
```

# Solidity

```solidity
import "@composable-finance/sdk-defi-protocols/contracts/ICompoundPriceOracle.sol";


contract DemoContract {	
    function getPrice(address contractAddress, address tokenAddress) external view returns (uint256) {		
        return ICompoundPriceOracle(contractAddress).getUnderlyingPrice(tokenAddress);
    }
}
```