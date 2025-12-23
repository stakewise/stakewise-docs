---
title: OsTokenUtils
sidebar_position: 4
description: "Utility library for handling osToken redemption calculations"
---

# OsTokenUtils

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/libraries/OsTokenUtils.sol)

Includes functionality for handling osToken redemptions


## Structs
### RedemptionData
Struct for storing redemption data


```solidity
struct RedemptionData {
    uint256 mintedAssets;
    uint256 depositedAssets;
    uint256 redeemedOsTokenShares;
    uint256 availableAssets;
    bool isLiquidation;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`mintedAssets`|`uint256`|The amount of minted assets|
|`depositedAssets`|`uint256`|The amount of deposited assets|
|`redeemedOsTokenShares`|`uint256`|The amount of redeemed osToken shares|
|`availableAssets`|`uint256`|The amount of available assets|
|`isLiquidation`|`bool`|Whether the redemption is a liquidation|


## Functions
### calculateReceivedAssets

Calculates the amount of received assets during osToken redemption


```solidity
function calculateReceivedAssets(
    IOsTokenConfig osTokenConfig,
    IOsTokenVaultController osTokenVaultController,
    RedemptionData memory data
) external view returns (uint256 receivedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenConfig`|`IOsTokenConfig`|The address of the osToken config contract|
|`osTokenVaultController`|`IOsTokenVaultController`|The address of the osToken vault controller contract|
|`data`|`RedemptionData`|The redemption data|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`receivedAssets`|`uint256`|The amount of received assets|
