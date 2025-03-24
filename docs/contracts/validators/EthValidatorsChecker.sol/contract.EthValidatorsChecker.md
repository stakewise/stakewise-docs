# EthValidatorsChecker
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/validators/EthValidatorsChecker.sol)

**Inherits:**
[ValidatorsChecker](/contracts/validators/ValidatorsChecker.sol/abstract.ValidatorsChecker.md)

**Author:**
StakeWise

Defines functionality for checking validators registration on Ethereum


## Functions
### constructor

*Constructor*


```solidity
constructor(address validatorsRegistry, address keeper, address vaultsRegistry, address depositDataRegistry)
    ValidatorsChecker(validatorsRegistry, keeper, vaultsRegistry, depositDataRegistry);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validatorsRegistry`|`address`|The address of the beacon chain validators registry contract|
|`keeper`|`address`|The address of the Keeper contract|
|`vaultsRegistry`|`address`|The address of the VaultsRegistry contract|
|`depositDataRegistry`|`address`|The address of the DepositDataRegistry contract|


### _depositAmount

Get the amount of assets required for validator deposit


```solidity
function _depositAmount() internal pure override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of assets required for deposit|


