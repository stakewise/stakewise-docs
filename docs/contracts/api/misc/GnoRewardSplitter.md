---
title: GnoRewardSplitter
sidebar_position: 2
description: "Gnosis-specific implementation of RewardSplitter for distributing GNO token rewards"
---

# GnoRewardSplitter

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/misc/GnoRewardSplitter.sol)

**Inherits:** [RewardSplitter →](./RewardSplitter)

The GnoRewardSplitter can be used on Gnosis networks
to split the rewards of the fee recipient of the vault based on configures shares


## Functions
### constructor

Constructor for GnoRewardSplitter


```solidity
constructor(address gnoToken) RewardSplitter();
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gnoToken`|`address`|The address of the GNO token|


### initialize

Initializes the RewardSplitter contract


```solidity
function initialize(address _vault) external override initializer;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_vault`|`address`|The address of the vault to which the RewardSplitter will be connected|
