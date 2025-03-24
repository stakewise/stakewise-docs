# IOwnMevEscrow
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IOwnMevEscrow.sol)

**Author:**
StakeWise

Defines the interface for the OwnMevEscrow contract


## Functions
### vault

Vault address


```solidity
function vault() external view returns (address payable);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address payable`|The address of the vault that owns the escrow|


### harvest

Withdraws MEV accumulated in the escrow. Can be called only by the Vault.

*IMPORTANT: because control is transferred to the Vault, care must be
taken to not create reentrancy vulnerabilities. The Vault must follow the checks-effects-interactions pattern:
https://docs.soliditylang.org/en/v0.8.22/security-considerations.html#use-the-checks-effects-interactions-pattern*


```solidity
function harvest() external returns (uint256 assets);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets withdrawn|


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
event Harvested(uint256 assets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets withdrawn|

