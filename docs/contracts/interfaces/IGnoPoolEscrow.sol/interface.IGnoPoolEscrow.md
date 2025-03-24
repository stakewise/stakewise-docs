# IGnoPoolEscrow
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IGnoPoolEscrow.sol)

**Author:**
StakeWise

Defines the interface for the PoolEscrow contract on Gnosis

*Copied from https://github.com/stakewise/contracts/blob/gnosis-chain/contracts/interfaces/IPoolEscrow.sol*


## Functions
### owner

*Function for retrieving the address of the current owner.*


```solidity
function owner() external view returns (address);
```

### futureOwner

*Function for retrieving the address of the future owner.*


```solidity
function futureOwner() external view returns (address);
```

### commitOwnershipTransfer

*Commit contract ownership transfer to a new account (`newOwner`).
Can only be called by the current owner.*


```solidity
function commitOwnershipTransfer(address newOwner) external;
```

### applyOwnershipTransfer

*Apply contract ownership transfer to a new account (`futureOwner`).
Can only be called by the future owner.*


```solidity
function applyOwnershipTransfer() external;
```

### withdrawTokens

*Withdraw tokens from the escrow. Can only be called by the current owner.*


```solidity
function withdrawTokens(address token, address payee, uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|- the address of the token to transfer.|
|`payee`|`address`|- the address where the funds will be transferred to.|
|`amount`|`uint256`|- the amount of tokens to transfer to payee.|


### withdraw

*Withdraw balance for a payee, forwarding all gas to the
recipient. Can only be called by the current owner.
WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities.
Make sure you trust the recipient, or are either following the
checks-effects-interactions pattern or using ReentrancyGuard.*


```solidity
function withdraw(address payable payee, uint256 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`payee`|`address payable`|- the address where the funds will be transferred to.|
|`amount`|`uint256`|- the amount of xDAI to transfer to payee.|


## Events
### Withdrawn
*Event for tracking withdrawals.*


```solidity
event Withdrawn(address indexed sender, address indexed payee, uint256 amount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|- the address of the transaction sender.|
|`payee`|`address`|- the address where the funds were transferred to.|
|`amount`|`uint256`|- the amount transferred to payee.|

### OwnershipTransferCommitted
*Event for tracking ownership transfer commits.*


```solidity
event OwnershipTransferCommitted(address indexed currentOwner, address indexed futureOwner);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`currentOwner`|`address`|- the address of the current owner.|
|`futureOwner`|`address`|- the address the ownership is planned to be transferred to.|

### OwnershipTransferApplied
*Event for tracking ownership transfers.*


```solidity
event OwnershipTransferApplied(address indexed previousOwner, address indexed newOwner);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`previousOwner`|`address`|- the address the ownership was transferred from.|
|`newOwner`|`address`|- the address the ownership was transferred to.|

