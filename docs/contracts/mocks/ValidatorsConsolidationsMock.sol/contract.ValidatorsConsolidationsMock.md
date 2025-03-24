# ValidatorsConsolidationsMock
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/mocks/ValidatorsConsolidationsMock.sol)


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
### ValidatorConsolidated

```solidity
event ValidatorConsolidated(bytes fromPubkey, bytes toPubkey);
```

## Errors
### InvalidFeeError

```solidity
error InvalidFeeError();
```

