# OsTokenConfig
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/tokens/OsTokenConfig.sol)

**Inherits:**
Ownable2Step, [IOsTokenConfig](/contracts/interfaces/IOsTokenConfig.sol/interface.IOsTokenConfig.md)

**Author:**
StakeWise

Configuration for minting and liquidating OsToken shares


## State Variables
### _maxPercent

```solidity
uint256 private constant _maxPercent = 1e18;
```


### _disabledLiqThreshold

```solidity
uint256 private constant _disabledLiqThreshold = type(uint64).max;
```


### redeemer
The address of the OsToken redeemer


```solidity
address public override redeemer;
```


### _defaultConfig

```solidity
Config private _defaultConfig;
```


### _vaultConfigs

```solidity
mapping(address vault => Config config) private _vaultConfigs;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(address _owner, Config memory defaultConfig, address _redeemer) Ownable(msg.sender);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|The address of the contract owner|
|`defaultConfig`|`Config`|The OsToken default configuration|
|`_redeemer`|`address`|The address of the redeemer|


### getConfig

Returns the OsToken minting and liquidating configuration values for the vault


```solidity
function getConfig(address vault) external view override returns (Config memory config);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault to get the config for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`config`|`Config`|The OsToken config for the vault|


### setRedeemer

Sets the OsToken redeemer address. Can only be called by the owner.


```solidity
function setRedeemer(address newRedeemer) public override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newRedeemer`|`address`|The address of the new redeemer|


### updateConfig

Updates the OsToken minting and liquidating configuration values. Can only be called by the owner.


```solidity
function updateConfig(address vault, Config memory config) public override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault. Set to zero address to update the default config.|
|`config`|`Config`|The new OsToken configuration|


