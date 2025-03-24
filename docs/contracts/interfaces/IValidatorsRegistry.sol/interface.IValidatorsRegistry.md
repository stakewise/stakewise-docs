# IValidatorsRegistry
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IValidatorsRegistry.sol)

**Author:**
Ethereum Foundation

The validators deposit contract common interface


## Functions
### get_deposit_root

Query the current deposit root hash.


```solidity
function get_deposit_root() external view returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The deposit root hash.|


## Events
### DepositEvent
A processed deposit event.


```solidity
event DepositEvent(bytes pubkey, bytes withdrawal_credentials, bytes amount, bytes signature, bytes index);
```

