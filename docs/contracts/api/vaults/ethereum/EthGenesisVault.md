---
title: EthGenesisVault
sidebar_position: 4
description: "Genesis vault for Ethereum staking migrated from StakeWise Legacy"
---

# EthGenesisVault

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/ethereum/EthGenesisVault.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [EthVault →](./EthVault), IEthGenesisVault

Defines the Genesis Vault for Ethereum staking migrated from StakeWise Legacy

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
Event emitted on EthGenesisVault creation (deprecated)


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

Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy's storage.

:::custom-notes[Note]
oz-upgrades-unsafe-allow: constructor
:::


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
