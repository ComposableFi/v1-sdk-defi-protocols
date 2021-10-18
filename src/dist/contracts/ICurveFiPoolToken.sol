pragma solidity ^0.5.0;

contract ICurveFiPoolToken {
	function set_minter(address _minter) external;

	function totalSupply() external view returns (uint256 out);

	function allowance(address _owner, address _spender) external view returns (uint256 out);

	function transfer(address _to, uint256 _value) external returns (bool out);

	function transferFrom(
		address _from,
		address _to,
		uint256 _value
	) external returns (bool out);

	function approve(address _spender, uint256 _value) external returns (bool out);

	function mint(address _to, uint256 _value) external;

	function burn(uint256 _value) external;

	function burnFrom(address _to, uint256 _value) external;

	function name() external view returns (string memory out);

	function symbol() external view returns (string memory out);

	function decimals() external view returns (uint256 out);

	function balanceOf(address arg0) external view returns (uint256 out);
}
