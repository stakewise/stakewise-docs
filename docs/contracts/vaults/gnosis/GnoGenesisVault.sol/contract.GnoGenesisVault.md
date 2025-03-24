# GnoGenesisVault
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/gnosis/GnoGenesisVault.sol)

**Inherits:**
Initializable, [GnoVault](/contracts/vaults/gnosis/GnoVault.sol/contract.GnoVault.md), [IGnoGenesisVault](/contracts/interfaces/IGnoGenesisVault.sol/interface.IGnoGenesisVault.md)

**Author:**
StakeWise

Defines the Genesis Vault for Gnosis staking migrated from StakeWise Legacy


## State Variables
### _version

```solidity
uint8 private constant _version = 4;
```


### _poolEscrow
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
IGnoPoolEscrow private immutable _poolEscrow;
```


### _rewardGnoToken
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
IRewardGnoToken private immutable _rewardGnoToken;
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
constructor(GnoVaultConstructorArgs memory args, address poolEscrow, address rewardGnoToken) GnoVault(args);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`args`|`GnoVaultConstructorArgs`|The arguments for initializing the GnoVault contract|
|`poolEscrow`|`address`|The address of the pool escrow from StakeWise Legacy|
|`rewardGnoToken`|`address`|The address of the rGNO token from StakeWise Legacy|


### initialize

Initializes or upgrades the GnoVault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata) external virtual override(IGnoVault, GnoVault) reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||


### vaultId

Vault Unique Identifier


```solidity
function vaultId() public pure virtual override(IVaultVersion, GnoVault) returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The unique identifier of the Vault|


### version

Version


```solidity
function version() public pure virtual override(IVaultVersion, GnoVault) returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|


### migrate

Function for migrating from StakeWise Legacy. Can be called only by RewardGnoToken contract.


```solidity
function migrate(address receiver, uint256 assets) external override returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address of the receiver|
|`assets`|`uint256`|The amount of assets migrated|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares minted|


### _calcMaxMintOsTokenShares

*Internal function for calculating the maximum amount of osToken shares that can be minted
based on the current user balance*


```solidity
function _calcMaxMintOsTokenShares(address user) private view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The address of the user|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The maximum amount of osToken shares that can be minted|


### _vaultAssets

*Internal function for retrieving the total assets stored in the Vault.
NB! Assets can be forcibly sent to the vault, the returned value must be used with caution*


```solidity
function _vaultAssets() internal view virtual override(VaultState, VaultGnoStaking) returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of assets stored in the Vault|


### _pullWithdrawals

*Pulls assets from withdrawal contract*


```solidity
function _pullWithdrawals() internal override;
```

## Errors
### InvalidInitialHarvest

```solidity
error InvalidInitialHarvest();
```

