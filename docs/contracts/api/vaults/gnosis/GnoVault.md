---
title: GnoVault
sidebar_position: 9
description: "Core Gnosis staking vault implementation"
---

# GnoVault

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/gnosis/GnoVault.sol)

**Inherits:** [VaultImmutables](../modules/VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [VaultAdmin](../modules/VaultAdmin), [VaultVersion](../modules/VaultVersion), [VaultFee](../modules/VaultFee), [VaultState](../modules/VaultState), [VaultValidators](../modules/VaultValidators), [VaultEnterExit](../modules/VaultEnterExit), [VaultOsToken](../modules/VaultOsToken), [VaultMev](../modules/VaultMev), [VaultGnoStaking](../modules/VaultGnoStaking), [Multicall](../../base/Multicall), IGnoVault

Defines the Gnosis staking Vault


## State Variables
### _version

```solidity
uint8 private constant _version = 3
```


### __gap
This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps


```solidity
uint256[50] private __gap
```


## Functions
### constructor

Constructor

Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy’s storage.

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(GnoVaultConstructorArgs memory args)
    VaultImmutables(args.keeper, args.vaultsRegistry)
    VaultValidators(
        args.depositDataRegistry,
        args.validatorsRegistry,
        args.validatorsWithdrawals,
        args.validatorsConsolidations,
        args.consolidationsChecker
    )
    VaultEnterExit(args.exitingAssetsClaimDelay)
    VaultOsToken(args.osTokenVaultController, args.osTokenConfig, args.osTokenVaultEscrow)
    VaultMev(args.sharedMevEscrow)
    VaultGnoStaking(args.gnoToken, args.tokensConverterFactory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`args`|`GnoVaultConstructorArgs`|The arguments for initializing the GnoVault contract|


### initialize

Initializes or upgrades the GnoVault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata params) external virtual override reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the GnoVault contract|


### enterExitQueue

Locks shares to the exit queue. The shares continue earning rewards until they will be burned by the Vault.

For ERC-20 vault variants, balanceOf(vault) does not reflect queued exit shares despite the emitted Transfer event.


```solidity
function enterExitQueue(uint256 shares, address receiver)
    public
    virtual
    override(IVaultEnterExit, VaultEnterExit, VaultOsToken)
    returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares to lock|
|`receiver`|`address`|The address that will receive assets upon withdrawal|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket of the exit queue. Returns uint256 max if no ticket created.|


### donateShares

Donates shares to the Vault by burning them from the caller,
increasing the value per share for remaining holders


```solidity
function donateShares(uint256 shares) public virtual override(IVaultState, VaultState, VaultOsToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares to donate|


### vaultId


```solidity
function vaultId() public pure virtual override(IVaultVersion, VaultVersion) returns (bytes32);
```

### version

Version


```solidity
function version() public pure virtual override(IVaultVersion, VaultVersion) returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|


### _harvestAssets

Internal function for harvesting Vaults' new assets


```solidity
function _harvestAssets(IKeeperRewards.HarvestParams calldata harvestParams)
    internal
    override(VaultState, VaultMev)
    returns (int256 totalAssetsDelta, bool harvested);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`totalAssetsDelta`|`int256`|The total assets delta after harvest|
|`harvested`|`bool`|`true` when the rewards were harvested, `false` otherwise|


### __GnoVault_upgrade

Upgrades the GnoVault contract


```solidity
function __GnoVault_upgrade() internal;
```

### __GnoVault_init

Initializes the GnoVault contract


```solidity
function __GnoVault_init(address admin, address ownMevEscrow, GnoVaultInitParams memory params)
    internal
    onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`admin`|`address`|The address of the admin of the Vault|
|`ownMevEscrow`|`address`|The address of the MEV escrow owned by the Vault. Zero address if shared MEV escrow is used.|
|`params`|`GnoVaultInitParams`|The decoded parameters for initializing the GnoVault contract|
