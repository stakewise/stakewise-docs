---
title: KeeperValidators
sidebar_position: 4
description: "Validator registration approval and exit signature management system"
---

# KeeperValidators

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/keeper/KeeperValidators.sol)

**Inherits:** [KeeperOracles →](./KeeperOracles), [KeeperRewards →](./KeeperRewards), IKeeperValidators

Defines the functionality for approving validators' registrations and updating exit signatures


## Structs
### ApprovalParams
Struct for approving registration of one or more validators


```solidity
struct ApprovalParams {
    bytes32 validatorsRegistryRoot;
    uint256 deadline;
    bytes validators;
    bytes signatures;
    string exitSignaturesIpfsHash;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`validatorsRegistryRoot`|`bytes32`|The deposit data root used to verify that oracles approved validators|
|`deadline`|`uint256`|The deadline for submitting the approval|
|`validators`|`bytes`|The concatenation of the validators' public key, signature and deposit data root|
|`signatures`|`bytes`|The concatenation of Oracles' signatures|
|`exitSignaturesIpfsHash`|`string`|The IPFS hash with the validators' exit signatures|


## Events
### ValidatorsApproval
Event emitted on validators approval


```solidity
event ValidatorsApproval(address indexed vault, string exitSignaturesIpfsHash);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault|
|`exitSignaturesIpfsHash`|`string`|The IPFS hash with the validators' exit signatures|

### ExitSignaturesUpdated
Event emitted on exit signatures update


```solidity
event ExitSignaturesUpdated(
    address indexed caller, address indexed vault, uint256 nonce, string exitSignaturesIpfsHash
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`vault`|`address`|The address of the Vault|
|`nonce`|`uint256`|The nonce used for verifying Oracles' signatures|
|`exitSignaturesIpfsHash`|`string`|The IPFS hash with the validators' exit signatures|

### ValidatorsMinOraclesUpdated
Event emitted on validators min oracles number update


```solidity
event ValidatorsMinOraclesUpdated(uint256 oracles);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracles`|`uint256`|The new minimum number of oracles required to approve validators|


## Functions
### constructor

```solidity
constructor(IValidatorsRegistry validatorsRegistry) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validatorsRegistry`|`IValidatorsRegistry`|The address of the beacon chain validators registry contract|


### exitSignaturesNonces

Get nonce for the next vault exit signatures update


```solidity
function exitSignaturesNonces(address vault) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault to get the nonce for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The nonce of the Vault for updating signatures|


### validatorsMinOracles

The minimum number of oracles required to update validators


```solidity
function validatorsMinOracles() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The minimum number of oracles|


### approveValidators

Function for approving validators registration


```solidity
function approveValidators(ApprovalParams calldata params) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`ApprovalParams`|The parameters for approving validators registration|


### updateExitSignatures

Function for updating exit signatures for every hard fork


```solidity
function updateExitSignatures(
    address vault,
    uint256 deadline,
    string calldata exitSignaturesIpfsHash,
    bytes calldata oraclesSignatures
) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault to update signatures for|
|`deadline`|`uint256`|The deadline for submitting signatures update|
|`exitSignaturesIpfsHash`|`string`|The IPFS hash with the validators' exit signatures|
|`oraclesSignatures`|`bytes`|The concatenation of Oracles' signatures|


### setValidatorsMinOracles

Function for updating validators min oracles number


```solidity
function setValidatorsMinOracles(uint256 _validatorsMinOracles) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_validatorsMinOracles`|`uint256`|The new minimum number of oracles required to approve validators|
