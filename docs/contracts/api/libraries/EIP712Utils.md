---
title: EIP712Utils
sidebar_position: 1
description: "Utility library for calculating EIP712 typed data hashes"
---

# EIP712Utils

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/libraries/EIP712Utils.sol)

Includes functionality for calculating [EIP712 ↗](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-712.md) hashes.


## Functions
### computeDomainSeparator

Computes the hash of the EIP712 typed data

This function is used to compute the hash of the EIP712 typed data


```solidity
function computeDomainSeparator(string memory name, address verifyingContract) external view returns (bytes32);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`name`|`string`|The name of the domain|
|`verifyingContract`|`address`|The address of the verifying contract|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The hash of the EIP712 typed data|
