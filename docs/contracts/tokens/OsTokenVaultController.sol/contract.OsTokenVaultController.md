# OsTokenVaultController
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/tokens/OsTokenVaultController.sol)

**Inherits:**
Ownable2Step, [IOsTokenVaultController](/contracts/interfaces/IOsTokenVaultController.sol/interface.IOsTokenVaultController.md)

**Author:**
StakeWise

Over-collateralized staked token controller


## State Variables
### _wad

```solidity
uint256 private constant _wad = 1e18;
```


### _maxFeePercent

```solidity
uint256 private constant _maxFeePercent = 10_000;
```


### _registry

```solidity
address private immutable _registry;
```


### _osToken

```solidity
address private immutable _osToken;
```


### keeper
The address that can update avgRewardPerSecond


```solidity
address public override keeper;
```


### capacity
The OsToken capacity


```solidity
uint256 public override capacity;
```


### avgRewardPerSecond
The average reward per second used to mint OsToken rewards


```solidity
uint256 public override avgRewardPerSecond;
```


### treasury
The DAO treasury address that receives OsToken fees


```solidity
address public override treasury;
```


### feePercent
The fee percent (multiplied by 100)


```solidity
uint64 public override feePercent;
```


### _cumulativeFeePerShare

```solidity
uint192 private _cumulativeFeePerShare = uint192(_wad);
```


### _lastUpdateTimestamp

```solidity
uint64 private _lastUpdateTimestamp;
```


### _totalShares

```solidity
uint128 private _totalShares;
```


### _totalAssets

```solidity
uint128 private _totalAssets;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(
    address _keeper,
    address registry,
    address osToken,
    address _treasury,
    address _owner,
    uint16 _feePercent,
    uint256 _capacity
) Ownable(msg.sender);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_keeper`|`address`|The address of the Keeper contract|
|`registry`|`address`|The address of the VaultsRegistry contract|
|`osToken`|`address`|The address of the OsToken contract|
|`_treasury`|`address`|The address of the DAO treasury|
|`_owner`|`address`|The address of the owner of the contract|
|`_feePercent`|`uint16`|The fee percent applied on the rewards|
|`_capacity`|`uint256`|The amount after which the osToken stops accepting deposits|


### totalShares

The total number of shares controlled by the OsToken


```solidity
function totalShares() external view override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total number of shares|


### totalAssets

Total assets controlled by the OsToken


```solidity
function totalAssets() public view override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of the underlying asset that is "managed" by OsToken|


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
|`shares`|`uint256`|The amount of OsToken shares obtained when exchanging with the amount of assets provided|


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
|`assets`|`uint256`|The amount of assets obtained when exchanging with the amount of OsToken shares provided|


### mintShares

Mint OsToken shares. Can only be called by the registered vault.


```solidity
function mintShares(address receiver, uint256 shares) external override returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the shares|
|`shares`|`uint256`|The amount of shares to mint|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets minted|


### burnShares

Burn shares for withdrawn assets. Can only be called by the registered vault.


```solidity
function burnShares(address owner, uint256 shares) external override returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address that owns the shares|
|`shares`|`uint256`|The amount of shares to burn|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets withdrawn|


### setCapacity

Update capacity. Can only be called by the owner.


```solidity
function setCapacity(uint256 _capacity) public override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_capacity`|`uint256`|The amount after which the OsToken stops accepting deposits|


### setTreasury

Update treasury address. Can only be called by the owner.


```solidity
function setTreasury(address _treasury) public override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_treasury`|`address`|The new treasury address|


### setFeePercent

Update fee percent. Can only be called by the owner. Cannot be larger than 10 000 (100%).


```solidity
function setFeePercent(uint16 _feePercent) public override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_feePercent`|`uint16`|The new fee percent|


### setAvgRewardPerSecond

Updates average reward per second. Can only be called by the keeper.


```solidity
function setAvgRewardPerSecond(uint256 _avgRewardPerSecond) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_avgRewardPerSecond`|`uint256`|The new average reward per second|


### setKeeper

Update keeper address. Can only be called by the owner.


```solidity
function setKeeper(address _keeper) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_keeper`|`address`|The new keeper address|


### cumulativeFeePerShare

The fee per share used for calculating the fee for every position


```solidity
function cumulativeFeePerShare() external view override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The cumulative fee per share|


### updateState

Updates rewards and treasury fee checkpoint for the OsToken


```solidity
function updateState() public override;
```

### _convertToShares

*Internal conversion function (from assets to shares) with support for rounding direction.*


```solidity
function _convertToShares(uint256 assets, uint256 totalShares_, uint256 totalAssets_, Math.Rounding rounding)
    internal
    pure
    returns (uint256 shares);
```

### _convertToAssets

*Internal conversion function (from shares to assets) with support for rounding direction.*


```solidity
function _convertToAssets(uint256 shares, uint256 totalShares_, uint256 totalAssets_, Math.Rounding rounding)
    internal
    pure
    returns (uint256);
```

### _unclaimedAssets

*Internal function for calculating assets accumulated since last update*


```solidity
function _unclaimedAssets() internal view returns (uint256);
```

