# OsTokenFlashLoanRecipientMock
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/mocks/OsTokenFlashLoanRecipientMock.sol)

**Inherits:**
[IOsTokenFlashLoanRecipient](/contracts/interfaces/IOsTokenFlashLoanRecipient.sol/interface.IOsTokenFlashLoanRecipient.md)

Mock contract that acts both as the caller and receiver of the flash loan


## State Variables
### osToken

```solidity
address public osToken;
```


### shouldRepayLoan

```solidity
bool public shouldRepayLoan;
```


### flashLoanContract

```solidity
address public flashLoanContract;
```


## Functions
### constructor

*Constructor to set the osToken address and flash loan contract*


```solidity
constructor(address _osToken, address _flashLoanContract);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_osToken`|`address`|The address of the OsToken contract|
|`_flashLoanContract`|`address`|The address of the OsTokenFlashLoans contract|


### receiveFlashLoan


```solidity
function receiveFlashLoan(uint256 osTokenShares, bytes calldata) external override;
```

### executeFlashLoan

Executes a flash loan from the OsTokenFlashLoans contract


```solidity
function executeFlashLoan(uint256 osTokenShares, bytes calldata userData) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenShares`|`uint256`|The amount of OsToken shares to borrow|
|`userData`|`bytes`|Arbitrary data to pass along with the flash loan|


### setShouldRepayLoan

Toggle the loan repayment behavior (for testing)


```solidity
function setShouldRepayLoan(bool repay) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`repay`|`bool`|Set to true if the loan should be repaid, false otherwise|


