---
title: VaultVersion
sidebar_position: 14
description: "Abstract contract defining versioning and upgrade functionality for vaults"
---

# VaultVersion

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/modules/VaultVersion.sol)

**Inherits:** [VaultImmutables →](./VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [UUPSUpgradeable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/UUPSUpgradeable.sol), [VaultAdmin →](./VaultAdmin), IVaultVersion

Defines the versioning functionality for the Vault.


## Functions
### implementation

Implementation


```solidity
function implementation() external view override returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the Vault implementation contract|


### upgradeToAndCall

Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call
encoded in `data`.

:::custom-notes[Note]
oz-upgrades-unsafe-allow-reachable: delegatecall
:::


```solidity
function upgradeToAndCall(address newImplementation, bytes memory data) public payable override onlyProxy;
```

### vaultId

Vault Unique Identifier


```solidity
function vaultId() public pure virtual override returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The unique identifier of the Vault|


### version

Version


```solidity
function version() public pure virtual override returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|
