---
title: VaultFee
sidebar_position: 5
description: "Abstract contract defining fee functionality for vaults"
---

# VaultFee

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/modules/VaultFee.sol)

**Inherits:** [VaultImmutables →](./VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [VaultAdmin →](./VaultAdmin), IVaultFee

Defines the fee functionality for the Vault


## Events
### FeeRecipientUpdated
Event emitted on fee recipient update


```solidity
event FeeRecipientUpdated(address indexed caller, address indexed feeRecipient);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`feeRecipient`|`address`|The address of the new fee recipient|

### FeePercentUpdated
Event emitted on fee percent update


```solidity
event FeePercentUpdated(address indexed caller, uint16 feePercent);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`feePercent`|`uint16`|The new fee percent|


## Functions
### feeRecipient

The Vault's fee recipient


```solidity
function feeRecipient() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the Vault's fee recipient|


### feePercent

The Vault's fee percent in BPS


```solidity
function feePercent() external view returns (uint16);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint16`|The fee percent applied by the Vault on the rewards|


### setFeeRecipient

Function for updating the fee recipient address. Can only be called by the admin.


```solidity
function setFeeRecipient(address _feeRecipient) external override;
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

