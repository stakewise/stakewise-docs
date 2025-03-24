# IVaultAdmin
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IVaultAdmin.sol)

**Author:**
StakeWise

Defines the interface for the VaultAdmin contract


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
function setMetadata(string calldata metadataIpfsHash) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`metadataIpfsHash`|`string`|The new metadata IPFS hash|


### setAdmin

Function for updating the admin address. Can only be called by Vault current admin.


```solidity
function setAdmin(address newAdmin) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newAdmin`|`address`|The new admin address|


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
event AdminUpdated(address indexed caller, address newAdmin);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`newAdmin`|`address`|The new admin address|

