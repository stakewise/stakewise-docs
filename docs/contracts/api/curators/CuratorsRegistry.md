---
title: CuratorsRegistry
sidebar_position: 2
description: "Registry for managing curator addresses for sub-vaults"
---

# CuratorsRegistry

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/curators/CuratorsRegistry.sol)

**Inherits:** [Ownable2Step ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable2Step.sol), ICuratorsRegistry

Defines the registry functionality that keeps track of Curators for the sub-vaults.


## State Variables
### isCurator

```solidity
mapping(address curator => bool isCurator) public override isCurator
```


### _initialized

```solidity
bool private _initialized
```


## Functions
### constructor

Constructor


```solidity
constructor() Ownable(msg.sender);
```

### addCurator

Adds a new curator


```solidity
function addCurator(address curator) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`curator`|`address`|The address of the curator to add|


### removeCurator

Removes a curator


```solidity
function removeCurator(address curator) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`curator`|`address`|The address of the curator to remove|


### initialize

Initializes the CuratorsRegistry


```solidity
function initialize(address _owner) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|The address of the owner|
