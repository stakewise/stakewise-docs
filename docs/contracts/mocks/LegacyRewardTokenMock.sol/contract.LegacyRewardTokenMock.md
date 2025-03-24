# LegacyRewardTokenMock
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/mocks/LegacyRewardTokenMock.sol)


## State Variables
### vault

```solidity
address public vault;
```


### totalStaked

```solidity
uint256 public totalStaked;
```


### totalRewards

```solidity
uint256 public totalRewards;
```


### totalPenalty

```solidity
uint256 public totalPenalty;
```


## Functions
### setVault


```solidity
function setVault(address _vault) external;
```

### totalAssets


```solidity
function totalAssets() public view returns (uint256);
```

### setTotalStaked


```solidity
function setTotalStaked(uint256 _totalStaked) external;
```

### setTotalPenalty


```solidity
function setTotalPenalty(uint256 _totalPenalty) external;
```

### setTotalRewards


```solidity
function setTotalRewards(uint256 _totalRewards) external;
```

### updateTotalRewards


```solidity
function updateTotalRewards(int256 rewardsDelta) external;
```

### migrate


```solidity
function migrate(address receiver, uint256 principal, uint256 reward) external;
```

