# IOsTokenVaultEscrowAuth
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IOsTokenVaultEscrowAuth.sol)

**Author:**
StakeWise

Interface for OsTokenVaultEscrowAuth contract


## Functions
### canRegister

Check if the caller can register the exit position


```solidity
function canRegister(address vault, address owner, uint256 exitPositionTicket, uint256 osTokenShares)
    external
    view
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`owner`|`address`|The address of the assets owner|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`osTokenShares`|`uint256`|The amount of osToken shares to burn|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the caller can register the exit position|


