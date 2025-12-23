---
title: EthMetaVaultFactory
sidebar_position: 3
description: "Factory for deploying Ethereum meta vaults"
---

# EthMetaVaultFactory

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/ethereum/custom/EthMetaVaultFactory.sol)

**Inherits:** [Ownable2Step ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable2Step.sol), IEthMetaVaultFactory

Factory for deploying Ethereum meta Vaults


## Events
### MetaVaultCreated
Event emitted on a MetaVault creation


```solidity
event MetaVaultCreated(address indexed caller, address indexed admin, address indexed vault, bytes params);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the factory caller|
|`admin`|`address`|The address of the Vault admin|
|`vault`|`address`|The address of the created Vault|
|`params`|`bytes`|The encoded parameters for initializing the Vault contract|


## Functions
### constructor

Constructor


```solidity
constructor(address initialOwner, address _implementation, IVaultsRegistry vaultsRegistry) Ownable(initialOwner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`initialOwner`|`address`|The address of the contract owner|
|`_implementation`|`address`|The implementation address of Vault|
|`vaultsRegistry`|`IVaultsRegistry`|The address of the VaultsRegistry contract|


### implementation

The address of the Vault implementation contract used for proxy creation


```solidity
function implementation() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the Vault implementation contract|


### vaultAdmin

The address of the Vault admin used for Vault creation


```solidity
function vaultAdmin() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the Vault admin|


### createVault

Create Vault. Must transfer security deposit together with a call.


```solidity
function createVault(address admin, bytes calldata params)
    external
    payable
    override
    onlyOwner
    returns (address vault);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`admin`|`address`|The address of the Vault admin|
|`params`|`bytes`|The encoded parameters for initializing the Vault contract|
