---
title: CuratorsRegistry
sidebar_position: 2
description: "Registry for managing curator addresses for sub-vaults"
---

# CuratorsRegistry

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/curators/CuratorsRegistry.sol)

**Inherits:** Ownable2Step, ICuratorsRegistry

Defines the registry functionality that keeps track of Curators for the sub-vaults.


## Events
### CuratorAdded
Emitted when a new curator is added


```solidity
event CuratorAdded(address indexed sender, address indexed curator);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address of the sender|
|`curator`|`address`|The address of the curator|

### CuratorRemoved
Emitted when a curator is removed


```solidity
event CuratorRemoved(address indexed sender, address indexed curator);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address of the sender|
|`curator`|`address`|The address of the curator|


## Functions
### constructor

```solidity
constructor() Ownable(msg.sender);
```

### isCurator

Checks if an address is a curator


```solidity
function isCurator(address curator) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`curator`|`address`|The address of the curator|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the address is a curator, false otherwise|


### initialize

Initializes the CuratorsRegistry


```solidity
function initialize(address _owner) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|The address of the owner|


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
