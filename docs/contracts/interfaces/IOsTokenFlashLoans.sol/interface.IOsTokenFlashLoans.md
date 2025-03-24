# IOsTokenFlashLoans
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IOsTokenFlashLoans.sol)

**Author:**
StakeWise

Interface for OsTokenFlashLoans contract


## Functions
### flashLoan

Flash loan OsToken shares


```solidity
function flashLoan(uint256 osTokenShares, bytes memory userData) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenShares`|`uint256`|The flashLoan osToken shares amount|
|`userData`|`bytes`|Arbitrary data passed to the `IOsTokenFlashLoanRecipient.receiveFlashLoan` function|


## Events
### OsTokenFlashLoan
Event emitted on flash loan


```solidity
event OsTokenFlashLoan(address indexed caller, uint256 amount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the caller|
|`amount`|`uint256`|The flashLoan osToken shares amount|

