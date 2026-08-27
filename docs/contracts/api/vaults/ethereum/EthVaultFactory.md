---
title: EthVaultFactory
sidebar_position: 13
description: "Factory for deploying Ethereum staking vaults"
---

# EthVaultFactory

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/ethereum/EthVaultFactory.sol)

**Inherits:** IEthVaultFactory

Factory for deploying Ethereum staking Vaults


## State Variables
### _vaultsRegistry

```solidity
IVaultsRegistry internal immutable _vaultsRegistry
```


### implementation
The address of the Vault implementation contract used for proxy creation


```solidity
address public immutable override implementation
```


### ownMevEscrow
The address of the own MEV escrow contract used for Vault creation


```solidity
address public override ownMevEscrow
```


### vaultAdmin
The address of the Vault admin used for Vault creation


```solidity
address public override vaultAdmin
```


## Functions
### constructor

Constructor


```solidity
constructor(address _implementation, IVaultsRegistry vaultsRegistry) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_implementation`|`address`|The implementation address of Vault|
|`vaultsRegistry`|`IVaultsRegistry`|The address of the VaultsRegistry contract|


### createVault

Create Vault. Must transfer security deposit together with a call.


```solidity
function createVault(bytes calldata params, bool isOwnMevEscrow) external payable override returns (address vault);
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
