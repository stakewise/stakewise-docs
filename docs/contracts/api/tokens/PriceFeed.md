---
title: PriceFeed
sidebar_position: 11
description: "Price feed oracle for osToken compatible with Balancer and Chainlink interfaces"
---

# PriceFeed

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/tokens/PriceFeed.sol)

**Inherits:** IBalancerRateProvider, IChainlinkAggregator, IChainlinkV3Aggregator

Price feed for osToken (e.g osETH price in ETH).


## State Variables
### version
The version number of the aggregator


```solidity
uint256 public constant override version = 0
```


### osTokenVaultController

```solidity
address public immutable osTokenVaultController
```


## Functions

### description

The description of the aggregator


```solidity
function description() external view returns (string memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|The description string|


### getRate

Returns the price of a unit of osToken (e.g price of osETH in ETH)


```solidity
function getRate() public view override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The price of a unit of osToken (with 18 decimals)|


### latestAnswer

Returns the price of a unit of osToken (e.g price of osETH in ETH)


```solidity
function latestAnswer() public view override returns (int256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`int256`|The price of a unit of osToken (with 18 decimals)|


### latestTimestamp

The last updated at block timestamp


```solidity
function latestTimestamp() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The timestamp of the last update|


### decimals

The number of decimals the price is formatted with


```solidity
function decimals() public pure returns (uint8);
```

### latestRoundData

Get the data from the latest round


```solidity
function latestRoundData()
    external
    view
    returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`roundId`|`uint80`|The round ID|
|`answer`|`int256`|The current price|
|`startedAt`|`uint256`|The timestamp of when the round started|
|`updatedAt`|`uint256`|The timestamp of when the round was updated|
|`answeredInRound`|`uint80`|(Deprecated) Previously used when answers could take multiple rounds to be computed|


## Errors
### NotImplemented

```solidity
error NotImplemented();
```
