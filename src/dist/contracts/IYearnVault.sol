// SPDX-License-Identifier: agpl-3.0
pragma solidity >=0.8.0;
pragma experimental ABIEncoderV2;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IYearnVault is IERC20 {
  function deposit(
    uint256 amount, 
    address recipient
  ) external returns (uint256);

  function withdraw(
    uint256 maxShares,
    address recipient,
    uint256 maxLoss
  ) external returns (uint256);
}