---
title: VaultGnoStaking
sidebar_position: 6
description: "Abstract contract defining Gnosis staking functionality for vaults"
---

# VaultGnoStaking

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/modules/VaultGnoStaking.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [VaultAdmin →](./VaultAdmin), [VaultState →](./VaultState), [VaultValidators →](./VaultValidators), [VaultEnterExit →](./VaultEnterExit), IVaultGnoStaking

Defines the Gnosis staking functionality for the Vault.


## Events
### XdaiSwapped
Emitted when xDAI is swapped to GNO (deprecated)


```solidity
event XdaiSwapped(uint256 amount, uint256 assets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of xDAI swapped|
|`assets`|`uint256`|The amount of GNO received|


## Functions

### deposit

Deposit GNO to the Vault


```solidity
function deposit(uint256 assets, address receiver, address referrer)
    public
    virtual
    override
    returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of GNO to deposit|
|`receiver`|`address`|The address that will receive Vault's shares|
|`referrer`|`address`|The address of the referrer. Set to zero address if not used.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares minted|


### donateAssets

Donate assets to the Vault. Must approve GNO transfer before the call.


```solidity
function donateAssets(uint256 amount) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of GNO to donate|


### receive

Function for receiving xDAI and forwarding it to the tokens converter


```solidity
receive() external payable;
```
