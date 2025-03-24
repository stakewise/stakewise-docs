# IVaultState
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IVaultState.sol)

**Inherits:**
[IVaultFee](/contracts/interfaces/IVaultFee.sol/interface.IVaultFee.md)

**Author:**
StakeWise

Defines the interface for the VaultState contract


## Functions
### totalAssets

Total assets in the Vault


```solidity
function totalAssets() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of the underlying asset that is "managed" by Vault|


### totalShares

Function for retrieving total shares


```solidity
function totalShares() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of shares in existence|


### capacity

The Vault's capacity


```solidity
function capacity() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount after which the Vault stops accepting deposits|


### withdrawableAssets

Total assets available in the Vault. They can be staked or withdrawn.


```solidity
function withdrawableAssets() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of withdrawable assets|


### queuedShares

Queued Shares


```solidity
function queuedShares() external view returns (uint128);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|The total number of shares queued for exit|


### totalExitingAssets

Total Exiting Assets (deprecated)


```solidity
function totalExitingAssets() external view returns (uint128);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|The total number of assets queued for exit|


### getShares

Returns the number of shares held by an account


```solidity
function getShares(address account) external view returns (uint256);
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
function convertToShares(uint256 assets) external view returns (uint256 shares);
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
function convertToAssets(uint256 shares) external view returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to convert to assets|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets that the Vault would exchange for the amount of shares provided|


### isStateUpdateRequired

Check whether state update is required


```solidity
function isStateUpdateRequired() external view returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if state update is required, `false` otherwise|


### updateState

Updates the total amount of assets in the Vault and its exit queue


```solidity
function updateState(IKeeperRewards.HarvestParams calldata harvestParams) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`harvestParams`|`IKeeperRewards.HarvestParams`|The parameters for harvesting Keeper rewards|


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
Event emitted when exiting assets are penalized


```solidity
event ExitingAssetsPenalized(uint256 penalty);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`penalty`|`uint256`|The total penalty amount|

