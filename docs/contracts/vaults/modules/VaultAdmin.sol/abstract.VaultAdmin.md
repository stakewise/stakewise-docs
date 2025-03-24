# VaultAdmin
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/modules/VaultAdmin.sol)

**Inherits:**
Initializable, [IVaultAdmin](/contracts/interfaces/IVaultAdmin.sol/interface.IVaultAdmin.md)

**Author:**
StakeWise

Defines the admin functionality for the Vault


## State Variables
### admin
The Vault admin


```solidity
address public override admin;
```


### __gap
*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


```solidity
uint256[50] private __gap;
```


## Functions
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


### _checkAdmin

*Internal method for checking whether the caller is admin*


```solidity
function _checkAdmin() internal view;
```

### _setAdmin

*Internal method for updating the admin*


```solidity
function _setAdmin(address newAdmin) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newAdmin`|`address`|The address of the new admin|


### __VaultAdmin_init

*Initializes the VaultAdmin contract*


```solidity
function __VaultAdmin_init(address _admin, string memory metadataIpfsHash) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_admin`|`address`|The address of the Vault admin|
|`metadataIpfsHash`|`string`||


