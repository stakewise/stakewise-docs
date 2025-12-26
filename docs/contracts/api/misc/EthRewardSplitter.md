---
title: EthRewardSplitter
sidebar_position: 1
description: "Ethereum-specific implementation of RewardSplitter for distributing ETH rewards"
---

# EthRewardSplitter

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/misc/EthRewardSplitter.sol)

**Inherits:** [ReentrancyGuardUpgradeable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/utils/ReentrancyGuardUpgradeable.sol), [RewardSplitter →](./RewardSplitter)

The EthRewardSplitter can be used on Ethereum networks to split the rewards of the fee recipient of the Vault based on configured shares.


## Functions
### receive

Allows to claim rewards from the vault and receive them to the reward splitter address


```solidity
receive() external payable;
```
