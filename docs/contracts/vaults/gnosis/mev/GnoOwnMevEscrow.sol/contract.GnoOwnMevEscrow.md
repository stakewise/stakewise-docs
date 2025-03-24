# GnoOwnMevEscrow
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/gnosis/mev/GnoOwnMevEscrow.sol)

**Inherits:**
[IOwnMevEscrow](/contracts/interfaces/IOwnMevEscrow.sol/interface.IOwnMevEscrow.md)

**Author:**
StakeWise

Accumulates received MEV. The escrow is owned by the Vault.


## State Variables
### vault
Vault address


```solidity
address payable public immutable override vault;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(address _vault);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_vault`|`address`|The address of the Vault contract|


### harvest

Withdraws MEV accumulated in the escrow. Can be called only by the Vault.

*IMPORTANT: because control is transferred to the Vault, care must be
taken to not create reentrancy vulnerabilities. The Vault must follow the checks-effects-interactions pattern:
https://docs.soliditylang.org/en/v0.8.22/security-considerations.html#use-the-checks-effects-interactions-pattern*


```solidity
function harvest() external returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|assets The amount of assets withdrawn|


### receive

*Function for receiving MEV*


```solidity
receive() external payable;
```

