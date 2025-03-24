# VaultGnoStaking
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/modules/VaultGnoStaking.sol)

**Inherits:**
Initializable, [VaultAdmin](/contracts/vaults/modules/VaultAdmin.sol/abstract.VaultAdmin.md), [VaultState](/contracts/vaults/modules/VaultState.sol/abstract.VaultState.md), [VaultValidators](/contracts/vaults/modules/VaultValidators.sol/abstract.VaultValidators.md), [VaultEnterExit](/contracts/vaults/modules/VaultEnterExit.sol/abstract.VaultEnterExit.md), [IVaultGnoStaking](/contracts/interfaces/IVaultGnoStaking.sol/interface.IVaultGnoStaking.md)

**Author:**
StakeWise

Defines the Gnosis staking functionality for the Vault


## State Variables
### _securityDeposit

```solidity
uint256 private constant _securityDeposit = 1e9;
```


### _gnoToken

```solidity
IERC20 internal immutable _gnoToken;
```


### _gnoDaiDistributor

```solidity
IGnoDaiDistributor private immutable _gnoDaiDistributor;
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
constructor(address gnoToken, address gnoDaiDistributor);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`gnoToken`|`address`|The address of the GNO token|
|`gnoDaiDistributor`|`address`|The address of the xDAI distributor contract|


### deposit

Deposit GNO to the Vault


```solidity
function deposit(uint256 assets, address receiver, address referrer)
    public
    virtual
    override
    nonReentrant
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


### _processTotalAssetsDelta

*Internal function for processing rewards and penalties*


```solidity
function _processTotalAssetsDelta(int256 assetsDelta) internal virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsDelta`|`int256`||


### receive

*Function for receiving xDAI*


```solidity
receive() external payable;
```

### _registerValidator

*Internal function for registering validator*


```solidity
function _registerValidator(bytes calldata validator, bool isTopUp, bool isV1Validator)
    internal
    virtual
    override
    returns (uint256 depositAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validator`|`bytes`|The validator registration data|
|`isTopUp`|`bool`|Whether the registration is a balance top-up|
|`isV1Validator`|`bool`|Whether the validator is V1 or V2|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`depositAmount`|`uint256`|The amount of assets that was deposited|


### _withdrawValidator

*Internal function for withdrawing validator*


```solidity
function _withdrawValidator(bytes calldata validator)
    internal
    virtual
    override
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


### _vaultAssets

*Internal function for retrieving the total assets stored in the Vault.
NB! Assets can be forcibly sent to the vault, the returned value must be used with caution*


```solidity
function _vaultAssets() internal view virtual override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of assets stored in the Vault|


### _transferVaultAssets

*Internal function for transferring assets from the Vault to the receiver*


```solidity
function _transferVaultAssets(address receiver, uint256 assets) internal virtual override nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the assets|
|`assets`|`uint256`|The number of assets to transfer|


### _validatorMinEffectiveBalance

*Internal function for fetching validator minimum effective balance*


```solidity
function _validatorMinEffectiveBalance() internal pure override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The minimum effective balance for the validator|


### _validatorMaxEffectiveBalance

*Internal function for fetching validator maximum effective balance*


```solidity
function _validatorMaxEffectiveBalance() internal pure override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The maximum effective balance for the validator|


### _pullWithdrawals

*Pulls assets from withdrawal contract*


```solidity
function _pullWithdrawals() internal virtual;
```

### __VaultGnoStaking_upgrade

*Upgrades the VaultGnoStaking contract*


```solidity
function __VaultGnoStaking_upgrade() internal onlyInitializing;
```

### __VaultGnoStaking_init

*Initializes the VaultGnoStaking contract*


```solidity
function __VaultGnoStaking_init() internal onlyInitializing;
```

