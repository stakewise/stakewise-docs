---
title: EthOsTokenRedeemer
sidebar_position: 1
description: "Ethereum-specific contract for redeeming osTokens for ETH"
---

# EthOsTokenRedeemer

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/tokens/EthOsTokenRedeemer.sol)

**Inherits:** IEthOsTokenRedeemer, [ReentrancyGuard ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/ReentrancyGuard.sol), [OsTokenRedeemer](./OsTokenRedeemer)

This contract is used to redeem OsTokens for the underlying asset.


## Functions
### constructor

Constructor


```solidity
constructor(
    address vaultsRegistry_,
    address osToken_,
    address osTokenVaultController_,
    address owner_,
    uint256 exitQueueUpdateDelay_
)
    ReentrancyGuard()
    OsTokenRedeemer(vaultsRegistry_, osToken_, osTokenVaultController_, owner_, exitQueueUpdateDelay_);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vaultsRegistry_`|`address`|The address of the VaultsRegistry contract|
|`osToken_`|`address`|The address of the OsToken contract|
|`osTokenVaultController_`|`address`|The address of the OsTokenVaultController contract|
|`owner_`|`address`|The address of the owner|
|`exitQueueUpdateDelay_`|`uint256`|The delay in seconds for exit queue updates|


### swapAssetsToOsTokenShares

Swap assets to OsToken shares. Must send ETH together with the call.


```solidity
function swapAssetsToOsTokenShares(address receiver) external payable override returns (uint256 osTokenShares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address to receive the OsToken shares|

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
function _transferAssets(address receiver, uint256 assets) internal override nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the assets|
|`assets`|`uint256`|The number of assets to transfer|


### receive

Function for receiving redeemed assets.


```solidity
receive() external payable;
```
