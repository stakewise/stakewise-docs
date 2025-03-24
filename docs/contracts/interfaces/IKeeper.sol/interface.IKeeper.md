# IKeeper
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IKeeper.sol)

**Inherits:**
[IKeeperOracles](/contracts/interfaces/IKeeperOracles.sol/interface.IKeeperOracles.md), [IKeeperRewards](/contracts/interfaces/IKeeperRewards.sol/interface.IKeeperRewards.md), [IKeeperValidators](/contracts/interfaces/IKeeperValidators.sol/interface.IKeeperValidators.md)

**Author:**
StakeWise

Defines the interface for the Keeper contract


## Functions
### initialize

Initializes the Keeper contract. Can only be called once.


```solidity
function initialize(address _owner) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|The address of the owner|


