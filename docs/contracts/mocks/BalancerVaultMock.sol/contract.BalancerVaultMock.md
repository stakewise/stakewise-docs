# BalancerVaultMock
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/mocks/BalancerVaultMock.sol)

**Inherits:**
Ownable, [IBalancerVault](/contracts/interfaces/IBalancerVault.sol/interface.IBalancerVault.md)

**Author:**
StakeWise

Defines the mock for the Balancer Vault contract


## State Variables
### _wad

```solidity
uint256 private constant _wad = 1e18;
```


### _outputToken

```solidity
address private immutable _outputToken;
```


### xdaiGnoRate

```solidity
uint256 public xdaiGnoRate;
```


## Functions
### constructor


```solidity
constructor(address outputToken, uint256 _xdaiGnoRate, address _initialOwner) Ownable(_initialOwner);
```

### swap


```solidity
function swap(SingleSwap calldata singleSwap, FundManagement calldata funds, uint256 limit, uint256 deadline)
    external
    payable
    returns (uint256 amountOut);
```

### setXdaiGnoRate


```solidity
function setXdaiGnoRate(uint256 newRate) external onlyOwner;
```

### drain


```solidity
function drain() external onlyOwner;
```

## Errors
### SwapExpired

```solidity
error SwapExpired();
```

### InvalidSingleSwap

```solidity
error InvalidSingleSwap();
```

### InvalidFundManagement

```solidity
error InvalidFundManagement();
```

### LimitExceeded

```solidity
error LimitExceeded();
```

