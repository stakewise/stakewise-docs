# ValidatorsWithdrawalsMock
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/mocks/ValidatorsWithdrawalsMock.sol)


## State Variables
### _fee

```solidity
uint256 private constant _fee = 0.1 ether;
```


## Functions
### fallback


```solidity
fallback(bytes calldata input) external payable returns (bytes memory output);
```

## Events
### ValidatorWithdrawn

```solidity
event ValidatorWithdrawn(address sender, bytes fromPubkey, uint64 amount);
```

## Errors
### InvalidFeeError

```solidity
error InvalidFeeError();
```

