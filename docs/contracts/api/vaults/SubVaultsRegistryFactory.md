---
title: SubVaultsRegistryFactory
sidebar_position: 2
description: "Factory for deploying SubVaultsRegistry contracts"
---

# SubVaultsRegistryFactory

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/SubVaultsRegistryFactory.sol)

**Inherits:** ISubVaultsRegistryFactory

Factory for deploying SubVaultsRegistry contracts


## State Variables
### _vaultsRegistry

```solidity
IVaultsRegistry internal immutable _vaultsRegistry
```


### implementation
The address of the SubVaultsRegistry implementation contract used for proxy creation


```solidity
address public immutable override implementation
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
|`_implementation`|`address`|The implementation address of SubVaultsRegistry|
|`vaultsRegistry`|`IVaultsRegistry`|The address of the VaultsRegistry contract|


### createSubVaultsRegistry

Creates a new SubVaultsRegistry contract


```solidity
function createSubVaultsRegistry() external override returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the created SubVaultsRegistry contract|
