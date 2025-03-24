# EthVaultV6Mock
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/mocks/EthVaultV6Mock.sol)

**Inherits:**
[EthVaultV5Mock](/contracts/mocks/EthVaultV5Mock.sol/contract.EthVaultV5Mock.md)


## Functions
### constructor

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(IEthVault.EthVaultConstructorArgs memory args) EthVaultV5Mock(args);
```

### initialize


```solidity
function initialize(bytes calldata data) external payable override reinitializer(6);
```

### version


```solidity
function version() public pure virtual override returns (uint8);
```

