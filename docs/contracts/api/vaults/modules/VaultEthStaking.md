---
title: VaultEthStaking
sidebar_position: 4
description: "Abstract contract defining Ethereum staking functionality for vaults"
---

# VaultEthStaking

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/modules/VaultEthStaking.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [VaultState →](./VaultState), [VaultValidators →](./VaultValidators), [VaultEnterExit →](./VaultEnterExit), [VaultMev →](./VaultMev), IVaultEthStaking

Defines the Ethereum staking functionality for the Vault


## Functions
### deposit

Deposit ETH to the Vault


```solidity
function deposit(address receiver, address referrer) public payable virtual override returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive Vault's shares|
|`referrer`|`address`|The address of the referrer. Set to zero address if not used.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares minted|


### updateStateAndDeposit

Updates Vault state and deposits ETH to the Vault


```solidity
function updateStateAndDeposit(
    address receiver,
    address referrer,
    IKeeperRewards.HarvestParams calldata harvestParams
) public payable virtual override returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive Vault's shares|
|`referrer`|`address`|The address of the referrer. Set to zero address if not used.|
|`harvestParams`|`IKeeperRewards.HarvestParams`|The parameters for harvesting Keeper rewards|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares minted|


### receive

Function for depositing using fallback function


```solidity
receive() external payable virtual;
```

### receiveFromMevEscrow

Used by MEV escrow to transfer ETH.


```solidity
function receiveFromMevEscrow() external payable override;
```

### donateAssets

Donate assets to the Vault. Must transfer ETH together with the call.


```solidity
function donateAssets() external payable override;
```

