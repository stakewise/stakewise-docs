# ISharedMevEscrow
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/ISharedMevEscrow.sol)

**Author:**
StakeWise

Defines the interface for the SharedMevEscrow contract


## Functions
### harvest

Withdraws MEV accumulated in the escrow. Can be called only by the Vault.

*IMPORTANT: because control is transferred to the Vault, care must be
taken to not create reentrancy vulnerabilities. The Vault must follow the checks-effects-interactions pattern:
https://docs.soliditylang.org/en/v0.8.22/security-considerations.html#use-the-checks-effects-interactions-pattern*


```solidity
function harvest(uint256 assets) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to withdraw|


## Events
### MevReceived
Event emitted on received MEV


```solidity
event MevReceived(uint256 assets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of MEV assets received|

### Harvested
Event emitted on harvest


```solidity
event Harvested(address indexed caller, uint256 assets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The function caller|
|`assets`|`uint256`|The amount of assets withdrawn|

