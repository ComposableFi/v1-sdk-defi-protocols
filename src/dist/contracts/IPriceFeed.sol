// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;
pragma experimental ABIEncoderV2;

interface IPriceFeed {
  function getUnderlyingPrice(address cToken) external view returns (uint);
}
