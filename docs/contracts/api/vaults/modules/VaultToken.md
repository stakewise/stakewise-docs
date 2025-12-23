---
title: VaultToken
sidebar_position: 12
description: "Abstract contract defining ERC20 token functionality for vaults"
---

# VaultToken

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/modules/VaultToken.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [ERC20Upgradeable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/token/ERC20/ERC20Upgradeable.sol), [VaultState →](./VaultState), IVaultToken

Defines the token functionality for the Vault


## Functions
### totalSupply

Returns the amount of tokens in existence.


```solidity
function totalSupply() external view override returns (uint256);
```

### balanceOf

Returns the amount of tokens owned by `account`.


```solidity
function balanceOf(address account) external view returns (uint256);
```

