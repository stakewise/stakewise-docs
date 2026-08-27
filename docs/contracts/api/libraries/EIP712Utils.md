---
title: EIP712Utils
sidebar_position: 1
description: "Utility library for calculating EIP712 typed data hashes"
---

# EIP712Utils

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/libraries/EIP712Utils.sol)

Includes functionality for calculating EIP712 hashes


## State Variables
### _domainTypeHash

```solidity
bytes32 private constant _domainTypeHash =
    keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)")
```


### _versionHash

```solidity
bytes32 private constant _versionHash = keccak256("1")
```


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
