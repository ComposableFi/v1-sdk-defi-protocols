pragma solidity ^0.5.0;

interface I_P1Funder {
	/**
	 * @notice Calculates the signed funding amount that has accumulated over a period of time.
	 *
	 * @param  timeDelta  Number of seconds over which to calculate the accumulated funding amount.
	 * @return            True if the funding rate is positive, and false otherwise.
	 * @return            The funding amount as a unitless rate, represented as a fixed-point number
	 *                    with 18 decimals.
	 */
	function getFunding(uint256 timeDelta) external view returns (bool, uint256);
}
