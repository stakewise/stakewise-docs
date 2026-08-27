---
title: EthValidatorsChecker
sidebar_position: 3
description: "Contract for checking validators registration on Ethereum"
---

# EthValidatorsChecker

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/validators/EthValidatorsChecker.sol)

**Inherits:** [ValidatorsChecker](./ValidatorsChecker)

Defines functionality for checking validators registration on Ethereum


## State Variables
### _GENESIS_VAULT_ID

```solidity
bytes32 private constant _GENESIS_VAULT_ID = keccak256("EthGenesisVault")
```


## Functions
### constructor

Constructor


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


### _depositAmount

Get the amount of assets required for validator deposit


```solidity
function _depositAmount() internal pure override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of assets required for deposit|


### _vaultAssets

Get the amount of assets in the vault


```solidity
function _vaultAssets(address vault) internal view override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of assets in the vault|
