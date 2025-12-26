---
title: SharedMevEscrow
sidebar_position: 2
description: "Shared MEV escrow for multiple vaults"
---

# SharedMevEscrow

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/ethereum/mev/SharedMevEscrow.sol)

**Inherits:** ISharedMevEscrow

Accumulates received MEV. The rewards are shared by multiple Vaults.


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
event Harvested(address indexed caller, uint256 assets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The function caller|
|`assets`|`uint256`|The amount of assets withdrawn|


## Functions

### harvest

Withdraws MEV accumulated in the escrow. Can be called only by the Vault.


:::custom-warning[Important]
IMPORTANT: because control is transferred to the Vault, care must be
taken to not create reentrancy vulnerabilities. The Vault must follow the checks-effects-interactions pattern:
https://docs.soliditylang.org/en/v0.8.22/security-considerations.html#use-the-checks-effects-interactions-pattern
:::

```solidity
function harvest(uint256 assets) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to withdraw|


### receive

Function for receiving MEV


```solidity
receive() external payable;
```
