---
title: EthOsTokenRedeemer
sidebar_position: 1
description: "Ethereum-specific contract for redeeming osTokens for ETH"
---

# EthOsTokenRedeemer

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/tokens/EthOsTokenRedeemer.sol)

**Inherits:** IEthOsTokenRedeemer, [ReentrancyGuard ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/ReentrancyGuard.sol), [OsTokenRedeemer →](./OsTokenRedeemer)

This contract is used to redeem OsTokens for the underlying asset.


## Functions

### swapAssetsToOsTokenShares

Swap assets to OsToken shares. Must send ETH together with the call.


```solidity
function swapAssetsToOsTokenShares(address receiver) external payable override returns (uint256 osTokenShares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address to receive the OsToken shares|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`osTokenShares`|`uint256`|The amount of OsToken shares received|


### receive

Function for receiving redeemed assets.


```solidity
receive() external payable;
```
