# VaultOsToken
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/modules/VaultOsToken.sol)

**Inherits:**
[VaultImmutables](/contracts/vaults/modules/VaultImmutables.sol/abstract.VaultImmutables.md), [VaultState](/contracts/vaults/modules/VaultState.sol/abstract.VaultState.md), [VaultEnterExit](/contracts/vaults/modules/VaultEnterExit.sol/abstract.VaultEnterExit.md), [IVaultOsToken](/contracts/interfaces/IVaultOsToken.sol/interface.IVaultOsToken.md)

**Author:**
StakeWise

Defines the functionality for minting OsToken


## State Variables
### _wad

```solidity
uint256 private constant _wad = 1e18;
```


### _hfLiqThreshold

```solidity
uint256 private constant _hfLiqThreshold = 1e18;
```


### _maxPercent

```solidity
uint256 private constant _maxPercent = 1e18;
```


### _disabledLiqThreshold

```solidity
uint256 private constant _disabledLiqThreshold = type(uint64).max;
```


### _osTokenVaultController
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
IOsTokenVaultController private immutable _osTokenVaultController;
```


### _osTokenConfig
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
IOsTokenConfig internal immutable _osTokenConfig;
```


### _osTokenVaultEscrow
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
IOsTokenVaultEscrow private immutable _osTokenVaultEscrow;
```


### _positions

```solidity
mapping(address => OsTokenPosition) private _positions;
```


### __gap
*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


```solidity
uint256[50] private __gap;
```


## Functions
### constructor

*Constructor*

*Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy’s storage.*

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(address osTokenVaultController, address osTokenConfig, address osTokenVaultEscrow);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenVaultController`|`address`|The address of the OsTokenVaultController contract|
|`osTokenConfig`|`address`|The address of the OsTokenConfig contract|
|`osTokenVaultEscrow`|`address`|The address of the OsTokenVaultEscrow contract|


### osTokenPositions

Get total amount of minted osToken shares


```solidity
function osTokenPositions(address user) public view override returns (uint128 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The address of the user|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint128`|The number of minted osToken shares|


### mintOsToken

Mints OsToken shares


```solidity
function mintOsToken(address receiver, uint256 osTokenShares, address referrer)
    public
    virtual
    override
    returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the minted OsToken shares|
|`osTokenShares`|`uint256`|The number of OsToken shares to mint to the receiver. To mint the maximum amount of shares, use 2^256 - 1.|
|`referrer`|`address`|The address of the referrer|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The number of assets minted to the receiver|


### burnOsToken

Burns osToken shares


```solidity
function burnOsToken(uint128 osTokenShares) external override returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenShares`|`uint128`|The number of shares to burn|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The number of assets burned|


### liquidateOsToken

Liquidates a user position and returns the number of received assets.
Can only be called when health factor is below 1 by the liquidator.


```solidity
function liquidateOsToken(uint256 osTokenShares, address owner, address receiver) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenShares`|`uint256`|The number of shares to cover|
|`owner`|`address`|The address of the position owner to liquidate|
|`receiver`|`address`|The address of the receiver of the liquidated assets|


### redeemOsToken

Redeems osToken shares for assets. Can only be called when health factor is above redeemFromHealthFactor by the redeemer.


```solidity
function redeemOsToken(uint256 osTokenShares, address owner, address receiver) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenShares`|`uint256`|The number of osToken shares to redeem|
|`owner`|`address`|The address of the position owner to redeem from|
|`receiver`|`address`|The address of the receiver of the redeemed assets|


### transferOsTokenPositionToEscrow

Transfers minted osToken shares to the OsTokenVaultEscrow contract, enters the exit queue for staked assets


```solidity
function transferOsTokenPositionToEscrow(uint256 osTokenShares) external override returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenShares`|`uint256`|The number of osToken shares to transfer|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The exit position ticket|


### enterExitQueue

Locks shares to the exit queue. The shares continue earning rewards until they will be burned by the Vault.


```solidity
function enterExitQueue(uint256 shares, address receiver)
    public
    virtual
    override(IVaultEnterExit, VaultEnterExit)
    returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares to lock|
|`receiver`|`address`|The address that will receive assets upon withdrawal|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket of the exit queue. Returns uint256 max if no ticket created.|


### _mintOsToken

*Internal function for minting osToken shares*


```solidity
function _mintOsToken(address owner, address receiver, uint256 osTokenShares, address referrer)
    internal
    returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The owner of the osToken position|
|`receiver`|`address`|The receiver of the osToken shares|
|`osTokenShares`|`uint256`|The amount of osToken shares to mint|
|`referrer`|`address`|The address of the referrer|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets minted|


### _redeemOsToken

*Internal function for redeeming and liquidating osToken shares*


```solidity
function _redeemOsToken(address owner, address receiver, uint256 osTokenShares, bool isLiquidation)
    private
    returns (uint256 burnedShares, uint256 receivedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The minter of the osToken shares|
|`receiver`|`address`|The receiver of the assets|
|`osTokenShares`|`uint256`|The amount of osToken shares to redeem or liquidate|
|`isLiquidation`|`bool`|Whether the liquidation or redemption is being performed|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`burnedShares`|`uint256`|The amount of shares burned|
|`receivedAssets`|`uint256`|The amount of assets received|


### _syncPositionFee

*Internal function for syncing the osToken fee*


```solidity
function _syncPositionFee(OsTokenPosition memory position) private view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`position`|`OsTokenPosition`|The position to sync the fee for|


### _checkOsTokenPosition

Internal function for checking position validity. Reverts if it is invalid.


```solidity
function _checkOsTokenPosition(address user) internal view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The address of the user|


### _calcMaxOsTokenShares

*Internal function for calculating the maximum amount of osToken shares that can be minted*


```solidity
function _calcMaxOsTokenShares(uint256 assets) internal view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to convert to osToken shares|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|maxOsTokenShares The maximum amount of osToken shares that can be minted|


