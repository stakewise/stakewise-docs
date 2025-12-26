---
title: GnoVaultFactory
sidebar_position: 8
description: "Factory for deploying Gnosis staking Vaults"
---

# GnoVaultFactory

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/gnosis/GnoVaultFactory.sol)

**Inherits:** IGnoVaultFactory

Factory for deploying Gnosis staking Vaults.


## Events
### VaultCreated
Event emitted on a Vault creation


```solidity
event VaultCreated(address indexed admin, address indexed vault, address ownMevEscrow, bytes params);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`admin`|`address`|The address of the Vault admin|
|`vault`|`address`|The address of the created Vault|
|`ownMevEscrow`|`address`|The address of the own MEV escrow contract. Zero address if shared MEV escrow is used.|
|`params`|`bytes`|The encoded parameters for initializing the Vault contract|


## Functions

### implementation

The address of the Vault implementation contract used for proxy creation


```solidity
function implementation() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the Vault implementation contract|


### ownMevEscrow

The address of the own MEV escrow contract used for Vault creation


```solidity
function ownMevEscrow() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the MEV escrow contract|


### vaultAdmin

The address of the Vault admin used for Vault creation


```solidity
function vaultAdmin() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the Vault admin|


### createVault

Create Vault. Must transfer security deposit together with a call.


```solidity
function createVault(bytes calldata params, bool isOwnMevEscrow) external override returns (address vault);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the Vault contract|
|`isOwnMevEscrow`|`bool`|Whether to deploy own escrow contract or connect to a smoothing pool for priority fees and MEV rewards|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the created Vault|
