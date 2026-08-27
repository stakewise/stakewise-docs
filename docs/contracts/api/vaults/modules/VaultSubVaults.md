---
title: VaultSubVaults
sidebar_position: 11
description: "Abstract contract defining sub-vaults management functionality for meta vaults"
---

# VaultSubVaults

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/modules/VaultSubVaults.sol)

**Inherits:** [VaultImmutables](./VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [VaultState](./VaultState), IVaultSubVaults

Defines the functionality for managing the Vault sub-vaults


## State Variables
### _subVaultsRegistryFactory
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address private immutable _subVaultsRegistryFactory
```


### __deprecated__subVaultsCurator
Deprecated: moved to SubVaultsRegistry


```solidity
address private __deprecated__subVaultsCurator
```


### __deprecated__ejectingSubVault
Deprecated: moved to SubVaultsRegistry


```solidity
address private __deprecated__ejectingSubVault
```


### __deprecated__subVaults
Deprecated: moved to SubVaultsRegistry


```solidity
EnumerableSet.AddressSet private __deprecated__subVaults
```


### __deprecated__subVaultsExits
Deprecated: moved to SubVaultsRegistry


```solidity
mapping(address vault => DoubleEndedQueue.Bytes32Deque) private __deprecated__subVaultsExits
```


### __deprecated__subVaultsStates
Deprecated: moved to SubVaultsRegistry


```solidity
mapping(address vault => ISubVaultsRegistry.SubVaultState state) private __deprecated__subVaultsStates
```


### __deprecated__subVaultsRewardsNonce
Deprecated: moved to SubVaultsRegistry


```solidity
uint128 private __deprecated__subVaultsRewardsNonce
```


### __deprecated__subVaultsTotalAssets
Deprecated: moved to SubVaultsRegistry


```solidity
uint128 private __deprecated__subVaultsTotalAssets
```


### __deprecated__totalProcessedExitQueueTickets
Deprecated: moved to SubVaultsRegistry


```solidity
uint256 private __deprecated__totalProcessedExitQueueTickets
```


### __deprecated__ejectingSubVaultShares
Deprecated: moved to SubVaultsRegistry


```solidity
uint256 private __deprecated__ejectingSubVaultShares
```


### subVaultsRegistry
Returns the address of the SubVaultsRegistry contract


```solidity
address public override subVaultsRegistry
```


### __gap
This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps


```solidity
uint256[49] private __gap
```


## Functions
### constructor

Constructor

Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy’s storage.

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(address subVaultsRegistryFactory) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`subVaultsRegistryFactory`|`address`|The address of the factory used to deploy SubVaultsRegistry contract|


### depositToSubVault

Function to deposit assets to a sub vault. Can only be called by SubVaultsRegistry contract.


```solidity
function depositToSubVault(address vault, uint256 assets) external override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault|
|`assets`|`uint256`|The amount of assets to deposit|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|shares The amount of vault shares received|


### enterSubVaultExitQueue

Function to enter sub-vault exit queue. Can only be called by SubVaultsRegistry contract.


```solidity
function enterSubVaultExitQueue(address vault, uint256 shares) external override returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault|
|`shares`|`uint256`|The amount of shares to exit|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket in the exit queue|


### claimSubVaultExitedAssets

Function to claim exited assets from a sub-vault. Can only be called by SubVaultsRegistry contract.


```solidity
function claimSubVaultExitedAssets(address vault, uint256 positionTicket, uint256 timestamp, uint256 exitQueueIndex)
    external
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault|
|`positionTicket`|`uint256`|The position ticket in the exit queue|
|`timestamp`|`uint256`|The timestamp of the exit request|
|`exitQueueIndex`|`uint256`|The index of the exit queue|


### mintSubVaultOsToken

Function to mint osToken for a sub-vault. Can only be called by SubVaultsRegistry contract.


```solidity
function mintSubVaultOsToken(address vault, address receiver, uint256 osTokenShares) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault|
|`receiver`|`address`|The address that will receive the minted osToken shares|
|`osTokenShares`|`uint256`|The amount of osToken shares to mint|


### redeemSubVaultOsToken

Function to redeem osToken from a sub-vault. Can only be called by SubVaultsRegistry contract.


```solidity
function redeemSubVaultOsToken(address vault, address redeemer, uint256 osTokenShares)
    external
    override
    returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault|
|`redeemer`|`address`|The address of the OsToken redeemer|
|`osTokenShares`|`uint256`|The amount of osToken shares to redeem|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets redeemed|


### isStateUpdateRequired

Check whether state update is required


```solidity
function isStateUpdateRequired() public view virtual override(IVaultState, VaultState) returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if state update is required, `false` otherwise|


### updateState

Updates the total amount of assets in the Vault and its exit queue


```solidity
function updateState(IKeeperRewards.HarvestParams calldata) public virtual override(IVaultState, VaultState);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`IKeeperRewards.HarvestParams`||


### _harvestAssets

Internal function for harvesting Vaults' new assets


```solidity
function _harvestAssets(IKeeperRewards.HarvestParams calldata)
    internal
    pure
    override
    returns (int256 totalAssetsDelta, bool harvested);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`totalAssetsDelta`|`int256`|The total assets delta after harvest|
|`harvested`|`bool`|`true` when the rewards were harvested, `false` otherwise|


### _checkHarvested

Internal method for checking whether the vault is harvested


```solidity
function _checkHarvested() internal view virtual override;
```

### _isCollateralized

Returns whether the vault is collateralized


```solidity
function _isCollateralized() internal view virtual override returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the vault is collateralized|


### _depositToVault

Internal function to deposit assets to the sub-vault


```solidity
function _depositToVault(address vault, uint256 assets) internal virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`assets`|`uint256`|The amount of assets to deposit|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of vault shares received|


### _checkSubVaultsRegistry

Internal function to check if the caller is the SubVaultsRegistry


```solidity
function _checkSubVaultsRegistry() private view;
```

### __VaultSubVaults_init

Initializes the VaultSubVaults contract


```solidity
function __VaultSubVaults_init(address curator) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`curator`|`address`|The address of initial sub-vaults curator|


### __VaultSubVaults_upgrade

Upgrades the VaultSubVaults contract by upgrading the SubVaultsRegistry proxy to the latest implementation


```solidity
function __VaultSubVaults_upgrade() internal onlyInitializing;
```
