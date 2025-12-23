---
title: GnoOsTokenVaultEscrow
sidebar_position: 4
description: "Contract for initiating assets exits from the vault without burning osToken on Gnosis"
---

# GnoOsTokenVaultEscrow

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/tokens/GnoOsTokenVaultEscrow.sol)

**Inherits:** [OsTokenVaultEscrow →](./OsTokenVaultEscrow)

Used for initiating assets exits from the vault without burning osToken on Gnosis


## Functions
### constructor


```solidity
constructor(
    address osTokenVaultController,
    address osTokenConfig,
    address initialOwner,
    address _authenticator,
    uint64 _liqThresholdPercent,
    uint256 _liqBonusPercent,
    address gnoToken
)
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
|`gnoToken`|`address`|The address of the GNO token|
