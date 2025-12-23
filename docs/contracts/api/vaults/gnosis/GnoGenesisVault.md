---
title: GnoGenesisVault
sidebar_position: 4
description: "Genesis vault for Gnosis staking migrated from StakeWise Legacy"
---

# GnoGenesisVault

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/gnosis/GnoGenesisVault.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [GnoVault →](./GnoVault), IGnoGenesisVault

Defines the Genesis Vault for Gnosis staking migrated from StakeWise Legacy


## Events
### Migrated
Event emitted on migration from StakeWise Legacy


```solidity
event Migrated(address receiver, uint256 assets, uint256 shares);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address of the shares receiver|
|`assets`|`uint256`|The amount of assets migrated|
|`shares`|`uint256`|The amount of shares migrated|

### GenesisVaultCreated
Event emitted on GnoGenesisVault creation (deprecated)


```solidity
event GenesisVaultCreated(address admin, uint256 capacity, uint16 feePercent, string metadataIpfsHash);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`admin`|`address`|The address of the Vault admin|
|`capacity`|`uint256`|The capacity of the Vault|
|`feePercent`|`uint16`|The fee percent of the Vault|
|`metadataIpfsHash`|`string`|The IPFS hash of the Vault metadata|


## Functions
### constructor

:::custom-notes[Note]
oz-upgrades-unsafe-allow: constructor
:::


```solidity
constructor(GnoVaultConstructorArgs memory args, address poolEscrow, address rewardGnoToken) GnoVault(args);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`args`|`GnoVaultConstructorArgs`|The arguments for initializing the GnoVault contract|
|`poolEscrow`|`address`|The address of the pool escrow from StakeWise Legacy|
|`rewardGnoToken`|`address`|The address of the rGNO token from StakeWise Legacy|


### initialize

Initializes or upgrades the GnoVault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata) external virtual override(IGnoVault, GnoVault) reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||


### vaultId

Vault Unique Identifier


```solidity
function vaultId() public pure virtual override(IVaultVersion, GnoVault) returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The unique identifier of the Vault|


### version

Version


```solidity
function version() public pure virtual override(IVaultVersion, GnoVault) returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|


### migrate

Function for migrating from StakeWise Legacy. Can be called only by RewardGnoToken contract.


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
