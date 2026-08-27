---
title: ValidatorUtils
sidebar_position: 6
description: "Utility library for managing validator operations and deposits"
---

# ValidatorUtils

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/libraries/ValidatorUtils.sol)

Includes functionality for managing the validators


## State Variables
### _validatorsManagerTypeHash

```solidity
bytes32 private constant _validatorsManagerTypeHash =
    keccak256("VaultValidators(bytes32 validatorsRegistryRoot,bytes validators)")
```


### _validatorV1DepositLength

```solidity
uint256 private constant _validatorV1DepositLength = 176
```


### _validatorV2DepositLength

```solidity
uint256 private constant _validatorV2DepositLength = 184
```


### _validatorWithdrawalLength

```solidity
uint256 private constant _validatorWithdrawalLength = 56
```


### _validatorConsolidationLength

```solidity
uint256 private constant _validatorConsolidationLength = 96
```


### _validatorMinEffectiveBalance

```solidity
uint256 private constant _validatorMinEffectiveBalance = 32 ether
```


### _validatorMaxEffectiveBalance

```solidity
uint256 private constant _validatorMaxEffectiveBalance = 2048 ether
```


## Functions
### isValidManagerSignature

Function to check if the validator signature is valid


```solidity
function isValidManagerSignature(
    bytes32 nonce,
    bytes32 domainSeparator,
    address validatorsManager,
    bytes calldata validators,
    bytes calldata signature
) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`nonce`|`bytes32`|The nonce of the validator|
|`domainSeparator`|`bytes32`|The domain separator of the validator|
|`validatorsManager`|`address`|The address of the validators manager|
|`validators`|`bytes`|The validators data|
|`signature`|`bytes`|The signature of the validator|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|Whether the signature is valid|


### getValidatorDeposit

Function to get the validator registration data


```solidity
function getValidatorDeposit(bytes calldata validator, bool isV1Validator)
    internal
    view
    returns (ValidatorDeposit memory validatorDeposit);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validator`|`bytes`|The validator data|
|`isV1Validator`|`bool`|Whether the validator is a V1 validator|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`validatorDeposit`|`ValidatorDeposit`|The validator registration data|


### getIsV1Validators

Function to get the type of validators


```solidity
function getIsV1Validators(uint256 validatorsLength) internal pure returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validatorsLength`|`uint256`|The length of the validators data|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|isV1Validators Whether the validators are V1 validators|


### getValidatorDeposits

Function to get the validator registrations


```solidity
function getValidatorDeposits(
    mapping(bytes32 publicKeyHash => bool isRegistered) storage v2Validators,
    bytes calldata validators,
    bool isTopUp
) external returns (ValidatorDeposit[] memory validatorDeposits);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`v2Validators`|`mapping(bytes32 publicKeyHash => bool isRegistered)`|The mapping of public key hashes to registration status|
|`validators`|`bytes`|The validators data|
|`isTopUp`|`bool`|Whether the registration is a top-up|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`validatorDeposits`|`ValidatorDeposit[]`|The array of validator registrations|


### withdrawValidators

Function to withdraw the validators


```solidity
function withdrawValidators(bytes calldata validators, address validatorsWithdrawals) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The validators data|
|`validatorsWithdrawals`|`address`|The address of the validators withdrawals contract|


### consolidateValidator

Internal function for consolidating validators


```solidity
function consolidateValidator(bytes calldata validator, address validatorsConsolidations)
    internal
    returns (bytes calldata fromPublicKey, bytes calldata toPublicKey, uint256 feePaid);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validator`|`bytes`|The validator data|
|`validatorsConsolidations`|`address`|The address of the validators consolidations contract|


### consolidateValidators

Function to consolidate the validators


```solidity
function consolidateValidators(
    mapping(bytes32 publicKeyHash => bool isRegistered) storage v2Validators,
    bytes calldata validators,
    bool consolidationsApproved,
    address validatorsConsolidations
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`v2Validators`|`mapping(bytes32 publicKeyHash => bool isRegistered)`|The mapping of public key hashes to registration status|
|`validators`|`bytes`|The validators data|
|`consolidationsApproved`|`bool`|Whether the consolidations are approved|
|`validatorsConsolidations`|`address`|The address of the validators consolidations contract|


## Structs
### ValidatorDeposit

```solidity
struct ValidatorDeposit {
    bytes publicKey;
    bytes signature;
    bytes withdrawalCredentials;
    bytes32 depositDataRoot;
    uint256 depositAmount;
}
```
