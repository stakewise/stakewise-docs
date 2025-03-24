# MulticallMock
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/mocks/MulticallMock.sol)

*Copied from https://github.com/mds1/multicall/blob/main/src/Multicall3.sol*


## Functions
### aggregate

Backwards-compatible call aggregation with Multicall


```solidity
function aggregate(Call[] calldata calls) public payable returns (uint256 blockNumber, bytes[] memory returnData);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`calls`|`Call[]`|An array of Call structs|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`blockNumber`|`uint256`|The block number where the calls were executed|
|`returnData`|`bytes[]`|An array of bytes containing the responses|


### receive


```solidity
receive() external payable;
```

## Structs
### Call

```solidity
struct Call {
    address target;
    bool isPayable;
    bytes callData;
}
```

