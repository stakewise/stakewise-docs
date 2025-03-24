# PoolEscrowMock
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/mocks/PoolEscrowMock.sol)

**Inherits:**
[IGnoPoolEscrow](/contracts/interfaces/IGnoPoolEscrow.sol/interface.IGnoPoolEscrow.md)

*PoolEscrow contract is used to receive transfers from ETH2 system contract for the pool validators.
The withdrawal credentials of the Pool must be set to
https://github.com/ethereum/eth2.0-specs/blob/v1.1.0-alpha.2/specs/phase0/validator.md#eth1_address_withdrawal_prefix
using the address of this contract as a destination.*


## State Variables
### owner

```solidity
address public override owner;
```


### futureOwner

```solidity
address public override futureOwner;
```


## Functions
### constructor

*Constructor for initializing the PoolEscrow contract.*


```solidity
constructor(address _owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|- address of the contract owner.|


### onlyOwner

*Throws if called by any account other than the owner.*


```solidity
modifier onlyOwner();
```

### commitOwnershipTransfer

*See [IPoolEscrow-commitOwnershipTransfer](/contracts/interfaces/IEthPoolEscrow.sol/interface.IEthPoolEscrow.md#commitownershiptransfer).*


```solidity
function commitOwnershipTransfer(address newOwner) external override onlyOwner;
```

### applyOwnershipTransfer

*See [IPoolEscrow-applyOwnershipTransfer](/contracts/interfaces/IEthPoolEscrow.sol/interface.IEthPoolEscrow.md#applyownershiptransfer).*


```solidity
function applyOwnershipTransfer() external override;
```

### withdraw

*See [IPoolEscrow-withdraw](/contracts/interfaces/IEthPoolEscrow.sol/interface.IEthPoolEscrow.md#withdraw).*


```solidity
function withdraw(address payable payee, uint256 amount) external override onlyOwner;
```

### withdrawTokens

*See [IPoolEscrow-withdraw](/contracts/interfaces/IEthPoolEscrow.sol/interface.IEthPoolEscrow.md#withdraw).*


```solidity
function withdrawTokens(address token, address payee, uint256 amount) external override onlyOwner;
```

### receive

*Function for receiving withdrawals from ETH2 system contract.*


```solidity
receive() external payable;
```

