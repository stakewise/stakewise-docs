---
title: VaultState
sidebar_position: 10
description: "Abstract contract defining state manipulation functionality for vaults"
---

# VaultState

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/modules/VaultState.sol)

**Inherits:** [VaultImmutables](./VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [VaultFee](./VaultFee), IVaultState

Defines Vault's state manipulation


## State Variables
### _totalShares

```solidity
uint128 internal _totalShares
```


### _totalAssets

```solidity
uint128 internal _totalAssets
```


### _queuedShares

```solidity
uint128 internal _queuedShares
```


### _unclaimedAssets

```solidity
uint128 internal _unclaimedAssets
```


### _exitQueue

```solidity
ExitQueue.History internal _exitQueue
```


### _exitRequests

```solidity
mapping(bytes32 => uint256) internal _exitRequests
```


### _balances

```solidity
mapping(address => uint256) internal _balances
```


### _capacity

```solidity
uint256 private _capacity
```


### _totalExitingAssets

```solidity
uint128 internal _totalExitingAssets
```


### _totalExitingTickets

```solidity
uint128 internal _totalExitingTickets
```


### _totalExitedTickets

```solidity
uint256 internal _totalExitedTickets
```


### _donatedAssets

```solidity
uint256 internal _donatedAssets
```


### __gap
This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps


```solidity
uint256[47] private __gap
```


## Functions
### totalShares

Function for retrieving total shares


```solidity
function totalShares() external view override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of shares in existence|


### totalAssets

Total assets in the Vault


```solidity
function totalAssets() external view override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of the underlying asset that is "managed" by Vault|


### getExitQueueData

Get exit queue data


```solidity
function getExitQueueData()
    external
    view
    override
    returns (
        uint128 queuedShares,
        uint128 unclaimedAssets,
        uint128 totalExitingTickets,
        uint128 totalExitingAssets,
        uint256 totalTickets
    );
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`queuedShares`|`uint128`|The number of shares in the exit queue|
|`unclaimedAssets`|`uint128`|The amount of unclaimed assets in the exit queue|
|`totalExitingTickets`|`uint128`|The total number of exiting tickets|
|`totalExitingAssets`|`uint128`|The total amount of exiting assets|
|`totalTickets`|`uint256`|The total number of tickets in the exit queue|


### getShares

Returns the number of shares held by an account


```solidity
function getShares(address account) external view override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The account for which to look up the number of shares it has, i.e. its balance|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The number of shares held by the account|


### convertToShares

Converts assets to shares


```solidity
function convertToShares(uint256 assets) public view override returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to convert to shares|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares that the Vault would exchange for the amount of assets provided|


### convertToAssets

Converts shares to assets


```solidity
function convertToAssets(uint256 shares) public view override returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to convert to assets|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets that the Vault would exchange for the amount of shares provided|


### donateShares

Donates shares to the Vault by burning them from the caller,
increasing the value per share for remaining holders


```solidity
function donateShares(uint256 shares) public virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares to donate|


### capacity

The Vault's capacity


```solidity
function capacity() public view override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount after which the Vault stops accepting deposits|


### withdrawableAssets

Total assets available in the Vault. They can be staked or withdrawn.


```solidity
function withdrawableAssets() public view override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of withdrawable assets|


### isStateUpdateRequired

Check whether state update is required


```solidity
function isStateUpdateRequired() external view virtual override returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if state update is required, `false` otherwise|


### updateState

Updates the total amount of assets in the Vault and its exit queue


```solidity
function updateState(IKeeperRewards.HarvestParams calldata harvestParams) public virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`harvestParams`|`IKeeperRewards.HarvestParams`|The parameters for harvesting Keeper rewards|


### _processTotalAssetsDelta

Internal function for processing rewards and penalties


```solidity
function _processTotalAssetsDelta(int256 totalAssetsDelta) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`totalAssetsDelta`|`int256`|The number of assets earned or lost|


### _updateExitQueue

Internal function that must be used to process exit queue

Make sure that sufficient time passed between exit queue updates (at least 12 hours).
Currently it's restricted by the keeper's harvest interval


```solidity
function _updateExitQueue() internal virtual returns (uint256 burnedShares);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`burnedShares`|`uint256`|The total amount of burned shares|


### _mintShares

Internal function for minting shares


```solidity
function _mintShares(address owner, uint256 shares) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner to mint shares to|
|`shares`|`uint256`|The number of shares to mint|


### _burnShares

Internal function for burning shares


```solidity
function _burnShares(address owner, uint256 shares) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner to burn shares for|
|`shares`|`uint256`|The number of shares to burn|


### _convertToShares

Internal conversion function (from assets to shares) with support for rounding direction.


```solidity
function _convertToShares(uint256 assets, Math.Rounding rounding) internal view returns (uint256 shares);
```

### _harvestAssets

Internal function for harvesting Vaults' new assets


```solidity
function _harvestAssets(IKeeperRewards.HarvestParams calldata harvestParams)
    internal
    virtual
    returns (int256 totalAssetsDelta, bool harvested);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`totalAssetsDelta`|`int256`|The total assets delta after harvest|
|`harvested`|`bool`|`true` when the rewards were harvested, `false` otherwise|


### _vaultAssets

Internal function for retrieving the total assets stored in the Vault.
NB! Assets can be forcibly sent to the vault, the returned value must be used with caution


```solidity
function _vaultAssets() internal view virtual returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of assets stored in the Vault|


### __VaultState_init

Initializes the VaultState contract


```solidity
function __VaultState_init(uint256 capacity_) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`capacity_`|`uint256`|The amount after which the Vault stops accepting deposits|


### __VaultState_upgrade

Upgrades the VaultState contract


```solidity
function __VaultState_upgrade() internal onlyInitializing;
```
