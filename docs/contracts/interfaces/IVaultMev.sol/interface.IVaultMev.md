# IVaultMev
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IVaultMev.sol)

**Inherits:**
[IVaultState](/contracts/interfaces/IVaultState.sol/interface.IVaultState.md)

**Author:**
StakeWise

Common interface for the VaultMev contracts


## Functions
### mevEscrow

The contract that accumulates MEV rewards


```solidity
function mevEscrow() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The MEV escrow contract address|


