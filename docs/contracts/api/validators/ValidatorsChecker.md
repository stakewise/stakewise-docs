---
title: ValidatorsChecker
sidebar_position: 5
description: "Abstract contract for checking validators manager signature and deposit data root"
---

# ValidatorsChecker

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/validators/ValidatorsChecker.sol)

**Inherits:** [Multicall](../base/Multicall), IValidatorsChecker

Defines the functionality for:
checking validators manager signature
checking deposit data root


## State Variables
### _validatorsRegistry

```solidity
IValidatorsRegistry internal immutable _validatorsRegistry
```


### _keeper

```solidity
IKeeper private immutable _keeper
```


### _vaultsRegistry

```solidity
IVaultsRegistry private immutable _vaultsRegistry
```


### _depositDataRegistry

```solidity
IDepositDataRegistry private immutable _depositDataRegistry
```


### _genesisVaultPoolEscrow

```solidity
address internal immutable _genesisVaultPoolEscrow
```


## Functions
### constructor

Constructor


```solidity
constructor(
    address validatorsRegistry,
    address keeper,
    address vaultsRegistry,
    address depositDataRegistry,
    address genesisVaultPoolEscrow
) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validatorsRegistry`|`address`|The address of the beacon chain validators registry contract|
|`keeper`|`address`|The address of the Keeper contract|
|`vaultsRegistry`|`address`|The address of the VaultsRegistry contract|
|`depositDataRegistry`|`address`|The address of the DepositDataRegistry contract|
|`genesisVaultPoolEscrow`|`address`|The address of the genesis vault pool escrow contract|


### updateVaultState

Function for updating vault state


```solidity
function updateVaultState(address vault, IKeeperRewards.HarvestParams calldata harvestParams) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`harvestParams`|`IKeeperRewards.HarvestParams`|The parameters for harvesting|


### getExitQueueCumulativeTickets

Function for getting the exit queue cumulative tickets


```solidity
function getExitQueueCumulativeTickets(address vault) external view override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The exit queue cumulative tickets|


### getExitQueueMissingAssets

Function for getting the exit queue missing assets


```solidity
function getExitQueueMissingAssets(
    address vault,
    uint256 withdrawingAssets,
    uint256 redemptionAssets,
    uint256 targetCumulativeTickets
) external view override returns (uint256 missingAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`withdrawingAssets`|`uint256`|The amount of assets currently being withdrawn from validators|
|`redemptionAssets`|`uint256`|The amount of assets to be redeemed|
|`targetCumulativeTickets`|`uint256`|The target cumulative tickets|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`missingAssets`|`uint256`|The exit queue missing assets|


### checkValidatorsManagerSignature

Function for checking validators manager signature


```solidity
function checkValidatorsManagerSignature(
    address vault,
    bytes32 validatorsRegistryRoot,
    bytes calldata validators,
    bytes calldata signature
) external view override returns (uint256 blockNumber, Status status);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`validatorsRegistryRoot`|`bytes32`|The validators registry root|
|`validators`|`bytes`|The concatenation of the validators' public key, deposit signature, deposit root|
|`signature`|`bytes`|The validators manager signature|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`blockNumber`|`uint256`|Current block number|
|`status`|`Status`|The status of the verification|


### checkDepositDataRoot

Function for checking deposit data root


```solidity
function checkDepositDataRoot(DepositDataRootCheckParams calldata params)
    external
    view
    override
    returns (uint256 blockNumber, Status status);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`DepositDataRootCheckParams`|The parameters for checking deposit data root|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`blockNumber`|`uint256`|Current block number|
|`status`|`Status`|The status of the verification|


### _computeVaultValidatorsDomain

Computes the hash of the EIP712 typed data for the vault

This function is used to compute the hash of the EIP712 typed data


```solidity
function _computeVaultValidatorsDomain(address vault) private view returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The hash of the EIP712 typed data|


### _depositAmount

Get the amount of assets required for validator deposit


```solidity
function _depositAmount() internal pure virtual returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of assets required for deposit|


### _vaultAssets

Get the amount of assets in the vault


```solidity
function _vaultAssets(address vault) internal view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of assets in the vault|
