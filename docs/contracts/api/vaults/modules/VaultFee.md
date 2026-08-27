---
title: VaultFee
sidebar_position: 5
description: "Abstract contract defining fee functionality for vaults"
---

# VaultFee

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/modules/VaultFee.sol)

**Inherits:** [VaultImmutables](./VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [VaultAdmin](./VaultAdmin), IVaultFee

Defines the fee functionality for the Vault


## State Variables
### _maxFeePercent

```solidity
uint256 internal constant _maxFeePercent = 10_000
```


### _feeUpdateDelay

```solidity
uint256 private constant _feeUpdateDelay = 3 days
```


### _feeUpdateMultiplier

```solidity
uint256 private constant _feeUpdateMultiplier = 120
```


### _feeUpdateBase

```solidity
uint256 private constant _feeUpdateBase = 100
```


### feeRecipient
The Vault's fee recipient


```solidity
address public override feeRecipient
```


### feePercent
The Vault's fee percent in BPS


```solidity
uint16 public override feePercent
```


### _lastUpdateTimestamp

```solidity
uint64 private _lastUpdateTimestamp
```


### __gap
This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps


```solidity
uint256[50] private __gap
```


## Functions
### setFeeRecipient

Function for updating the fee recipient address. Can only be called by the admin.


```solidity
function setFeeRecipient(address _feeRecipient) external virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_feeRecipient`|`address`|The address of the new fee recipient|


### setFeePercent

Function for updating the fee percent. Can only be called by the admin.


```solidity
function setFeePercent(uint16 _feePercent) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_feePercent`|`uint16`|The new fee percent|


### _setFeeRecipient

Internal function for updating the fee recipient externally or from the initializer


```solidity
function _setFeeRecipient(address _feeRecipient) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_feeRecipient`|`address`|The address of the new fee recipient|


### _setFeePercent

Internal function for updating the fee percent


```solidity
function _setFeePercent(uint16 _feePercent, bool isVaultCreation) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_feePercent`|`uint16`|The new fee percent|
|`isVaultCreation`|`bool`|Flag indicating whether the fee percent is set during the vault creation|


### __VaultFee_init

Initializes the VaultFee contract


```solidity
function __VaultFee_init(address _feeRecipient, uint16 _feePercent) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_feeRecipient`|`address`|The address of the fee recipient|
|`_feePercent`|`uint16`|The fee percent that is charged by the Vault|
