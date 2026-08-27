---
title: OsTokenFlashLoans
sidebar_position: 7
description: "Flash loan contract for borrowing up to 100,000 osToken shares in a single transaction"
---

# OsTokenFlashLoans

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/tokens/OsTokenFlashLoans.sol)

**Inherits:** [ReentrancyGuard ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/ReentrancyGuard.sol), IOsTokenFlashLoans

Mint and burn up to 100 000 osToken shares in single transaction.


## State Variables
### _maxFlashLoanAmount

```solidity
uint256 private constant _maxFlashLoanAmount = 100_000 ether
```


### _osToken

```solidity
address private immutable _osToken
```


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
