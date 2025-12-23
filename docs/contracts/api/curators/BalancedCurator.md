---
title: BalancedCurator
sidebar_position: 1
description: "Curator for evenly managing assets in sub-vaults"
---

# BalancedCurator

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/curators/BalancedCurator.sol)

**Inherits:** ISubVaultsCurator

Defines the functionality for evenly managing assets in sub-vaults.


## Structs
### Deposit
Struct for storing deposit data


```solidity
struct Deposit {
    address vault;
    uint256 assets;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`assets`|`uint256`|The amount of assets to deposit|

### ExitRequest
Struct for storing exit request data


```solidity
struct ExitRequest {
    address vault;
    uint256 assets;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`assets`|`uint256`|The amount of assets to exit|


## Functions
### getDeposits

Function to get the deposits to the sub-vaults


```solidity
function getDeposits(uint256 assetsToDeposit, address[] calldata subVaults, address ejectingVault)
    external
    pure
    override
    returns (Deposit[] memory deposits);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsToDeposit`|`uint256`|The amount of assets to deposit|
|`subVaults`|`address[]`|The addresses of the sub-vaults|
|`ejectingVault`|`address`|The address of the sub-vault that is currently ejecting. Should be zero if none.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`deposits`|`Deposit[]`|An array of Deposit structs containing the vault addresses and the amounts to deposit|


### getExitRequests

Function to get the exit requests to the sub-vaults


```solidity
function getExitRequests(
    uint256 assetsToExit,
    address[] calldata subVaults,
    uint256[] memory balances,
    address ejectingVault
) external pure override returns (ExitRequest[] memory exitRequests);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsToExit`|`uint256`|The amount of assets to exit|
|`subVaults`|`address[]`|The addresses of the sub-vaults|
|`balances`|`uint256[]`|The balances of the sub-vaults|
|`ejectingVault`|`address`|The address of the sub-vault that is currently ejecting. Should be zero if none.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`exitRequests`|`ExitRequest[]`|An array of ExitRequest structs containing the vault addresses and the amounts to exit|


