---
title: EthOsTokenVaultEscrow
sidebar_position: 2
description: "Contract for initiating assets exits from the vault without burning osToken on Ethereum"
---

# EthOsTokenVaultEscrow

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/tokens/EthOsTokenVaultEscrow.sol)

**Inherits:** [ReentrancyGuard ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/ReentrancyGuard.sol), [OsTokenVaultEscrow](./OsTokenVaultEscrow)

Used for initiating assets exits from the vault without burning osToken on Ethereum


## Functions
### constructor

Constructor


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

### _transferAssets

Internal function for transferring assets from the Vault to the receiver


```solidity
function _transferAssets(address receiver, uint256 assets) internal override nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the assets|
|`assets`|`uint256`|The number of assets to transfer|


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
