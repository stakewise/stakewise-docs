---
title: GnoOsTokenRedeemer
sidebar_position: 3
description: "Gnosis-specific contract for redeeming osTokens for GNO"
---

# GnoOsTokenRedeemer

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/tokens/GnoOsTokenRedeemer.sol)

**Inherits:** IGnoOsTokenRedeemer, [OsTokenRedeemer →](./OsTokenRedeemer)

This contract is used to redeem OsTokens for the underlying asset.


## Functions
### constructor


```solidity
constructor(
    address gnoToken_,
    address osToken_,
    address osTokenVaultController_,
    address owner_,
    uint256 exitQueueUpdateDelay_
) OsTokenRedeemer(osToken_, osTokenVaultController_, owner_, exitQueueUpdateDelay_);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gnoToken_`|`address`|The address of the GNO token contract|
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
