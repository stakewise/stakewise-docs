# IBalancerRateProvider
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IBalancerRateProvider.sol)


## Functions
### getRate

Returns the price of a unit of osToken (e.g price of osETH in ETH)


```solidity
function getRate() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The price of a unit of osToken (with 18 decimals)|


