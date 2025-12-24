---
title: VaultBlocklist
sidebar_position: 2
description: "Abstract contract defining blocklisting functionality for vaults"
---

# VaultBlocklist

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/modules/VaultBlocklist.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [VaultAdmin →](./VaultAdmin), IVaultBlocklist

Defines the functionality for blocking addresses for the Vault.


## Events
### BlocklistUpdated
Event emitted on blocklist update


```solidity
event BlocklistUpdated(address indexed caller, address indexed account, bool isBlocked);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`account`|`address`|The address of the account updated|
|`isBlocked`|`bool`|Whether account is blocked or not|

### BlocklistManagerUpdated
Event emitted when blocklist manager address is updated


```solidity
event BlocklistManagerUpdated(address indexed caller, address indexed blocklistManager);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`blocklistManager`|`address`|The address of the new blocklist manager|


## Functions
### blocklistManager

Blocklist manager address


```solidity
function blocklistManager() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the blocklist manager|


### blockedAccounts

Checks whether account is blocked or not


```solidity
function blockedAccounts(address account) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The account to check|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` for the blocked account, `false` otherwise|


### updateBlocklist

Add or remove account from the blocklist. Can only be called by the blocklist manager.


```solidity
function updateBlocklist(address account, bool isBlocked) public virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The account to add or remove to the blocklist|
|`isBlocked`|`bool`|Whether account should be blocked or not|


### setBlocklistManager

Used to update the blocklist manager. Can only be called by the Vault admin.


```solidity
function setBlocklistManager(address _blocklistManager) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_blocklistManager`|`address`|The address of the new blocklist manager|
