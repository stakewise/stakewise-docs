# GnoSharedMevEscrow
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/gnosis/mev/GnoSharedMevEscrow.sol)

**Inherits:**
[ISharedMevEscrow](/contracts/interfaces/ISharedMevEscrow.sol/interface.ISharedMevEscrow.md)

**Author:**
StakeWise

Accumulates received MEV. The rewards are shared by multiple Vaults.


## State Variables
### _vaultsRegistry

```solidity
IVaultsRegistry private immutable _vaultsRegistry;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(address vaultsRegistry);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vaultsRegistry`|`address`|The address of the VaultsRegistry contract|


### harvest

Withdraws MEV accumulated in the escrow. Can be called only by the Vault.

*IMPORTANT: because control is transferred to the Vault, care must be
taken to not create reentrancy vulnerabilities. The Vault must follow the checks-effects-interactions pattern:
https://docs.soliditylang.org/en/v0.8.22/security-considerations.html#use-the-checks-effects-interactions-pattern*


```solidity
function harvest(uint256 assets) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to withdraw|


### receive

*Function for receiving MEV*


```solidity
receive() external payable;
```

