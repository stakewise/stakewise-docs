---
title: ValidatorsChecker
sidebar_position: 5
description: "Abstract contract for checking validators manager signature and deposit data root"
---

# ValidatorsChecker

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/validators/ValidatorsChecker.sol)

**Inherits:** [Multicall →](../base/Multicall), IValidatorsChecker

Defines the functionality for:
checking validators manager signature
checking deposit data root


## Structs
### DepositDataRootCheckParams
Struct for checking deposit data root


```solidity
struct DepositDataRootCheckParams {
    address vault;
    bytes32 validatorsRegistryRoot;
    bytes validators;
    bytes32[] proof;
    bool[] proofFlags;
    uint256[] proofIndexes;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`validatorsRegistryRoot`|`bytes32`|The validators registry root|
|`validators`|`bytes`|The concatenation of the validators' public key, deposit signature, deposit root|
|`proof`|`bytes32[]`|The proof of the deposit data root|
|`proofFlags`|`bool[]`|The flags of the proof|
|`proofIndexes`|`uint256[]`|The indexes of the proof|

## Enums
### Status


```solidity
enum Status {
    SUCCEEDED,
    INVALID_VALIDATORS_REGISTRY_ROOT,
    INVALID_VAULT,
    INSUFFICIENT_ASSETS,
    INVALID_SIGNATURE,
    INVALID_VALIDATORS_MANAGER,
    INVALID_VALIDATORS_COUNT,
    INVALID_VALIDATORS_LENGTH,
    INVALID_PROOF
}
```


## Functions
### constructor


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
function getExitQueueMissingAssets(address vault, uint256 withdrawingAssets, uint256 targetCumulativeTickets)
    external
    view
    override
    returns (uint256 missingAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`withdrawingAssets`|`uint256`|The amount of assets currently being withdrawn from validators|
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
