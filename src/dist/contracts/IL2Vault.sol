pragma solidity ^0.5.0;

interface IL2Vault {
	function depositERC20(
		uint256 amount,
		address tokenAddress,
		address destinationAddress,
		uint256 remoteNetworkID,
		uint256 transferDelay
	) external;

	function paused() external view returns (bool);

	function getRemoteTokenAddress(uint256 networkID, address tokenAddress) external view returns (address);

	function getCurrentTokenLiquidity(address tokenAddress) external view returns (uint256);

	function calculateFeePercentage(address tokenAddress, uint256 amount) external view returns (uint256);
}
