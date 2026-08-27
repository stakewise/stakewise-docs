---
title: Multicall
sidebar_position: 2
description: "Utility contract for batching multiple function calls into a single transaction"
---

# Multicall

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/base/Multicall.sol)

**Inherits:** IMulticall

Enables calling multiple methods in a single call to the contract


## Functions
### multicall

Call multiple functions in the current contract and return the data from all of them if they all succeed


```solidity
function multicall(bytes[] calldata data) external override returns (bytes[] memory results);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`data`|`bytes[]`|The encoded function data for each of the calls to make to this contract|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`results`|`bytes[]`|The results from each of the calls passed in via data|
