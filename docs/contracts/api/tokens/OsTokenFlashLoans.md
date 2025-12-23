---
title: OsTokenFlashLoans
sidebar_position: 7
description: "Flash loan contract for borrowing up to 100,000 osToken shares in a single transaction"
---

# OsTokenFlashLoans

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/tokens/OsTokenFlashLoans.sol)

**Inherits:** [ReentrancyGuard ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/ReentrancyGuard.sol), IOsTokenFlashLoans

Mint and burn up to 100 000 osToken shares in single transaction.


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


## Functions
### constructor

Constructor


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
