---
title: VaultImmutables
sidebar_position: 7
description: "Abstract contract defining common immutable variables and check functions for vaults"
---

# VaultImmutables

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/modules/VaultImmutables.sol)

Defines the Vault common immutable variables and check functions.


## Functions
### constructor

Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy's storage.

:::custom-notes[Note]
oz-upgrades-unsafe-allow: constructor
:::


```solidity
constructor(address keeper, address vaultsRegistry) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`keeper`|`address`|The address of the Keeper contract|
|`vaultsRegistry`|`address`|The address of the VaultsRegistry contract|

