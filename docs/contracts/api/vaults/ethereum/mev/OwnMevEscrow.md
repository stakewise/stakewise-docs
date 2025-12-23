---
title: OwnMevEscrow
sidebar_position: 1
description: "MEV escrow owned by individual vault"
---

# OwnMevEscrow

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/ethereum/mev/OwnMevEscrow.sol)

**Inherits:** IOwnMevEscrow

Accumulates received MEV. The escrow is owned by the Vault.


## Events
### MevReceived
Event emitted on received MEV


```solidity
event MevReceived(uint256 assets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of MEV assets received|

### Harvested
Event emitted on harvest


```solidity
event Harvested(uint256 assets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets withdrawn|


## Functions
### constructor

Constructor


```solidity
constructor(address _vault) ;
```

### vault

Vault address


```solidity
function vault() external view returns (address payable);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address payable`|The address of the vault that owns the escrow|


### harvest

Withdraws MEV accumulated in the escrow. Can be called only by the Vault.

:::custom-warning[Important]
Because control is transferred to the Vault, care must be
taken to not create reentrancy vulnerabilities. The Vault must follow the checks-effects-interactions pattern:
https://docs.soliditylang.org/en/v0.8.22/security-considerations.html#use-the-checks-effects-interactions-pattern
:::

```solidity
function harvest() external returns (uint256 assets);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets withdrawn|


### receive

Function for receiving MEV


```solidity
receive() external payable;
```
