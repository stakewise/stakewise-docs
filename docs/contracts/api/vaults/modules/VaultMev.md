---
title: VaultMev
sidebar_position: 8
description: "Abstract contract defining MEV escrow functionality for vaults"
---

# VaultMev

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/modules/VaultMev.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [VaultState →](./VaultState), IVaultMev

Defines the Vaults' MEV functionality


## Functions
### constructor

Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy's storage.

:::custom-notes[Note]
oz-upgrades-unsafe-allow: constructor
:::


```solidity
constructor(address sharedMevEscrow) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sharedMevEscrow`|`address`|The address of the shared MEV escrow|


### mevEscrow

The contract that accumulates MEV rewards


```solidity
function mevEscrow() public view override returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The MEV escrow contract address|

