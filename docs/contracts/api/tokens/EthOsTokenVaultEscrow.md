---
title: EthOsTokenVaultEscrow
sidebar_position: 2
description: "Contract for initiating assets exits from the vault without burning osToken on Ethereum"
---

# EthOsTokenVaultEscrow

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/tokens/EthOsTokenVaultEscrow.sol)

**Inherits:** [ReentrancyGuard ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/ReentrancyGuard.sol), [OsTokenVaultEscrow →](./OsTokenVaultEscrow)

Used for initiating assets exits from the Vault without burning osToken on Ethereum.


## Events
### AssetsReceived
Event emitted on assets received by the escrow


```solidity
event AssetsReceived(address indexed sender, uint256 value);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address of the sender|
|`value`|`uint256`|The amount of assets received|


## Functions

### receive

Function for receiving assets from the vault


```solidity
receive() external payable;
```
