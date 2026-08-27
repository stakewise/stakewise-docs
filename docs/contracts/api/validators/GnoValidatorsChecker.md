---
title: GnoValidatorsChecker
sidebar_position: 4
description: "Contract for checking validators registration on Gnosis"
---

# GnoValidatorsChecker

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/validators/GnoValidatorsChecker.sol)

**Inherits:** [ValidatorsChecker](./ValidatorsChecker)

Defines functionality for checking validators registration on Gnosis


## State Variables
### _GENESIS_VAULT_ID

```solidity
bytes32 private constant _GENESIS_VAULT_ID = keccak256("GnoGenesisVault")
```


### _gnoToken

```solidity
IERC20 private immutable _gnoToken
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
    address genesisVaultPoolEscrow,
    address gnoToken
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
|`gnoToken`|`address`|The address of the Gnosis token contract|


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
function _vaultAssets(address vault) internal view override returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets in the vault|
