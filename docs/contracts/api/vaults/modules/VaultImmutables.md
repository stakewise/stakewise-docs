---
title: VaultImmutables
sidebar_position: 7
description: "Abstract contract defining common immutable variables and check functions for vaults"
---

# VaultImmutables

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/modules/VaultImmutables.sol)

Defines the Vault common immutable variables and check functions.


## State Variables
### _keeper
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address internal immutable _keeper
```


### _vaultsRegistry
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address internal immutable _vaultsRegistry
```


## Functions
### constructor

Constructor

Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy’s storage.

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(address keeper, address vaultsRegistry) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`keeper`|`address`|The address of the Keeper contract|
|`vaultsRegistry`|`address`|The address of the VaultsRegistry contract|


### _checkHarvested

Internal method for checking whether the vault is harvested


```solidity
function _checkHarvested() internal view virtual;
```

### _checkCollateralized

Internal method for checking whether the vault is collateralized


```solidity
function _checkCollateralized() internal view;
```

### _isCollateralized

Returns whether the vault is collateralized


```solidity
function _isCollateralized() internal view virtual returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the vault is collateralized|
