---
title: VaultOsToken
sidebar_position: 9
description: "Abstract contract defining OsToken minting functionality for vaults"
---

# VaultOsToken

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/modules/VaultOsToken.sol)

**Inherits:** [VaultImmutables →](./VaultImmutables), [VaultState →](./VaultState), [VaultEnterExit →](./VaultEnterExit), IVaultOsToken

Defines the functionality for minting OsToken.

## Structs
### OsTokenPosition
Struct of osToken position

```solidity
struct OsTokenPosition {
    uint128 shares;
    uint128 cumulativeFeePerShare;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint128`|The total number of minted osToken shares. Will increase based on the treasury fee.|
|`cumulativeFeePerShare`|`uint128`|The cumulative fee per share|

## Events
### OsTokenMinted
Event emitted on minting osToken


```solidity
event OsTokenMinted(address indexed caller, address receiver, uint256 assets, uint256 shares, address referrer);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`receiver`|`address`|The address of the osToken receiver|
|`assets`|`uint256`|The amount of minted assets|
|`shares`|`uint256`|The amount of minted shares|
|`referrer`|`address`|The address of the referrer|

### OsTokenBurned
Event emitted on burning OsToken


```solidity
event OsTokenBurned(address indexed caller, uint256 assets, uint256 shares);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`assets`|`uint256`|The amount of burned assets|
|`shares`|`uint256`|The amount of burned shares|

### OsTokenLiquidated
Event emitted on osToken position liquidation


```solidity
event OsTokenLiquidated(
    address indexed caller,
    address indexed user,
    address receiver,
    uint256 osTokenShares,
    uint256 shares,
    uint256 receivedAssets
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`user`|`address`|The address of the user liquidated|
|`receiver`|`address`|The address of the receiver of the liquidated assets|
|`osTokenShares`|`uint256`|The amount of osToken shares to liquidate|
|`shares`|`uint256`|The amount of vault shares burned|
|`receivedAssets`|`uint256`|The amount of assets received|

### OsTokenRedeemed
Event emitted on osToken position redemption


```solidity
event OsTokenRedeemed(
    address indexed caller,
    address indexed user,
    address receiver,
    uint256 osTokenShares,
    uint256 shares,
    uint256 assets
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`user`|`address`|The address of the position owner to redeem from|
|`receiver`|`address`|The address of the receiver of the redeemed assets|
|`osTokenShares`|`uint256`|The amount of osToken shares to redeem|
|`shares`|`uint256`|The amount of vault shares burned|
|`assets`|`uint256`|The amount of assets received|

## Functions

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
