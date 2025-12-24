---
title: VaultAdmin
sidebar_position: 1
description: "Abstract contract defining admin functionality for vaults"
---

# VaultAdmin

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/modules/VaultAdmin.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), IVaultAdmin

Defines the admin functionality for the Vault.


## Events
### MetadataUpdated
Event emitted on metadata ipfs hash update


```solidity
event MetadataUpdated(address indexed caller, string metadataIpfsHash);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`metadataIpfsHash`|`string`|The new metadata IPFS hash|

### AdminUpdated
Event emitted on admin update


```solidity
event AdminUpdated(address indexed caller, address indexed newAdmin);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`newAdmin`|`address`|The new admin address|


## Functions
### admin

The Vault admin


```solidity
function admin() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the Vault admin|


### setMetadata

Function for updating the metadata IPFS hash. Can only be called by Vault admin.


```solidity
function setMetadata(string calldata metadataIpfsHash) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`metadataIpfsHash`|`string`|The new metadata IPFS hash|


### setAdmin

Function for updating the admin address. Can only be called by Vault current admin.


```solidity
function setAdmin(address newAdmin) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newAdmin`|`address`|The new admin address|
