---
title: BalancedCurator
sidebar_position: 1
description: "Curator for evenly managing assets in sub-vaults"
---

# BalancedCurator

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/curators/BalancedCurator.sol)

**Inherits:** ISubVaultsCurator

Defines the functionality for evenly managing assets in sub-vaults.


## Functions
### getDeposits

Function to get the deposits to the sub-vaults


```solidity
function getDeposits(uint256 assetsToDeposit, address[] calldata subVaults, address ejectingVault)
    external
    view
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
