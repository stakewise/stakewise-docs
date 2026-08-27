---
title: GnoMetaVaultFactory
sidebar_position: 6
description: "Factory for deploying Gnosis meta Vaults"
---

# GnoMetaVaultFactory

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/gnosis/GnoMetaVaultFactory.sol)

**Inherits:** IGnoMetaVaultFactory

Factory for deploying Gnosis meta Vaults


## State Variables
### _securityDeposit

```solidity
uint256 private constant _securityDeposit = 1e9
```


### _vaultsRegistry

```solidity
IVaultsRegistry internal immutable _vaultsRegistry
```


### _gnoToken

```solidity
IERC20 internal immutable _gnoToken
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
constructor(address _implementation, IVaultsRegistry vaultsRegistry, address gnoToken) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_implementation`|`address`|The implementation address of Vault|
|`vaultsRegistry`|`IVaultsRegistry`|The address of the VaultsRegistry contract|
|`gnoToken`|`address`|The address of the GNO token contract|


### createVault

Create Vault. Must transfer security deposit together with a call.


```solidity
function createVault(bytes calldata params) external override returns (address vault);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the Vault contract|
