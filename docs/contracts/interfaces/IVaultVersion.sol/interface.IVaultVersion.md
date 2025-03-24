# IVaultVersion
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IVaultVersion.sol)

**Inherits:**
IERC1822Proxiable, [IVaultAdmin](/contracts/interfaces/IVaultAdmin.sol/interface.IVaultAdmin.md)

**Author:**
StakeWise

Defines the interface for VaultVersion contract


## Functions
### vaultId

Vault Unique Identifier


```solidity
function vaultId() external pure returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The unique identifier of the Vault|


### version

Version


```solidity
function version() external pure returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|


### implementation

Implementation


```solidity
function implementation() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the Vault implementation contract|


