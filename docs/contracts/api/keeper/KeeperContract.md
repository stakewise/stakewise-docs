---
title: Keeper
sidebar_position: 1
description: "Defines the functionality for updating Vaults' rewards and approving validators registrations"
---

# Keeper

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/keeper/Keeper.sol)

**Inherits:** [KeeperOracles](./KeeperOracles), [KeeperRewards](./KeeperRewards), [KeeperValidators](./KeeperValidators), IKeeper

Defines the functionality for updating Vaults' rewards and approving validators registrations


## State Variables
### _initialized

```solidity
bool private _initialized
```


## Functions
### constructor

Constructor


```solidity
constructor(
    address sharedMevEscrow,
    IVaultsRegistry vaultsRegistry,
    IOsTokenVaultController osTokenVaultController,
    uint256 _rewardsDelay,
    uint256 maxAvgRewardPerSecond,
    IValidatorsRegistry validatorsRegistry
)
    KeeperOracles()
    KeeperRewards(sharedMevEscrow, vaultsRegistry, osTokenVaultController, _rewardsDelay, maxAvgRewardPerSecond)
    KeeperValidators(validatorsRegistry);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sharedMevEscrow`|`address`|The address of the shared MEV escrow contract|
|`vaultsRegistry`|`IVaultsRegistry`|The address of the VaultsRegistry contract|
|`osTokenVaultController`|`IOsTokenVaultController`|The address of the OsTokenVaultController contract|
|`_rewardsDelay`|`uint256`|The delay in seconds between rewards updates|
|`maxAvgRewardPerSecond`|`uint256`|The maximum possible average reward per second|
|`validatorsRegistry`|`IValidatorsRegistry`|The address of the beacon chain validators registry contract|


### initialize

Initializes the Keeper contract. Can only be called once.


```solidity
function initialize(address _owner) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|The address of the owner|
