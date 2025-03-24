# IVaultBlocklist
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IVaultBlocklist.sol)

**Inherits:**
[IVaultAdmin](/contracts/interfaces/IVaultAdmin.sol/interface.IVaultAdmin.md)

**Author:**
StakeWise

Defines the interface for the VaultBlocklist contract


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
function updateBlocklist(address account, bool isBlocked) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The account to add or remove to the blocklist|
|`isBlocked`|`bool`|Whether account should be blocked or not|


### setBlocklistManager

Used to update the blocklist manager. Can only be called by the Vault admin.


```solidity
function setBlocklistManager(address _blocklistManager) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_blocklistManager`|`address`|The address of the new blocklist manager|


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

