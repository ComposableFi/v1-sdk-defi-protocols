// SPDX-License-Identifier: agpl-3.0
pragma solidity >=0.8.0;
pragma experimental ABIEncoderV2;

interface IYearnRegistry {
  function latestVault(address token) external view returns (address);
}
