# VaultBlocklist
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/modules/VaultBlocklist.sol)

**Inherits:**
Initializable, [VaultAdmin](/contracts/vaults/modules/VaultAdmin.sol/abstract.VaultAdmin.md), [IVaultBlocklist](/contracts/interfaces/IVaultBlocklist.sol/interface.IVaultBlocklist.md)

**Author:**
StakeWise

Defines the functionality for blocking addresses for the Vault


## State Variables
### blocklistManager
Blocklist manager address


```solidity
address public override blocklistManager;
```


### blockedAccounts
Checks whether account is blocked or not


```solidity
mapping(address => bool) public override blockedAccounts;
```


### __gap
*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


```solidity
uint256[50] private __gap;
```


## Functions
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


### _checkBlocklist

Internal function for checking blocklist


```solidity
function _checkBlocklist(address account) internal view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to check|


### _setBlocklistManager

*Internal function for updating the blocklist manager externally or from the initializer*


```solidity
function _setBlocklistManager(address _blocklistManager) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_blocklistManager`|`address`|The address of the new blocklist manager|


### __VaultBlocklist_init

*Initializes the VaultBlocklist contract*


```solidity
function __VaultBlocklist_init(address _blocklistManager) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_blocklistManager`|`address`|The address of the blocklist manager|


