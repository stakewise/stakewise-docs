# IMulticall
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IMulticall.sol)

**Author:**
Uniswap

Adopted from https://github.com/Uniswap/v3-periphery/blob/1d69caf0d6c8cfeae9acd1f34ead30018d6e6400/contracts/base/Multicall.sol

Enables calling multiple methods in a single call to the contract


## Functions
### multicall

Call multiple functions in the current contract and return the data from all of them if they all succeed


```solidity
function multicall(bytes[] calldata data) external returns (bytes[] memory results);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`data`|`bytes[]`|The encoded function data for each of the calls to make to this contract|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`results`|`bytes[]`|The results from each of the calls passed in via data|


