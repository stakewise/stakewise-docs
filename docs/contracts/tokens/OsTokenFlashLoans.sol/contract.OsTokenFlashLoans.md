# OsTokenFlashLoans
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/tokens/OsTokenFlashLoans.sol)

**Inherits:**
ReentrancyGuard, [IOsTokenFlashLoans](/contracts/interfaces/IOsTokenFlashLoans.sol/interface.IOsTokenFlashLoans.md)

**Author:**
StakeWise

Mint and burn up to 100 000 osToken shares in single transaction.


## State Variables
### _maxFlashLoanAmount

```solidity
uint256 private constant _maxFlashLoanAmount = 100_000 ether;
```


### _osToken

```solidity
address private immutable _osToken;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(address osToken) ReentrancyGuard();
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osToken`|`address`|The address of the OsToken contract|


### flashLoan

Flash loan OsToken shares


```solidity
function flashLoan(uint256 osTokenShares, bytes memory userData) external override nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenShares`|`uint256`|The flashLoan osToken shares amount|
|`userData`|`bytes`|Arbitrary data passed to the `IOsTokenFlashLoanRecipient.receiveFlashLoan` function|


