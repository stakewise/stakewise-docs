---
title: GnoOsTokenRedeemer
sidebar_position: 3
description: "Gnosis-specific contract for redeeming osTokens for GNO"
---

# GnoOsTokenRedeemer

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/tokens/GnoOsTokenRedeemer.sol)

**Inherits:** IGnoOsTokenRedeemer, [OsTokenRedeemer](./OsTokenRedeemer)

This contract is used to redeem OsTokens for the underlying asset.


## State Variables
### _gnoToken

```solidity
IERC20 private immutable _gnoToken
```


## Functions
### constructor

Constructor


```solidity
constructor(
    address gnoToken_,
    address vaultsRegistry_,
    address osToken_,
    address osTokenVaultController_,
    address owner_,
    uint256 exitQueueUpdateDelay_
) OsTokenRedeemer(vaultsRegistry_, osToken_, osTokenVaultController_, owner_, exitQueueUpdateDelay_);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gnoToken_`|`address`|The address of the GNO token contract|
|`vaultsRegistry_`|`address`|The address of the VaultsRegistry contract|
|`osToken_`|`address`|The address of the OsToken contract|
|`osTokenVaultController_`|`address`|The address of the OsTokenVaultController contract|
|`owner_`|`address`|The address of the owner|
|`exitQueueUpdateDelay_`|`uint256`|The delay in seconds for exit queue updates|


### permitGnoToken

Permit GNO tokens to be used for swap.


```solidity
function permitGnoToken(uint256 amount, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The number of tokens to permit|
|`deadline`|`uint256`|The deadline for the permit|
|`v`|`uint8`|The recovery byte of the signature|
|`r`|`bytes32`|The output of the ECDSA signature|
|`s`|`bytes32`|The output of the ECDSA signature|


### swapAssetsToOsTokenShares

Swap assets to OsToken shares


```solidity
function swapAssetsToOsTokenShares(address receiver, uint256 assets)
    external
    override
    returns (uint256 osTokenShares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address to receive the OsToken shares|
|`assets`|`uint256`|The amount of assets to swap|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`osTokenShares`|`uint256`|The amount of OsToken shares received|


### _getAssets

Internal function that must be implemented to return the account assets


```solidity
function _getAssets(address account) internal view override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of assets in the vault|


### _transferAssets

Internal function for transferring assets to the receiver


```solidity
function _transferAssets(address receiver, uint256 assets) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the assets|
|`assets`|`uint256`|The number of assets to transfer|
