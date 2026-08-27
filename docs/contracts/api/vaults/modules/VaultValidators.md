---
title: VaultValidators
sidebar_position: 13
description: "Abstract contract defining validators management functionality for vaults"
---

# VaultValidators

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/modules/VaultValidators.sol)

**Inherits:** [VaultImmutables](./VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [ReentrancyGuardUpgradeable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/utils/ReentrancyGuardUpgradeable.sol), [VaultAdmin](./VaultAdmin), [VaultState](./VaultState), IVaultValidators

Defines the validators functionality for the Vault


## State Variables
### _depositDataRegistry
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address private immutable _depositDataRegistry
```


### _initialChainId
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
uint256 private immutable _initialChainId
```


### _validatorsRegistry
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address internal immutable _validatorsRegistry
```


### _validatorsWithdrawals
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address private immutable _validatorsWithdrawals
```


### _validatorsConsolidations
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address private immutable _validatorsConsolidations
```


### _consolidationsChecker
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address private immutable _consolidationsChecker
```


### __deprecated__validatorsRoot
deprecated. Deposit data management is moved to DepositDataRegistry contract


```solidity
bytes32 private __deprecated__validatorsRoot
```


### __deprecated__validatorIndex
deprecated. Deposit data management is moved to DepositDataRegistry contract


```solidity
uint256 private __deprecated__validatorIndex
```


### validatorsManager
The Vault validators manager address


```solidity
address public override validatorsManager
```


### _initialDomainSeparator

```solidity
bytes32 private _initialDomainSeparator
```


### v2Validators

```solidity
mapping(bytes32 publicKeyHash => bool isRegistered) public override v2Validators
```


### validatorsManagerNonce
The nonce for the validators manager used for signing


```solidity
uint256 public override validatorsManagerNonce
```


### __gap
This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps


```solidity
uint256[47] private __gap
```


## Functions
### constructor

Constructor

Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy’s storage.

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(
    address depositDataRegistry,
    address validatorsRegistry,
    address validatorsWithdrawals,
    address validatorsConsolidations,
    address consolidationsChecker
) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`depositDataRegistry`|`address`|The address of the deposit data registry contract|
|`validatorsRegistry`|`address`|The contract address used for registering validators in beacon chain|
|`validatorsWithdrawals`|`address`|The contract address used for withdrawing validators in beacon chain|
|`validatorsConsolidations`|`address`|The contract address used for consolidating validators in beacon chain|
|`consolidationsChecker`|`address`|The contract address used for verifying consolidation approvals|


### registerValidators

Function for registering single or multiple validators


```solidity
function registerValidators(
    IKeeperValidators.ApprovalParams calldata keeperParams,
    bytes calldata validatorsManagerSignature
) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`keeperParams`|`IKeeperValidators.ApprovalParams`|The parameters for getting approval from Keeper oracles|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|


### fundValidators

Function for funding single or multiple existing validators


```solidity
function fundValidators(bytes calldata validators, bytes calldata validatorsManagerSignature) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|


### withdrawValidators

Function for withdrawing single or multiple validators


```solidity
function withdrawValidators(bytes calldata validators, bytes calldata validatorsManagerSignature)
    external
    payable
    override
    nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|


### consolidateValidators

Function for consolidating single or multiple validators


```solidity
function consolidateValidators(
    bytes calldata validators,
    bytes calldata validatorsManagerSignature,
    bytes calldata oracleSignatures
) external payable override nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|
|`oracleSignatures`|`bytes`|The optional signatures from the oracles|


### setValidatorsManager

Function for updating the validators manager. Can only be called by the admin. Default is the DepositDataRegistry contract.


```solidity
function setValidatorsManager(address _validatorsManager) external virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_validatorsManager`|`address`|The new validators manager address|


### _registerValidators

Internal function for registering validators


```solidity
function _registerValidators(ValidatorUtils.ValidatorDeposit[] memory deposits) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`deposits`|`ValidatorUtils.ValidatorDeposit[]`|The validators registration data|


### _isValidatorsManager

Internal function for checking whether the caller is the validators manager.
If the valid signature is provided, update the nonce.


```solidity
function _isValidatorsManager(bytes calldata validators, bytes32 nonce, bytes calldata validatorsManagerSignature)
    internal
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`nonce`|`bytes32`|The nonce of the signature|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the caller is the validators manager|


### _computeVaultValidatorsDomain

Computes the hash of the EIP712 typed data

This function is used to compute the hash of the EIP712 typed data


```solidity
function _computeVaultValidatorsDomain() private view returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The hash of the EIP712 typed data|


### __VaultValidators_upgrade

Upgrades the VaultValidators contract


```solidity
function __VaultValidators_upgrade() internal onlyInitializing;
```

### __VaultValidators_init

Initializes the VaultValidators contract


```solidity
function __VaultValidators_init() internal onlyInitializing;
```

### __VaultValidators_init_common

Common initialization for gas optimization


```solidity
function __VaultValidators_init_common() private;
```
