pragma solidity ^0.5.0;

import "@composable-finance/sdk-defi-protocols/contracts/ICompoundPriceOracle.sol";

contract Demo {
    function getPrice() external view returns (uint256) {
        return ICompoundPriceOracle("0x").getUnderlyingPrice("0x");
    }
}
