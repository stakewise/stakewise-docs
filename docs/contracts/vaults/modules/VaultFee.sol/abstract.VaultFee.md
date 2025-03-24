# VaultFee
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/modules/VaultFee.sol)

**Inherits:**
[VaultImmutables](/contracts/vaults/modules/VaultImmutables.sol/abstract.VaultImmutables.md), Initializable, [VaultAdmin](/contracts/vaults/modules/VaultAdmin.sol/abstract.VaultAdmin.md), [IVaultFee](/contracts/interfaces/IVaultFee.sol/interface.IVaultFee.md)

**Author:**
StakeWise

Defines the fee functionality for the Vault


## State Variables
### _maxFeePercent

```solidity
uint256 internal constant _maxFeePercent = 10_000;
```


### _feeUpdateDelay

```solidity
uint256 private constant _feeUpdateDelay = 7 days;
```


### feeRecipient
The Vault's fee recipient


```solidity
address public override feeRecipient;
```


### feePercent
The Vault's fee percent in BPS


```solidity
uint16 public override feePercent;
```


### _lastUpdateTimestamp

```solidity
uint64 private _lastUpdateTimestamp;
```


### __gap
*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


```solidity
uint256[50] private __gap;
```


## Functions
### setFeeRecipient

Function for updating the fee recipient address. Can only be called by the admin.


```solidity
function setFeeRecipient(address _feeRecipient) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_feeRecipient`|`address`|The address of the new fee recipient|


### setFeePercent

Function for updating the fee percent. Can only be called by the admin.


```solidity
function setFeePercent(uint16 _feePercent) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_feePercent`|`uint16`|The new fee percent|


### _setFeeRecipient

*Internal function for updating the fee recipient externally or from the initializer*


```solidity
function _setFeeRecipient(address _feeRecipient) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_feeRecipient`|`address`|The address of the new fee recipient|


### _setFeePercent

*Internal function for updating the fee percent*


```solidity
function _setFeePercent(uint16 _feePercent, bool isVaultCreation) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_feePercent`|`uint16`|The new fee percent|
|`isVaultCreation`|`bool`|Flag indicating whether the fee percent is set during the vault creation|


### __VaultFee_init

*Initializes the VaultFee contract*


```solidity
function __VaultFee_init(address _feeRecipient, uint16 _feePercent) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_feeRecipient`|`address`|The address of the fee recipient|
|`_feePercent`|`uint16`|The fee percent that is charged by the Vault|


