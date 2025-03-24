# EthPrivVaultV4Mock
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/mocks/EthPrivVaultV4Mock.sol)

**Inherits:**
[EthPrivVault](/contracts/vaults/ethereum/EthPrivVault.sol/contract.EthPrivVault.md)


## State Variables
### newVar

```solidity
uint128 public newVar;
```


## Functions
### constructor

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(IEthVault.EthVaultConstructorArgs memory args) EthPrivVault(args);
```

### initialize


```solidity
function initialize(bytes calldata data) external payable virtual override reinitializer(4);
```

### somethingNew


```solidity
function somethingNew() external pure returns (bool);
```

### version


```solidity
function version() public pure virtual override returns (uint8);
```

