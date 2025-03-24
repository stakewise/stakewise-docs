# IOsToken
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IOsToken.sol)

**Inherits:**
IERC20, IERC20Metadata, IERC20Permit, IERC5267

**Author:**
StakeWise

Defines the interface for the OsToken contract


## Functions
### controllers

Returns whether controller is registered or not


```solidity
function controllers(address controller) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`controller`|`address`|The address of the controller|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|Whether the controller is registered or not|


### mint

Mint OsToken. Can only be called by the controller.


```solidity
function mint(address account, uint256 value) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to mint OsToken for|
|`value`|`uint256`|The amount of OsToken to mint|


### burn

Burn OsToken. Can only be called by the controller.


```solidity
function burn(address account, uint256 value) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to burn OsToken for|
|`value`|`uint256`|The amount of OsToken to burn|


### setController

Enable or disable the controller. Can only be called by the contract owner.


```solidity
function setController(address controller, bool registered) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`controller`|`address`|The address of the controller|
|`registered`|`bool`|Whether the controller is registered or not|


## Events
### ControllerUpdated
Emitted when a controller is updated


```solidity
event ControllerUpdated(address indexed controller, bool registered);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`controller`|`address`|The address of the controller|
|`registered`|`bool`|Whether the controller is registered or not|

