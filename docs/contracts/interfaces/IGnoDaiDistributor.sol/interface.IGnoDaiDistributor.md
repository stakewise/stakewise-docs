# IGnoDaiDistributor
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IGnoDaiDistributor.sol)

**Author:**
StakeWise

Defines the interface for the GnoDaiDistributor


## Functions
### distributeSDai

Distribute sDAI to the users. Can be called only by the vaults. Must transfer xDAI together with the call.


```solidity
function distributeSDai() external payable;
```

## Events
### SDaiDistributed
Event emitted when sDAI is distributed to the users


```solidity
event SDaiDistributed(address indexed vault, uint256 amount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`amount`|`uint256`|The amount of sDAI distributed|

