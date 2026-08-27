---
title: VaultGnoStaking
sidebar_position: 6
description: "Abstract contract defining Gnosis staking functionality for vaults"
---

# VaultGnoStaking

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/modules/VaultGnoStaking.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [VaultAdmin](./VaultAdmin), [VaultState](./VaultState), [VaultValidators](./VaultValidators), [VaultEnterExit](./VaultEnterExit), IVaultGnoStaking

Defines the Gnosis staking functionality for the Vault


## State Variables
### _securityDeposit

```solidity
uint256 private constant _securityDeposit = 1e9
```


### _gnoToken

```solidity
IERC20 internal immutable _gnoToken
```


### _tokensConverterFactory

```solidity
ITokensConverterFactory private immutable _tokensConverterFactory
```


### _tokensConverter

```solidity
IGnoTokensConverter internal _tokensConverter
```


### __gap
This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps


```solidity
uint256[49] private __gap
```


## Functions
### constructor

Constructor

Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy’s storage.

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(address gnoToken, address tokensConverterFactory) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gnoToken`|`address`|The address of the GNO token|
|`tokensConverterFactory`|`address`|The address of the tokens converter factory|


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

### _registerValidators

Internal function for registering validators


```solidity
function _registerValidators(ValidatorUtils.ValidatorDeposit[] memory deposits) internal virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`deposits`|`ValidatorUtils.ValidatorDeposit[]`|The validators registration data|


### _vaultAssets

Internal function for retrieving the total assets stored in the Vault.
NB! Assets can be forcibly sent to the vault, the returned value must be used with caution


```solidity
function _vaultAssets() internal view virtual override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of assets stored in the Vault|


### _transferVaultAssets

Internal function for transferring assets from the Vault to the receiver


```solidity
function _transferVaultAssets(address receiver, uint256 assets) internal virtual override nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the assets|
|`assets`|`uint256`|The number of assets to transfer|


### _pullWithdrawals

Pulls assets from withdrawal contract


```solidity
function _pullWithdrawals() internal virtual;
```

### __VaultGnoStaking_upgrade

Upgrades the VaultGnoStaking contract


```solidity
function __VaultGnoStaking_upgrade() internal onlyInitializing;
```

### __VaultGnoStaking_init

Initializes the VaultGnoStaking contract


```solidity
function __VaultGnoStaking_init() internal onlyInitializing;
```

### __VaultGnoStaking_init_common

Common initialization for gas optimization


```solidity
function __VaultGnoStaking_init_common() private;
```
