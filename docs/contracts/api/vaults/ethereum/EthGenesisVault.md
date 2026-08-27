---
title: EthGenesisVault
sidebar_position: 5
description: "Genesis vault for Ethereum staking migrated from StakeWise Legacy"
---

# EthGenesisVault

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/ethereum/EthGenesisVault.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [EthVault](./EthVault), IEthGenesisVault

Defines the Genesis Vault for Ethereum staking migrated from StakeWise Legacy


## State Variables
### _version

```solidity
uint8 private constant _version = 5
```


### _poolEscrow
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
IEthPoolEscrow private immutable _poolEscrow
```


### _rewardEthToken
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
IRewardEthToken private immutable _rewardEthToken
```


### __gap
This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps


```solidity
uint256[50] private __gap
```


## Functions
### constructor

Constructor

Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy’s storage.

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(EthVaultConstructorArgs memory args, address poolEscrow, address rewardEthToken) EthVault(args);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`args`|`EthVaultConstructorArgs`|The arguments for initializing the EthVault contract|
|`poolEscrow`|`address`|The address of the pool escrow contract|
|`rewardEthToken`|`address`|The address of the reward ETH token contract|


### initialize

Initializes or upgrades the EthVault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata) external payable virtual override(IEthVault, EthVault) reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||


### vaultId

Vault Unique Identifier


```solidity
function vaultId() public pure virtual override(IVaultVersion, EthVault) returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The unique identifier of the Vault|


### version

Version


```solidity
function version() public pure virtual override(IVaultVersion, EthVault) returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|


### migrate

Function for migrating from StakeWise Legacy. Can be called only by RewardEthToken contract.


```solidity
function migrate(address receiver, uint256 assets) external override returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address of the receiver|
|`assets`|`uint256`|The amount of assets migrated|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares minted|


### receive

Function for depositing using fallback function


```solidity
receive() external payable virtual override;
```

### _calcMaxMintOsTokenShares

Internal function for calculating the maximum amount of osToken shares that can be minted
based on the current user balance


```solidity
function _calcMaxMintOsTokenShares(address user) private view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The address of the user|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The maximum amount of osToken shares that can be minted|


### _transferVaultAssets

Internal function for transferring assets from the Vault to the receiver


```solidity
function _transferVaultAssets(address receiver, uint256 assets)
    internal
    virtual
    override(VaultEnterExit, VaultEthStaking);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the assets|
|`assets`|`uint256`|The number of assets to transfer|


### _vaultAssets

Internal function for retrieving the total assets stored in the Vault.
NB! Assets can be forcibly sent to the vault, the returned value must be used with caution


```solidity
function _vaultAssets() internal view virtual override(VaultState, VaultEthStaking) returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of assets stored in the Vault|


### _registerValidators

Internal function for registering validators


```solidity
function _registerValidators(ValidatorUtils.ValidatorDeposit[] memory deposits)
    internal
    virtual
    override(VaultValidators, VaultEthStaking);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`deposits`|`ValidatorUtils.ValidatorDeposit[]`|The validators registration data|


### _pullWithdrawals

Pulls assets from pool escrow


```solidity
function _pullWithdrawals() private;
```
