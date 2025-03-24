# OwnMevEscrow
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/ethereum/mev/OwnMevEscrow.sol)

**Inherits:**
[IOwnMevEscrow](/contracts/interfaces/IOwnMevEscrow.sol/interface.IOwnMevEscrow.md)

**Author:**
StakeWise

Accumulates received MEV. The escrow is owned by the Vault.


## State Variables
### vault

```solidity
address payable public immutable override vault;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(address _vault);
```

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


### receive

*Function for receiving MEV*


```solidity
receive() external payable;
```

