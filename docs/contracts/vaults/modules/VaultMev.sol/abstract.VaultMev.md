# VaultMev
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/modules/VaultMev.sol)

**Inherits:**
Initializable, [VaultState](/contracts/vaults/modules/VaultState.sol/abstract.VaultState.md), [IVaultMev](/contracts/interfaces/IVaultMev.sol/interface.IVaultMev.md)

**Author:**
StakeWise

Defines the Vaults' MEV functionality


## State Variables
### _sharedMevEscrow
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address private immutable _sharedMevEscrow;
```


### _ownMevEscrow

```solidity
address private _ownMevEscrow;
```


### __gap
*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


```solidity
uint256[50] private __gap;
```


## Functions
### constructor

*Constructor*

*Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy’s storage.*

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(address sharedMevEscrow);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sharedMevEscrow`|`address`|The address of the shared MEV escrow|


### mevEscrow

The contract that accumulates MEV rewards


```solidity
function mevEscrow() public view override returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The MEV escrow contract address|


### _harvestAssets

*Internal function for harvesting Vaults' new assets*


```solidity
function _harvestAssets(IKeeperRewards.HarvestParams calldata harvestParams) internal override returns (int256, bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`int256`|The total assets delta after harvest|
|`<none>`|`bool`|`true` when the rewards were harvested, `false` otherwise|


### __VaultMev_init

*Initializes the VaultMev contract*


```solidity
function __VaultMev_init(address ownMevEscrow) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`ownMevEscrow`|`address`|The address of the own MEV escrow contract|


