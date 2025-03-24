# ISavingsXDaiAdapter
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/ISavingsXDaiAdapter.sol)

**Author:**
StakeWise

Defines the interface for the SavingsXDaiAdapter


## Functions
### depositXDAI

Convert xDAI to sDAI


```solidity
function depositXDAI(address receiver) external payable returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address of the receiver|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of sDAI received|


