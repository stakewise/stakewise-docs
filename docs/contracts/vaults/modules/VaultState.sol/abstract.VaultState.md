# VaultState
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/modules/VaultState.sol)

**Inherits:**
[VaultImmutables](/contracts/vaults/modules/VaultImmutables.sol/abstract.VaultImmutables.md), Initializable, [VaultFee](/contracts/vaults/modules/VaultFee.sol/abstract.VaultFee.md), [IVaultState](/contracts/interfaces/IVaultState.sol/interface.IVaultState.md)

**Author:**
StakeWise

Defines Vault's state manipulation


## State Variables
### _totalShares

```solidity
uint128 internal _totalShares;
```


### _totalAssets

```solidity
uint128 internal _totalAssets;
```


### queuedShares
Queued Shares


```solidity
uint128 public override queuedShares;
```


### _unclaimedAssets

```solidity
uint128 internal _unclaimedAssets;
```


### _exitQueue

```solidity
ExitQueue.History internal _exitQueue;
```


### _exitRequests

```solidity
mapping(bytes32 => uint256) internal _exitRequests;
```


### _balances

```solidity
mapping(address => uint256) internal _balances;
```


### _capacity

```solidity
uint256 private _capacity;
```


### totalExitingAssets
Total Exiting Assets (deprecated)


```solidity
uint128 public override totalExitingAssets;
```


### _totalExitingTickets

```solidity
uint128 internal _totalExitingTickets;
```


### _totalExitedTickets

```solidity
uint256 internal _totalExitedTickets;
```


### __gap
*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


```solidity
uint256[48] private __gap;
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
function isStateUpdateRequired() external view override returns (bool);
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

*Internal function for processing rewards and penalties*


```solidity
function _processTotalAssetsDelta(int256 totalAssetsDelta) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`totalAssetsDelta`|`int256`|The number of assets earned or lost|


### _updateExitQueue

*Internal function that must be used to process exit queue*

*Make sure that sufficient time passed between exit queue updates (at least 1 day).
Currently it's restricted by the keeper's harvest interval*


```solidity
function _updateExitQueue() internal virtual returns (uint256 burnedShares);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`burnedShares`|`uint256`|The total amount of burned shares|


### _mintShares

*Internal function for minting shares*


```solidity
function _mintShares(address owner, uint256 shares) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner to mint shares to|
|`shares`|`uint256`|The number of shares to mint|


### _burnShares

*Internal function for burning shares*


```solidity
function _burnShares(address owner, uint256 shares) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner to burn shares for|
|`shares`|`uint256`|The number of shares to burn|


### _convertToShares

*Internal conversion function (from assets to shares) with support for rounding direction.*


```solidity
function _convertToShares(uint256 assets, Math.Rounding rounding) internal view returns (uint256 shares);
```

### _harvestAssets

*Internal function for harvesting Vaults' new assets*


```solidity
function _harvestAssets(IKeeperRewards.HarvestParams calldata harvestParams) internal virtual returns (int256, bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`int256`|The total assets delta after harvest|
|`<none>`|`bool`|`true` when the rewards were harvested, `false` otherwise|


### _vaultAssets

*Internal function for retrieving the total assets stored in the Vault.
NB! Assets can be forcibly sent to the vault, the returned value must be used with caution*


```solidity
function _vaultAssets() internal view virtual returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of assets stored in the Vault|


### __VaultState_init

*Initializes the VaultState contract*


```solidity
function __VaultState_init(uint256 capacity_) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`capacity_`|`uint256`|The amount after which the Vault stops accepting deposits|


### __VaultState_upgrade

*Upgrades the VaultState contract*


```solidity
function __VaultState_upgrade() internal onlyInitializing;
```

