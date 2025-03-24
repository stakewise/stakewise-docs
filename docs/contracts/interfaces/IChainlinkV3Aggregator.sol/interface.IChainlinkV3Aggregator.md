# IChainlinkV3Aggregator
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IChainlinkV3Aggregator.sol)

**Author:**
Chainlink

Interface for Chainlink V3 aggregator contract

*Copied from https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol*


## Functions
### decimals

The number of decimals the price is formatted with


```solidity
function decimals() external view returns (uint8);
```

### description

The description of the aggregator


```solidity
function description() external view returns (string memory);
```

### version

The version number of the aggregator


```solidity
function version() external view returns (uint256);
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


