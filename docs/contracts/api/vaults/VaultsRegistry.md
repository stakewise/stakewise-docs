# VaultsRegistry
[Git Source](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/VaultsRegistry.sol)

**Inherits:**
[Ownable2Step ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable2Step.sol), IVaultsRegistry

Defines the registry functionality that keeps track of Vaults, Factories and Vault upgrades.


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
function addVault(address vault) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault to add|


### addVaultImpl

Function for adding Vault implementation contract


```solidity
function addVaultImpl(address newImpl) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newImpl`|`address`|The address of the new implementation contract|


### removeVaultImpl

Function for removing Vault implementation contract


```solidity
function removeVaultImpl(address impl) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`impl`|`address`|The address of the removed implementation contract|


### addFactory

Function for adding the factory to the whitelist


```solidity
function addFactory(address factory) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`factory`|`address`|The address of the factory to add to the whitelist|


### removeFactory

Function for removing the factory from the whitelist


```solidity
function removeFactory(address factory) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`factory`|`address`|The address of the factory to remove from the whitelist|
