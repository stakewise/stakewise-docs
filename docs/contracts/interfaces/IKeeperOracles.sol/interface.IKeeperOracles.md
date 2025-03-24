# IKeeperOracles
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IKeeperOracles.sol)

**Inherits:**
IERC5267

**Author:**
StakeWise

Defines the interface for the KeeperOracles contract


## Functions
### isOracle

Function for verifying whether oracle is registered or not


```solidity
function isOracle(address oracle) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracle`|`address`|The address of the oracle to check|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` for the registered oracle, `false` otherwise|


### totalOracles

Total Oracles


```solidity
function totalOracles() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total number of oracles registered|


### addOracle

Function for adding oracle to the set


```solidity
function addOracle(address oracle) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracle`|`address`|The address of the oracle to add|


### removeOracle

Function for removing oracle from the set


```solidity
function removeOracle(address oracle) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracle`|`address`|The address of the oracle to remove|


### updateConfig

Function for updating the config IPFS hash


```solidity
function updateConfig(string calldata configIpfsHash) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`configIpfsHash`|`string`|The new config IPFS hash|


## Events
### OracleAdded
Event emitted on the oracle addition


```solidity
event OracleAdded(address indexed oracle);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracle`|`address`|The address of the added oracle|

### OracleRemoved
Event emitted on the oracle removal


```solidity
event OracleRemoved(address indexed oracle);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracle`|`address`|The address of the removed oracle|

### ConfigUpdated
Event emitted on oracles config update


```solidity
event ConfigUpdated(string configIpfsHash);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`configIpfsHash`|`string`|The IPFS hash of the new config|

