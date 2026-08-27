---
title: VaultEthStaking
sidebar_position: 4
description: "Abstract contract defining Ethereum staking functionality for vaults"
---

# VaultEthStaking

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/modules/VaultEthStaking.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [VaultState](./VaultState), [VaultValidators](./VaultValidators), [VaultEnterExit](./VaultEnterExit), [VaultMev](./VaultMev), IVaultEthStaking

Defines the Ethereum staking functionality for the Vault


## State Variables
### _securityDeposit

```solidity
uint256 private constant _securityDeposit = 1e9
```


### __gap
This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps


```solidity
uint256[50] private __gap
```


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

### _registerValidators

Internal function for registering validators


```solidity
function _registerValidators(ValidatorUtils.ValidatorDeposit[] memory deposits) internal virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`deposits`|`ValidatorUtils.ValidatorDeposit[]`|The validators registration data|


### _vaultAssets

Internal function for retrieving the total assets stored in the Vault.
NB! Assets can be forcibly sent to the vault, the returned value must be used with caution


```solidity
function _vaultAssets() internal view virtual override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of assets stored in the Vault|


### _transferVaultAssets

Internal function for transferring assets from the Vault to the receiver


```solidity
function _transferVaultAssets(address receiver, uint256 assets) internal virtual override nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the assets|
|`assets`|`uint256`|The number of assets to transfer|


### __VaultEthStaking_init

Initializes the VaultEthStaking contract


```solidity
function __VaultEthStaking_init() internal onlyInitializing;
```
