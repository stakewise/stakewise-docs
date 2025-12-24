---
title: VaultState
sidebar_position: 10
description: "Abstract contract defining state manipulation functionality for vaults"
---

# VaultState

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/modules/VaultState.sol)

**Inherits:** [VaultImmutables →](./VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [VaultFee →](./VaultFee), IVaultState

Defines Vault's state manipulation.


## Events
### CheckpointCreated
Event emitted on checkpoint creation


```solidity
event CheckpointCreated(uint256 shares, uint256 assets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of burned shares|
|`assets`|`uint256`|The amount of exited assets|

### FeeSharesMinted
Event emitted on minting fee recipient shares


```solidity
event FeeSharesMinted(address receiver, uint256 shares, uint256 assets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address of the fee recipient|
|`shares`|`uint256`|The number of minted shares|
|`assets`|`uint256`|The amount of minted assets|

### ExitingAssetsPenalized
Event emitted when exiting assets are penalized (deprecated)


```solidity
event ExitingAssetsPenalized(uint256 penalty);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`penalty`|`uint256`|The total penalty amount|

### AssetsDonated
Event emitted when the assets are donated to the Vault


```solidity
event AssetsDonated(address sender, uint256 assets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address of the sender|
|`assets`|`uint256`|The amount of donated assets|


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
