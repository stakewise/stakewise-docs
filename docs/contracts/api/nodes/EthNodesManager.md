---
title: EthNodesManager
sidebar_position: 1
description: "Implements Ethereum specific functionality for the NodesManager contract"
---

# EthNodesManager

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/nodes/EthNodesManager.sol)

**Inherits:** [NodesManager](./NodesManager), IEthNodesManager

Implements Ethereum specific functionality for the NodesManager contract


## Functions
### constructor

Constructor

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(address _vault, address _keeper) NodesManager(_vault, _keeper);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_vault`|`address`||
|`_keeper`|`address`|The address of the Keeper contract|


### initialize

Initializes the EthNodesManager contract


```solidity
function initialize(address owner, uint256 _minDepositAssets, uint16 _minBalancePercent, uint256 _stateUpdateDelay)
    external
    initializer;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the contract owner|
|`_minDepositAssets`|`uint256`|The minimum deposit assets|
|`_minBalancePercent`|`uint16`|The minimum balance percent in BPS|
|`_stateUpdateDelay`|`uint256`|The delay in seconds between state updates|


### deposit

Deposits ETH as bond assets


```solidity
function deposit() external payable override returns (uint256 shares);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The vault shares received for the deposit|


### _depositToVault

Deposits assets to the vault and returns the shares received.
Must be implemented by network-specific contracts.


```solidity
function _depositToVault(uint256 assets) internal override returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to deposit|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The vault shares received|


### _transferAssets

Transfers assets to the receiver.
Must be implemented by network-specific contracts.


```solidity
function _transferAssets(address receiver, uint256 assets) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address to transfer assets to|
|`assets`|`uint256`|The amount of assets to transfer|


### _donateAssets

Donates assets back to the vault.
Must be implemented by network-specific contracts.


```solidity
function _donateAssets(uint256 assets) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to donate|


### receive


```solidity
receive() external payable;
```
