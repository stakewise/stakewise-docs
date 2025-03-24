# VaultsRegistry
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/VaultsRegistry.sol)

**Inherits:**
Ownable2Step, [IVaultsRegistry](/contracts/interfaces/IVaultsRegistry.sol/interface.IVaultsRegistry.md)

**Author:**
StakeWise

Defines the registry functionality that keeps track of Vaults, Factories and Vault upgrades


## State Variables
### vaults
Registered Vaults


```solidity
mapping(address => bool) public override vaults;
```


### factories
Registered Factories


```solidity
mapping(address => bool) public override factories;
```


### vaultImpls
Registered Vault implementations


```solidity
mapping(address => bool) public override vaultImpls;
```


### _initialized

```solidity
bool private _initialized;
```


## Functions
### constructor

*Constructor*


```solidity
constructor() Ownable(msg.sender);
```

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


### initialize

Function for initializing the registry. Can only be called once during the deployment.


```solidity
function initialize(address _owner) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|The address of the owner of the contract|


