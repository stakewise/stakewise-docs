# IVaultsRegistry
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IVaultsRegistry.sol)

**Author:**
StakeWise

Defines the interface for the VaultsRegistry


## Functions
### vaults

Registered Vaults


```solidity
function vaults(address vault) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault to check whether it is registered|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` for the registered Vault, `false` otherwise|


### vaultImpls

Registered Vault implementations


```solidity
function vaultImpls(address impl) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`impl`|`address`|The address of the vault implementation|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` for the registered implementation, `false` otherwise|


### factories

Registered Factories


```solidity
function factories(address factory) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`factory`|`address`|The address of the factory to check whether it is whitelisted|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` for the whitelisted Factory, `false` otherwise|


### addVault

Function for adding Vault to the registry. Can only be called by the whitelisted Factory.


```solidity
function addVault(address vault) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault to add|


### addVaultImpl

Function for adding Vault implementation contract


```solidity
function addVaultImpl(address newImpl) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newImpl`|`address`|The address of the new implementation contract|


### removeVaultImpl

Function for removing Vault implementation contract


```solidity
function removeVaultImpl(address impl) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`impl`|`address`|The address of the removed implementation contract|


### addFactory

Function for adding the factory to the whitelist


```solidity
function addFactory(address factory) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`factory`|`address`|The address of the factory to add to the whitelist|


### removeFactory

Function for removing the factory from the whitelist


```solidity
function removeFactory(address factory) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`factory`|`address`|The address of the factory to remove from the whitelist|


### initialize

Function for initializing the registry. Can only be called once during the deployment.


```solidity
function initialize(address _owner) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|The address of the owner of the contract|


## Events
### VaultAdded
Event emitted on a Vault addition


```solidity
event VaultAdded(address indexed caller, address indexed vault);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address that has added the Vault|
|`vault`|`address`|The address of the added Vault|

### VaultImplAdded
Event emitted on adding Vault implementation contract


```solidity
event VaultImplAdded(address indexed impl);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`impl`|`address`|The address of the new implementation contract|

### VaultImplRemoved
Event emitted on removing Vault implementation contract


```solidity
event VaultImplRemoved(address indexed impl);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`impl`|`address`|The address of the removed implementation contract|

### FactoryAdded
Event emitted on whitelisting the factory


```solidity
event FactoryAdded(address indexed factory);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`factory`|`address`|The address of the whitelisted factory|

### FactoryRemoved
Event emitted on removing the factory from the whitelist


```solidity
event FactoryRemoved(address indexed factory);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`factory`|`address`|The address of the factory removed from the whitelist|

