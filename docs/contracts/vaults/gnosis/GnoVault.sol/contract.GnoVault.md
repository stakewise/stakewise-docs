# GnoVault
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/gnosis/GnoVault.sol)

**Inherits:**
[VaultImmutables](/contracts/vaults/modules/VaultImmutables.sol/abstract.VaultImmutables.md), Initializable, [VaultAdmin](/contracts/vaults/modules/VaultAdmin.sol/abstract.VaultAdmin.md), [VaultVersion](/contracts/vaults/modules/VaultVersion.sol/abstract.VaultVersion.md), [VaultFee](/contracts/vaults/modules/VaultFee.sol/abstract.VaultFee.md), [VaultState](/contracts/vaults/modules/VaultState.sol/abstract.VaultState.md), [VaultValidators](/contracts/vaults/modules/VaultValidators.sol/abstract.VaultValidators.md), [VaultEnterExit](/contracts/vaults/modules/VaultEnterExit.sol/abstract.VaultEnterExit.md), [VaultOsToken](/contracts/vaults/modules/VaultOsToken.sol/abstract.VaultOsToken.md), [VaultMev](/contracts/vaults/modules/VaultMev.sol/abstract.VaultMev.md), [VaultGnoStaking](/contracts/vaults/modules/VaultGnoStaking.sol/abstract.VaultGnoStaking.md), [Multicall](/contracts/base/multicall.md), [IGnoVault](/contracts/interfaces/IGnoVault.sol/interface.IGnoVault.md)

**Author:**
StakeWise

Defines the Gnosis staking Vault


## State Variables
### _version

```solidity
uint8 private constant _version = 3;
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
    VaultGnoStaking(args.gnoToken, args.gnoDaiDistributor);
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


### _processTotalAssetsDelta

*Internal function for processing rewards and penalties*


```solidity
function _processTotalAssetsDelta(int256 assetsDelta) internal virtual override(VaultState, VaultGnoStaking);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsDelta`|`int256`||


### _checkCanWithdrawValidators

*Internal function for checking whether the caller can withdraw validators*


```solidity
function _checkCanWithdrawValidators(bytes calldata validators, bytes calldata validatorsManagerSignature)
    internal
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|


### _withdrawValidator

*Internal function for withdrawing validator*


```solidity
function _withdrawValidator(bytes calldata validator)
    internal
    override(VaultValidators, VaultGnoStaking)
    returns (bytes calldata publicKey, uint256 withdrawnAmount, uint256 feePaid);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validator`|`bytes`|The validator withdrawal data|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`publicKey`|`bytes`|The public key of the withdrawn validator|
|`withdrawnAmount`|`uint256`|The amount of assets that was withdrawn|
|`feePaid`|`uint256`|The amount of fee that was paid|


### __GnoVault_upgrade

*Upgrades the GnoVault contract*


```solidity
function __GnoVault_upgrade() internal;
```

### __GnoVault_init

*Initializes the GnoVault contract*


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


