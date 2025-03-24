# IRewardSplitterFactory
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IRewardSplitterFactory.sol)

**Author:**
StakeWise

Defines the interface for the RewardSplitterFactory contract


## Functions
### implementation

The address of the RewardSplitter implementation contract used for proxy creation


```solidity
function implementation() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the RewardSplitter proxy contract|


### createRewardSplitter

Creates RewardSplitter contract proxy


```solidity
function createRewardSplitter(address vault) external returns (address rewardSplitter);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault to which the RewardSplitter will be connected|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`rewardSplitter`|`address`|The address of the created RewardSplitter contract|


## Events
### RewardSplitterCreated
Event emitted on a RewardSplitter creation


```solidity
event RewardSplitterCreated(address owner, address vault, address rewardSplitter);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the RewardSplitter owner|
|`vault`|`address`|The address of the connected vault|
|`rewardSplitter`|`address`|The address of the created RewardSplitter|

