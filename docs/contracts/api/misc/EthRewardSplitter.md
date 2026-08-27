---
title: EthRewardSplitter
sidebar_position: 1
description: "Ethereum-specific implementation of RewardSplitter for distributing ETH rewards"
---

# EthRewardSplitter

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/misc/EthRewardSplitter.sol)

**Inherits:** [ReentrancyGuardUpgradeable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/utils/ReentrancyGuardUpgradeable.sol), [RewardSplitter](./RewardSplitter)

The EthRewardSplitter can be used on Ethereum networks
to split the rewards of the fee recipient of the vault based on configured shares


## Functions
### constructor

Constructor for EthRewardSplitter


```solidity
constructor() RewardSplitter();
```

### receive

Allows to claim rewards from the vault and receive them to the reward splitter address


```solidity
receive() external payable;
```

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
function _transferRewards(address shareholder, uint256 amount) internal override nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shareholder`|`address`|The address of the shareholder|
|`amount`|`uint256`|The amount of rewards to transfer|
