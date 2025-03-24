# RewardSplitterFactory
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/misc/RewardSplitterFactory.sol)

**Inherits:**
[IRewardSplitterFactory](/contracts/interfaces/IRewardSplitterFactory.sol/interface.IRewardSplitterFactory.md)

**Author:**
StakeWise

Factory for deploying the RewardSplitter contract


## State Variables
### implementation
The address of the RewardSplitter implementation contract used for proxy creation


```solidity
address public immutable override implementation;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(address _implementation);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_implementation`|`address`|The implementation address of RewardSplitter|


### createRewardSplitter

Creates RewardSplitter contract proxy


```solidity
function createRewardSplitter(address vault) external override returns (address rewardSplitter);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault to which the RewardSplitter will be connected|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`rewardSplitter`|`address`|The address of the created RewardSplitter contract|


