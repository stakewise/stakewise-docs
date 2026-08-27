---
title: GnoMetaVault
sidebar_position: 5
description: "Defines the Meta Vault functionality on Gnosis"
---

# GnoMetaVault

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/gnosis/GnoMetaVault.sol)

**Inherits:** [VaultImmutables](../modules/VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [ReentrancyGuardUpgradeable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/utils/ReentrancyGuardUpgradeable.sol), [VaultAdmin](../modules/VaultAdmin), [VaultVersion](../modules/VaultVersion), [VaultFee](../modules/VaultFee), [VaultState](../modules/VaultState), [VaultEnterExit](../modules/VaultEnterExit), [VaultOsToken](../modules/VaultOsToken), [VaultSubVaults](../modules/VaultSubVaults), [Multicall](../../base/Multicall), IGnoMetaVault

Defines the Meta Vault functionality on Gnosis


## State Variables
### _version

```solidity
uint8 private constant _version = 5
```


### _securityDeposit

```solidity
uint256 private constant _securityDeposit = 1e9
```


### _gnoToken

```solidity
IERC20 private immutable _gnoToken
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
constructor(address gnoToken, GnoMetaVaultConstructorArgs memory args)
    VaultImmutables(args.keeper, args.vaultsRegistry)
    VaultEnterExit(args.exitingAssetsClaimDelay)
    VaultOsToken(args.osTokenVaultController, args.osTokenConfig, args.osTokenVaultEscrow)
    VaultSubVaults(args.subVaultsRegistryFactory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gnoToken`|`address`|The address of the GNO token contract|
|`args`|`GnoMetaVaultConstructorArgs`|The arguments for initializing the GnoMetaVault contract|


### initialize

Initializes or upgrades the GnoMetaVault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata params) external virtual override reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the GnoMetaVault contract|


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
function donateAssets(uint256 amount) external override nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|The amount of GNO to donate|


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


### _depositToVault

Internal function to deposit assets to the sub-vault


```solidity
function _depositToVault(address vault, uint256 assets) internal override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`assets`|`uint256`|The amount of assets to deposit|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of vault shares received|


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


### isStateUpdateRequired

Check whether state update is required


```solidity
function isStateUpdateRequired()
    public
    view
    virtual
    override(IVaultState, VaultState, VaultSubVaults)
    returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if state update is required, `false` otherwise|


### updateState

Updates the total amount of assets in the Vault and its exit queue


```solidity
function updateState(IKeeperRewards.HarvestParams calldata harvestParams)
    public
    virtual
    override(IVaultState, VaultState, VaultSubVaults);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`harvestParams`|`IKeeperRewards.HarvestParams`|The parameters for harvesting Keeper rewards|


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


### _checkHarvested

Internal method for checking whether the vault is harvested


```solidity
function _checkHarvested() internal view virtual override(VaultImmutables, VaultSubVaults);
```

### _isCollateralized

Returns whether the vault is collateralized


```solidity
function _isCollateralized() internal view virtual override(VaultImmutables, VaultSubVaults) returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the vault is collateralized|


### __GnoMetaVault_upgrade

Upgrades the GnoMetaVault contract


```solidity
function __GnoMetaVault_upgrade() internal onlyInitializing;
```

### __GnoMetaVault_init

Initializes the GnoMetaVault contract


```solidity
function __GnoMetaVault_init(address _admin, GnoMetaVaultInitParams memory params) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_admin`|`address`|The address of the admin of the Vault|
|`params`|`GnoMetaVaultInitParams`|The parameters for initializing the GnoMetaVault contract|
