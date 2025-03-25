# OsTokenVaultEscrow
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/tokens/OsTokenVaultEscrow.sol)

**Inherits:**
Ownable2Step, [Multicall](/contracts/base/multicall.md), [IOsTokenVaultEscrow](/contracts/interfaces/IOsTokenVaultEscrow.sol/interface.IOsTokenVaultEscrow.md)

**Author:**
StakeWise

Used for initiating assets exits from the vault without burning osToken


## State Variables
### _maxPercent

```solidity
uint256 private constant _maxPercent = 1e18;
```


### _wad

```solidity
uint256 private constant _wad = 1e18;
```


### _hfLiqThreshold

```solidity
uint256 private constant _hfLiqThreshold = 1e18;
```


### _osTokenVaultController

```solidity
IOsTokenVaultController private immutable _osTokenVaultController;
```


### _osTokenConfig

```solidity
IOsTokenConfig private immutable _osTokenConfig;
```


### _positions

```solidity
mapping(address vault => mapping(uint256 positionTicket => Position)) private _positions;
```


### liqBonusPercent
The liquidation bonus percent


```solidity
uint256 public override liqBonusPercent;
```


### authenticator
The address of the authenticator


```solidity
address public override authenticator;
```


### liqThresholdPercent
The liquidation threshold percent


```solidity
uint64 public override liqThresholdPercent;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(
    address osTokenVaultController,
    address osTokenConfig,
    address initialOwner,
    address _authenticator,
    uint64 _liqThresholdPercent,
    uint256 _liqBonusPercent
) Ownable(msg.sender);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenVaultController`|`address`|The address of the OsTokenVaultController contract|
|`osTokenConfig`|`address`|The address of the OsTokenConfig contract|
|`initialOwner`|`address`|The address of the contract owner|
|`_authenticator`|`address`|The address of the OsTokenVaultEscrowAuth contract|
|`_liqThresholdPercent`|`uint64`|The liquidation threshold percent|
|`_liqBonusPercent`|`uint256`|The liquidation bonus percent|


### getPosition

Get the position details


```solidity
function getPosition(address vault, uint256 positionTicket) external view returns (address, uint256, uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`positionTicket`|`uint256`|The exit position ticket|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|owner The address of the assets owner|
|`<none>`|`uint256`|exitedAssets The amount of assets exited and ready to be claimed|
|`<none>`|`uint256`|osTokenShares The amount of osToken shares|


### register

Registers the new escrow position


```solidity
function register(address owner, uint256 exitPositionTicket, uint256 osTokenShares, uint256 cumulativeFeePerShare)
    external
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the exited assets owner|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`osTokenShares`|`uint256`|The amount of osToken shares|
|`cumulativeFeePerShare`|`uint256`|The cumulative fee per share used to calculate the osToken fee|


### processExitedAssets

Claims exited assets from the vault to the escrow


```solidity
function processExitedAssets(address vault, uint256 exitPositionTicket, uint256 timestamp, uint256 exitQueueIndex)
    external
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`timestamp`|`uint256`|The timestamp of the exit|
|`exitQueueIndex`|`uint256`|The index of the exit in the queue|


### claimExitedAssets

Claims the exited assets from the escrow to the owner. Can only be called by the position owner.


```solidity
function claimExitedAssets(address vault, uint256 exitPositionTicket, uint256 osTokenShares)
    external
    override
    returns (uint256 claimedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`osTokenShares`|`uint256`|The amount of osToken shares to burn|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`claimedAssets`|`uint256`|The amount of assets claimed|


### liquidateOsToken

Liquidates the osToken shares


```solidity
function liquidateOsToken(address vault, uint256 exitPositionTicket, uint256 osTokenShares, address receiver)
    external
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`osTokenShares`|`uint256`|The amount of osToken shares to liquidate|
|`receiver`|`address`|The address of the receiver of the liquidated assets|


### redeemOsToken

Redeems the osToken shares. Can only be called by the osToken redeemer.


```solidity
function redeemOsToken(address vault, uint256 exitPositionTicket, uint256 osTokenShares, address receiver)
    external
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`osTokenShares`|`uint256`|The amount of osToken shares to redeem|
|`receiver`|`address`|The address of the receiver of the redeemed assets|


### setAuthenticator

Updates the authenticator. Can only be called by the owner.


```solidity
function setAuthenticator(address newAuthenticator) public override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newAuthenticator`|`address`|The address of the new authenticator|


### updateLiqConfig

Updates the liquidation configuration. Can only be called by the owner.


```solidity
function updateLiqConfig(uint64 _liqThresholdPercent, uint256 _liqBonusPercent) public override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_liqThresholdPercent`|`uint64`|The liquidation threshold percent|
|`_liqBonusPercent`|`uint256`|The liquidation bonus percent|


### _redeemOsToken

*Internal function for redeeming osToken shares*


```solidity
function _redeemOsToken(
    address vault,
    uint256 exitPositionTicket,
    address receiver,
    uint256 osTokenShares,
    bool isLiquidation
) private returns (uint256 receivedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`exitPositionTicket`|`uint256`|The position ticket of the exit queue|
|`receiver`|`address`|The address of the receiver of the redeemed assets|
|`osTokenShares`|`uint256`|The amount of osToken shares to redeem|
|`isLiquidation`|`bool`|Whether the redeem is a liquidation|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`receivedAssets`|`uint256`|The amount of assets received|


### _syncPositionFee

*Internal function for syncing the osToken fee*


```solidity
function _syncPositionFee(Position memory position) private view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`position`|`Position`|The position to sync the fee for|


### _transferAssets

*Internal function for transferring assets from the Vault to the receiver*

*IMPORTANT: because control is transferred to the receiver, care must be
taken to not create reentrancy vulnerabilities. The Vault must follow the checks-effects-interactions pattern:
https://docs.soliditylang.org/en/v0.8.22/security-considerations.html#use-the-checks-effects-interactions-pattern*


```solidity
function _transferAssets(address receiver, uint256 assets) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the assets|
|`assets`|`uint256`|The number of assets to transfer|


