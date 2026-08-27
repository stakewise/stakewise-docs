---
title: GnoRewardSplitter
sidebar_position: 2
description: "Gnosis-specific implementation of RewardSplitter for distributing GNO token rewards"
---

# GnoRewardSplitter

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/misc/GnoRewardSplitter.sol)

**Inherits:** [RewardSplitter](./RewardSplitter)

The GnoRewardSplitter can be used on Gnosis networks
to split the rewards of the fee recipient of the vault based on configures shares


## State Variables
### _gnoToken

```solidity
IERC20 private immutable _gnoToken
```


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


### _transferRewards

Transfers the specified amount of rewards to the shareholder


```solidity
function _transferRewards(address shareholder, uint256 amount) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shareholder`|`address`|The address of the shareholder|
|`amount`|`uint256`|The amount of rewards to transfer|
