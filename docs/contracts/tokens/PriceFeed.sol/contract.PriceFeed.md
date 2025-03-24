# PriceFeed
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/tokens/PriceFeed.sol)

**Inherits:**
[IBalancerRateProvider](/contracts/interfaces/IBalancerRateProvider.sol/interface.IBalancerRateProvider.md), [IChainlinkAggregator](/contracts/interfaces/IChainlinkAggregator.sol/interface.IChainlinkAggregator.md), [IChainlinkV3Aggregator](/contracts/interfaces/IChainlinkV3Aggregator.sol/interface.IChainlinkV3Aggregator.md)

**Author:**
StakeWise

Price feed for osToken (e.g osETH price in ETH)


## State Variables
### version
The version number of the aggregator


```solidity
uint256 public constant override version = 0;
```


### osTokenVaultController

```solidity
address public immutable osTokenVaultController;
```


### description
The description of the aggregator


```solidity
string public override description;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(address _osTokenVaultController, string memory _description);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_osTokenVaultController`|`address`|The address of the OsTokenVaultController contract|
|`_description`|`string`|The description of the price feed|


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

