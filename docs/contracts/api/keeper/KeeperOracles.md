---
title: KeeperOracles
sidebar_position: 2
description: "Oracle signature verification system for off-chain oracle whitelisting"
---

# KeeperOracles

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/keeper/KeeperOracles.sol)

**Inherits:** [Ownable2Step ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable2Step.sol), EIP712, IKeeperOracles

Defines the functionality for verifying signatures of the whitelisted off-chain oracles


## Events
### OracleAdded
Event emitted on the oracle addition


```solidity
event OracleAdded(address indexed oracle);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracle`|`address`|The address of the added oracle|

### OracleRemoved
Event emitted on the oracle removal


```solidity
event OracleRemoved(address indexed oracle);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracle`|`address`|The address of the removed oracle|

### ConfigUpdated
Event emitted on oracles config update


```solidity
event ConfigUpdated(string configIpfsHash);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`configIpfsHash`|`string`|The IPFS hash of the new config|


## Functions
### constructor

```solidity
constructor() Ownable(msg.sender) EIP712("KeeperOracles", "1");
```

### isOracle

Function for verifying whether oracle is registered or not


```solidity
function isOracle(address oracle) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracle`|`address`|The address of the oracle to check|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` for the registered oracle, `false` otherwise|


### totalOracles

Total Oracles


```solidity
function totalOracles() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total number of oracles registered|


### addOracle

Function for adding oracle to the set


```solidity
function addOracle(address oracle) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracle`|`address`|The address of the oracle to add|


### removeOracle

Function for removing oracle from the set


```solidity
function removeOracle(address oracle) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracle`|`address`|The address of the oracle to remove|


### updateConfig

Function for updating the config IPFS hash


```solidity
function updateConfig(string calldata configIpfsHash) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`configIpfsHash`|`string`|The new config IPFS hash|
