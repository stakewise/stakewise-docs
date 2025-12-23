---
title: EthOsTokenVaultEscrow
sidebar_position: 2
description: "Contract for initiating assets exits from the vault without burning osToken on Ethereum"
---

# EthOsTokenVaultEscrow

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/tokens/EthOsTokenVaultEscrow.sol)

**Inherits:** [ReentrancyGuard ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/ReentrancyGuard.sol), [OsTokenVaultEscrow →](./OsTokenVaultEscrow)

Used for initiating assets exits from the vault without burning osToken on Ethereum


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
### constructor


```solidity
constructor(
    address osTokenVaultController,
    address osTokenConfig,
    address initialOwner,
    address _authenticator,
    uint64 _liqThresholdPercent,
    uint256 _liqBonusPercent
)
    ReentrancyGuard()
    OsTokenVaultEscrow(
        osTokenVaultController, osTokenConfig, initialOwner, _authenticator, _liqThresholdPercent, _liqBonusPercent
    );
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenVaultController`|`address`|The address of the OsTokenVaultController contract|
|`osTokenConfig`|`address`|The address of the OsTokenConfig contract|
|`initialOwner`|`address`|The address of the contract owner|
|`_authenticator`|`address`|The address of the OsTokenVaultEscrowAuth contract|
|`_liqThresholdPercent`|`uint64`|The liquidation threshold percent|
|`_liqBonusPercent`|`uint256`|The liquidation bonus percent|


### receive

Function for receiving assets from the vault


```solidity
receive() external payable;
```
