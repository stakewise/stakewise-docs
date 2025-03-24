# IRewardEthToken
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IRewardEthToken.sol)

**Author:**
StakeWise

Defines the interface for the RewardEthToken contract

*Copied from https://github.com/stakewise/contracts/blob/master/contracts/interfaces/IRewardEthToken.sol*


## Functions
### totalAssets

*Function for getting the total assets.*


```solidity
function totalAssets() external view returns (uint256);
```

### totalRewards

*Function for retrieving the total rewards amount.*


```solidity
function totalRewards() external view returns (uint128);
```

### totalPenalty

*Function for getting the total penalty.*


```solidity
function totalPenalty() external view returns (uint256);
```

### updateTotalRewards

*Function for updating validators total rewards.
Can only be called by Vault contract.*


```solidity
function updateTotalRewards(int256 rewardsDelta) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`rewardsDelta`|`int256`|- the total rewards earned or penalties received.|


