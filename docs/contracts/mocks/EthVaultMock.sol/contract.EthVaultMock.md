# EthVaultMock
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/mocks/EthVaultMock.sol)

**Inherits:**
[EthVault](/contracts/vaults/ethereum/EthVault.sol/contract.EthVault.md)

**Author:**
StakeWise

Adds mocked functions to the EthVault contract


## State Variables
### _securityDeposit

```solidity
uint256 private constant _securityDeposit = 1e9;
```


## Functions
### constructor

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(IEthVault.EthVaultConstructorArgs memory args) EthVault(args);
```

### getGasCostOfGetExitQueueIndex


```solidity
function getGasCostOfGetExitQueueIndex(uint256 positionTicket) external view returns (uint256);
```

### _setTotalAssets


```solidity
function _setTotalAssets(uint128 value) external;
```

### _setTotalShares


```solidity
function _setTotalShares(uint128 value) external;
```

### resetSecurityDeposit


```solidity
function resetSecurityDeposit() external;
```

