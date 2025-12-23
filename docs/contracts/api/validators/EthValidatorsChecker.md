---
title: EthValidatorsChecker
sidebar_position: 3
description: "Contract for checking validators registration on Ethereum"
---

# EthValidatorsChecker

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/validators/EthValidatorsChecker.sol)

**Inherits:** [ValidatorsChecker →](./ValidatorsChecker)

Defines functionality for checking validators registration on Ethereum


## Functions
### constructor


```solidity
constructor(
    address validatorsRegistry,
    address keeper,
    address vaultsRegistry,
    address depositDataRegistry,
    address genesisVaultPoolEscrow
) ValidatorsChecker(validatorsRegistry, keeper, vaultsRegistry, depositDataRegistry, genesisVaultPoolEscrow);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validatorsRegistry`|`address`|The address of the beacon chain validators registry contract|
|`keeper`|`address`|The address of the Keeper contract|
|`vaultsRegistry`|`address`|The address of the VaultsRegistry contract|
|`depositDataRegistry`|`address`|The address of the DepositDataRegistry contract|
|`genesisVaultPoolEscrow`|`address`|The address of the genesis vault pool escrow contract|
