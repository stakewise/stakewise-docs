# IChainlinkAggregator
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IChainlinkAggregator.sol)

**Author:**
Chainlink

Interface for Chainlink aggregator contract

*Copied from https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.8/interfaces/AggregatorInterface.sol*


## Functions
### latestAnswer

Returns the price of a unit of osToken (e.g price of osETH in ETH)


```solidity
function latestAnswer() external view returns (int256);
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


