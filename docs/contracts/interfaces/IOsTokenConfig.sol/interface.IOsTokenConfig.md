# IOsTokenConfig
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IOsTokenConfig.sol)

**Author:**
StakeWise

Defines the interface for the OsTokenConfig contract


## Functions
### redeemer

The address of the OsToken redeemer


```solidity
function redeemer() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the redeemer|


### getConfig

Returns the OsToken minting and liquidating configuration values for the vault


```solidity
function getConfig(address vault) external view returns (Config memory config);
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
function setRedeemer(address newRedeemer) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newRedeemer`|`address`|The address of the new redeemer|


### updateConfig

Updates the OsToken minting and liquidating configuration values. Can only be called by the owner.


```solidity
function updateConfig(address vault, Config memory config) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault. Set to zero address to update the default config.|
|`config`|`Config`|The new OsToken configuration|


## Events
### OsTokenConfigUpdated
Emitted when OsToken minting and liquidating configuration values are updated


```solidity
event OsTokenConfigUpdated(address vault, uint128 liqBonusPercent, uint64 liqThresholdPercent, uint64 ltvPercent);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault to update the config for. Will be zero address if it is a default config.|
|`liqBonusPercent`|`uint128`|The new liquidation bonus percent value|
|`liqThresholdPercent`|`uint64`|The new liquidation threshold percent value|
|`ltvPercent`|`uint64`|The new loan-to-value (LTV) percent value|

### RedeemerUpdated
Emitted when the OsToken redeemer address is updated


```solidity
event RedeemerUpdated(address newRedeemer);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newRedeemer`|`address`|The address of the new redeemer|

## Structs
### Config
The OsToken minting and liquidating configuration values


```solidity
struct Config {
    uint128 liqBonusPercent;
    uint64 liqThresholdPercent;
    uint64 ltvPercent;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`liqBonusPercent`|`uint128`|The minimal bonus percent that liquidator earns on OsToken position liquidation|
|`liqThresholdPercent`|`uint64`|The liquidation threshold percent used to calculate health factor for OsToken position|
|`ltvPercent`|`uint64`|The percent used to calculate how much user can mint OsToken shares|

