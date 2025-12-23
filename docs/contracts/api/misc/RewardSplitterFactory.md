---
title: RewardSplitterFactory
sidebar_position: 4
description: "Factory contract for deploying RewardSplitter proxies"
---

# RewardSplitterFactory

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/misc/RewardSplitterFactory.sol)

**Inherits:** IRewardSplitterFactory

Factory for deploying the RewardSplitter contract


## Events
### RewardSplitterCreated
Event emitted on a RewardSplitter creation


```solidity
event RewardSplitterCreated(address owner, address vault, address rewardSplitter);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the RewardSplitter owner|
|`vault`|`address`|The address of the connected vault|
|`rewardSplitter`|`address`|The address of the created RewardSplitter|


## Functions
### constructor

Constructor


```solidity
constructor(address _implementation) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_implementation`|`address`|The implementation address of RewardSplitter|


### implementation

The address of the RewardSplitter implementation contract used for proxy creation


```solidity
function implementation() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the RewardSplitter proxy contract|


### createRewardSplitter

Creates RewardSplitter contract proxy


```solidity
function createRewardSplitter(address vault) external override returns (address rewardSplitter);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault to which the RewardSplitter will be connected|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`rewardSplitter`|`address`|The address of the created RewardSplitter contract|
