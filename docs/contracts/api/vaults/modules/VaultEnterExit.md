---
title: VaultEnterExit
sidebar_position: 3
description: "Abstract contract defining enter and exit functionality for vaults"
---

# VaultEnterExit

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/modules/VaultEnterExit.sol)

**Inherits:** [VaultImmutables →](./VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [VaultState →](./VaultState), IVaultEnterExit

Defines the functionality for entering and exiting the Vault.


## Events
### Deposited
Event emitted on deposit


```solidity
event Deposited(address indexed caller, address indexed receiver, uint256 assets, uint256 shares, address referrer);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address that called the deposit function|
|`receiver`|`address`|The address that received the shares|
|`assets`|`uint256`|The number of assets deposited by the caller|
|`shares`|`uint256`|The number of shares received|
|`referrer`|`address`|The address of the referrer|

### Redeemed
Event emitted on redeem


```solidity
event Redeemed(address indexed owner, address indexed receiver, uint256 assets, uint256 shares);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address that owns the shares|
|`receiver`|`address`|The address that received withdrawn assets|
|`assets`|`uint256`|The total number of withdrawn assets|
|`shares`|`uint256`|The total number of withdrawn shares|

### ExitQueueEntered
Event emitted on shares added to the exit queue


```solidity
event ExitQueueEntered(address indexed owner, address indexed receiver, uint256 positionTicket, uint256 shares);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address that owns the shares|
|`receiver`|`address`|The address that will receive withdrawn assets|
|`positionTicket`|`uint256`|The exit queue ticket that was assigned to the position|
|`shares`|`uint256`|The number of shares queued for exit|

### ExitedAssetsClaimed
Event emitted on claim of the exited assets


```solidity
event ExitedAssetsClaimed(
    address indexed receiver, uint256 prevPositionTicket, uint256 newPositionTicket, uint256 withdrawnAssets
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that has received withdrawn assets|
|`prevPositionTicket`|`uint256`|The exit queue ticket received after the enterExitQueue call|
|`newPositionTicket`|`uint256`|The new exit queue ticket in case not all the shares were withdrawn|
|`withdrawnAssets`|`uint256`|The total number of assets withdrawn|


## Functions

### getExitQueueIndex

Get the exit queue index to claim exited assets from


```solidity
function getExitQueueIndex(uint256 positionTicket) external view override returns (int256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The exit queue position ticket to get the index for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`int256`|The exit queue index that should be used to claim exited assets. Returns -1 in case such index does not exist.|


### enterExitQueue

Locks shares to the exit queue. The shares continue earning rewards until they will be burned by the Vault.


```solidity
function enterExitQueue(uint256 shares, address receiver) public virtual override returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares to lock|
|`receiver`|`address`|The address that will receive assets upon withdrawal|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket of the exit queue. Returns uint256 max if no ticket created.|


### calculateExitedAssets

Calculates the number of shares and assets that can be claimed from the exit queue.


```solidity
function calculateExitedAssets(address receiver, uint256 positionTicket, uint256 timestamp, uint256 exitQueueIndex)
    public
    view
    override
    returns (uint256 leftTickets, uint256 exitedTickets, uint256 exitedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive assets upon withdrawal|
|`positionTicket`|`uint256`|The exit queue ticket received after the enterExitQueue call|
|`timestamp`|`uint256`|The timestamp when the shares entered the exit queue|
|`exitQueueIndex`|`uint256`|The exit queue index at which the shares were burned|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`leftTickets`|`uint256`|The number of tickets left in the queue|
|`exitedTickets`|`uint256`|The number of tickets that have already exited|
|`exitedAssets`|`uint256`|The number of assets that can be claimed|


### claimExitedAssets

Claims assets that were withdrawn by the Vault. It can be called only after the enterExitQueue call by the receiver.


```solidity
function claimExitedAssets(uint256 positionTicket, uint256 timestamp, uint256 exitQueueIndex) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The exit queue ticket received after the enterExitQueue call|
|`timestamp`|`uint256`|The timestamp when the assets entered the exit queue|
|`exitQueueIndex`|`uint256`|The exit queue index at which the shares were burned|


### rescueAssets

Rescue any assets that are not backing shares when the vault is not collateralized.
Can be called only by the admin when the vault is not collateralized.


```solidity
function rescueAssets() external override;
```
