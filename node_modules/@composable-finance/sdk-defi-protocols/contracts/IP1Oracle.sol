pragma solidity ^0.5.0;

interface I_P1Oracle {
	/**
	 * @notice Returns the price of the underlying asset relative to the margin token.
	 *
	 * @return The price as a fixed-point number with 18 decimals.
	 */
	function getPrice() external view returns (uint256);
}
