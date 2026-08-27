---
title: EthMetaVaultFactory
sidebar_position: 7
description: "Factory for deploying Ethereum meta Vaults"
---

# EthMetaVaultFactory

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/ethereum/EthMetaVaultFactory.sol)

**Inherits:** IEthMetaVaultFactory

Factory for deploying Ethereum meta Vaults


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
function createVault(bytes calldata params) external payable override returns (address vault);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the Vault contract|
