# UnknownVaultMock
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/mocks/UnknownVaultMock.sol)


## State Variables
### _osTokenVaultController

```solidity
IOsTokenVaultController private immutable _osTokenVaultController;
```


### _implementation

```solidity
address private immutable _implementation;
```


## Functions
### constructor


```solidity
constructor(IOsTokenVaultController osTokenVaultController, address implementation_);
```

### mintOsToken


```solidity
function mintOsToken(address account, uint256 amount) external;
```

### burnOsToken


```solidity
function burnOsToken(uint256 amount) external;
```

### implementation


```solidity
function implementation() external view returns (address);
```

