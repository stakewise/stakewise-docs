# IVaultWhitelist
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IVaultWhitelist.sol)

**Inherits:**
[IVaultAdmin](/contracts/interfaces/IVaultAdmin.sol/interface.IVaultAdmin.md)

**Author:**
StakeWise

Defines the interface for the VaultWhitelist contract


## Functions
### whitelister

Whitelister address


```solidity
function whitelister() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the whitelister|


### whitelistedAccounts

Checks whether account is whitelisted or not


```solidity
function whitelistedAccounts(address account) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The account to check|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` for the whitelisted account, `false` otherwise|


### updateWhitelist

Add or remove account from the whitelist. Can only be called by the whitelister.


```solidity
function updateWhitelist(address account, bool approved) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The account to add or remove from the whitelist|
|`approved`|`bool`|Whether account should be whitelisted or not|


### setWhitelister

Used to update the whitelister. Can only be called by the Vault admin.


```solidity
function setWhitelister(address _whitelister) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_whitelister`|`address`|The address of the new whitelister|


## Events
### WhitelistUpdated
Event emitted on whitelist update


```solidity
event WhitelistUpdated(address indexed caller, address indexed account, bool approved);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`account`|`address`|The address of the account updated|
|`approved`|`bool`|Whether account is approved or not|

### WhitelisterUpdated
Event emitted when whitelister address is updated


```solidity
event WhitelisterUpdated(address indexed caller, address indexed whitelister);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`whitelister`|`address`|The address of the new whitelister|

