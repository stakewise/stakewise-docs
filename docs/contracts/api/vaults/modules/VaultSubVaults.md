---
title: VaultSubVaults
sidebar_position: 11
description: "Abstract contract defining sub-vaults management functionality for meta vaults"
---

# VaultSubVaults

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/modules/VaultSubVaults.sol)

**Inherits:** [VaultImmutables →](./VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [ReentrancyGuardUpgradeable ↗](https://github.com/Badger-Finance/badger-system/blob/master/deps/@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol), [VaultAdmin →](./VaultAdmin), [VaultState →](./VaultState), IVaultSubVaults

Defines the functionality for managing the Vault sub-vaults

## Structs
### SubVaultState
Struct for sub vault state


```solidity
struct SubVaultState {
    uint128 stakedShares;
    uint128 queuedShares;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`stakedShares`|`uint128`|The number of shares staked in the sub vault|
|`queuedShares`|`uint128`|The number of shares queued for exit in the sub vault|

### SubVaultExitRequest
Struct for submitting sub vault exit request

```solidity
struct SubVaultExitRequest {
    uint256 exitQueueIndex;
    address vault;
    uint64 timestamp;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`exitQueueIndex`|`uint256`|The index of the exit queue|
|`vault`|`address`|The address of the vault|
|`timestamp`|`uint64`|The timestamp of the exit request|

## Events
### RewardsNonceUpdated
Emitted when the rewards nonce is updated

```solidity
event RewardsNonceUpdated(uint256 rewardsNonce);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`rewardsNonce`|`uint256`|The new rewards nonce|

### SubVaultsHarvested
Emitted when the sub vaults are harvested

```solidity
event SubVaultsHarvested(int256 totalAssetsDelta);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`totalAssetsDelta`|`int256`|The change in total assets after the harvest|

### SubVaultAdded
Emitted when the new sub-vault is added

```solidity
event SubVaultAdded(address indexed caller, address indexed vault);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the caller|
|`vault`|`address`|The address of the sub-vault|

### SubVaultEjecting
Emitted when the sub-vault is ejecting


```solidity
event SubVaultEjecting(address indexed caller, address indexed vault);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the caller|
|`vault`|`address`|The address of the sub-vault|

### SubVaultEjected
Emitted when the sub-vault is ejected


```solidity
event SubVaultEjected(address indexed caller, address indexed vault);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the caller|
|`vault`|`address`|The address of the sub-vault|

### SubVaultsCuratorUpdated
Emitted when the sub-vaults curator is updated


```solidity
event SubVaultsCuratorUpdated(address indexed caller, address indexed curator);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the caller|
|`curator`|`address`|The address of the new sub-vaults curator|

## Functions
### constructor

Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy's storage.

:::custom-notes[Note]
oz-upgrades-unsafe-allow: constructor
:::


```solidity
constructor(address curatorsRegistry) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`curatorsRegistry`|`address`|The address of the CuratorsRegistry contract|


### subVaultsCurator

Sub-vaults curator contract


```solidity
function subVaultsCurator() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the Sub-vaults curator contract|


### ejectingSubVault

Ejecting sub-vault


```solidity
function ejectingSubVault() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the ejecting sub-vault|


### subVaultsRewardsNonce

Function to get the rewards nonce of the sub-vaults


```solidity
function subVaultsRewardsNonce() external view returns (uint128);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|The rewards nonce|


### subVaultsStates

Function to get the state of a sub-vault


```solidity
function subVaultsStates(address vault) external view override returns (SubVaultState memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`SubVaultState`|The state of the sub-vault|


### getSubVaults

Function to get the list sub-vaults


```solidity
function getSubVaults() public view override returns (address[] memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address[]`|An array of addresses of the sub-vaults|


### setSubVaultsCurator

Function to update the the sub-vaults curator. Can only be called by the admin.


```solidity
function setSubVaultsCurator(address curator) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`curator`|`address`|The address of the new sub-vaults curator|


### addSubVault

Function to add a new sub-vault. Can only be called by the admin.


```solidity
function addSubVault(address vault) public virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault to add|


### ejectSubVault

Function to remove a sub-vault. Can only be called by the admin.
All the sub-vault shares will be added to the exit queue.


```solidity
function ejectSubVault(address vault) public virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault to remove|


### isStateUpdateRequired

Check whether state update is required


```solidity
function isStateUpdateRequired() public view virtual override returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if state update is required, `false` otherwise|


### canUpdateState

Checks whether the meta vault can be updated


```solidity
function canUpdateState() external view override returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if the meta vault can be updated, `false` otherwise|


### isCollateralized

Checks whether the vault is collateralized


```solidity
function isCollateralized() external view override returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if the vault is collateralized, `false` otherwise|


### depositToSubVaults

Deposit available assets to the sub vaults


```solidity
function depositToSubVaults() external override nonReentrant;
```

### claimSubVaultsExitedAssets

Claim the exited assets from the sub vaults


```solidity
function claimSubVaultsExitedAssets(SubVaultExitRequest[] calldata exitRequests) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`exitRequests`|`SubVaultExitRequest[]`|The array of exit requests to claim|


### updateState

Updates the total amount of assets in the Vault and its exit queue


```solidity
function updateState(IKeeperRewards.HarvestParams calldata) public virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`IKeeperRewards.HarvestParams`||
