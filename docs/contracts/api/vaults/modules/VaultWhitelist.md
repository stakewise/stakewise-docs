---
title: VaultWhitelist
sidebar_position: 15
description: "Abstract contract defining whitelisting functionality for vaults"
---

# VaultWhitelist

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/modules/VaultWhitelist.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [VaultAdmin](./VaultAdmin), IVaultWhitelist

Defines the whitelisting functionality for the Vault


## State Variables
### whitelister
Whitelister address


```solidity
address public override whitelister
```


### whitelistedAccounts

```solidity
mapping(address => bool) public override whitelistedAccounts
```


### __gap
This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps


```solidity
uint256[50] private __gap
```


## Functions
### updateWhitelist

Add or remove account from the whitelist. Can only be called by the whitelister.


```solidity
function updateWhitelist(address account, bool approved) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The account to add or remove from the whitelist|
|`approved`|`bool`|Whether account should be whitelisted or not|


### setWhitelister

Used to update the whitelister. Can only be called by the Vault admin.


```solidity
function setWhitelister(address _whitelister) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_whitelister`|`address`|The address of the new whitelister|


### _checkWhitelist

Internal function for checking whether account is in the whitelist


```solidity
function _checkWhitelist(address account) internal view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to check|


### _setWhitelister

Internal function for updating the whitelister externally or from the initializer


```solidity
function _setWhitelister(address _whitelister) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_whitelister`|`address`|The address of the new whitelister|


### __VaultWhitelist_init

Initializes the VaultWhitelist contract


```solidity
function __VaultWhitelist_init(address _whitelister) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_whitelister`|`address`|The address of the whitelister|
