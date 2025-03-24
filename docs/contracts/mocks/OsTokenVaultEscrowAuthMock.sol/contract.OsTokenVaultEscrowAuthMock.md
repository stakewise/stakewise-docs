# OsTokenVaultEscrowAuthMock
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/mocks/OsTokenVaultEscrowAuthMock.sol)

**Inherits:**
Ownable, [IOsTokenVaultEscrowAuth](/contracts/interfaces/IOsTokenVaultEscrowAuth.sol/interface.IOsTokenVaultEscrowAuth.md)

**Author:**
StakeWise

Mocks the OsTokenVaultEscrowAuth contract for testing purposes


## State Variables
### _canRegister

```solidity
mapping(address => bool) public _canRegister;
```


## Functions
### constructor


```solidity
constructor(address _owner) Ownable(_owner);
```

### setCanRegister


```solidity
function setCanRegister(address user, bool canRegister_) external onlyOwner;
```

### canRegister

Check if the caller can register the exit position


```solidity
function canRegister(address, address owner, uint256, uint256) external view override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`||
|`owner`|`address`|The address of the assets owner|
|`<none>`|`uint256`||
|`<none>`|`uint256`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the caller can register the exit position|


