---
title: ExitPositions
sidebar_position: 3
description: "Includes the common functionality for managing exit positions in queues"
---

# ExitPositions

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/libraries/ExitPositions.sol)

Includes the common functionality for managing exit positions in queues


## Functions
### peek

Fetches the exit data from a mapping-based queue


```solidity
function peek(mapping(address vault => DoubleEndedQueue.Bytes32Deque) storage exits, address vault)
    internal
    view
    returns (uint160 positionTicket, uint96 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`exits`|`mapping(address vault => DoubleEndedQueue.Bytes32Deque)`|The mapping of exit queues|
|`vault`|`address`|The address of the vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint160`|The position ticket|
|`shares`|`uint96`|The shares to be exited|


### push

Stores exit data in a mapping-based queue


```solidity
function push(
    mapping(address vault => DoubleEndedQueue.Bytes32Deque) storage exits,
    address vault,
    uint160 positionTicket,
    uint96 shares,
    bool front
) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`exits`|`mapping(address vault => DoubleEndedQueue.Bytes32Deque)`|The mapping of exit queues|
|`vault`|`address`|The address of the vault|
|`positionTicket`|`uint160`|The position ticket|
|`shares`|`uint96`|The shares to be exited|
|`front`|`bool`|Whether to insert the exit data at the front of the queue|


### pop

Removes and returns exit data from a mapping-based queue


```solidity
function pop(mapping(address vault => DoubleEndedQueue.Bytes32Deque) storage exits, address vault)
    internal
    returns (uint160 positionTicket, uint96 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`exits`|`mapping(address vault => DoubleEndedQueue.Bytes32Deque)`|The mapping of exit queues|
|`vault`|`address`|The address of the vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint160`|The position ticket|
|`shares`|`uint96`|The shares to be exited|
