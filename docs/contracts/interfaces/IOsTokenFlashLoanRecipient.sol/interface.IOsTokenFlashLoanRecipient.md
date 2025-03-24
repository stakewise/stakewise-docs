# IOsTokenFlashLoanRecipient
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IOsTokenFlashLoanRecipient.sol)

**Author:**
StakeWise

Interface for OsTokenFlashLoanRecipient contract


## Functions
### receiveFlashLoan

Receive flash loan hook


```solidity
function receiveFlashLoan(uint256 osTokenShares, bytes memory userData) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenShares`|`uint256`|The osToken flash loan amount|
|`userData`|`bytes`|Arbitrary data passed to the hook|


