# VaultValidators
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/modules/VaultValidators.sol)

**Inherits:**
[VaultImmutables](/contracts/vaults/modules/VaultImmutables.sol/abstract.VaultImmutables.md), Initializable, ReentrancyGuardUpgradeable, [VaultAdmin](/contracts/vaults/modules/VaultAdmin.sol/abstract.VaultAdmin.md), [VaultState](/contracts/vaults/modules/VaultState.sol/abstract.VaultState.md), [IVaultValidators](/contracts/interfaces/IVaultValidators.sol/interface.IVaultValidators.md)

**Author:**
StakeWise

Defines the validators functionality for the Vault


## State Variables
### _validatorsManagerTypeHash

```solidity
bytes32 private constant _validatorsManagerTypeHash =
    keccak256("VaultValidators(bytes32 validatorsRegistryRoot,bytes validators)");
```


### _validatorV1DepositLength

```solidity
uint256 internal constant _validatorV1DepositLength = 176;
```


### _validatorV2DepositLength

```solidity
uint256 internal constant _validatorV2DepositLength = 184;
```


### _validatorWithdrawalLength

```solidity
uint256 private constant _validatorWithdrawalLength = 56;
```


### _validatorConsolidationLength

```solidity
uint256 private constant _validatorConsolidationLength = 96;
```


### _depositDataRegistry
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address private immutable _depositDataRegistry;
```


### _initialChainId
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
uint256 private immutable _initialChainId;
```


### _validatorsRegistry
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address internal immutable _validatorsRegistry;
```


### _validatorsWithdrawals
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address private immutable _validatorsWithdrawals;
```


### _validatorsConsolidations
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address private immutable _validatorsConsolidations;
```


### _consolidationsChecker
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
address private immutable _consolidationsChecker;
```


### __deprecated__validatorsRoot
deprecated. Deposit data management is moved to DepositDataRegistry contract


```solidity
bytes32 private __deprecated__validatorsRoot;
```


### __deprecated__validatorIndex
deprecated. Deposit data management is moved to DepositDataRegistry contract


```solidity
uint256 private __deprecated__validatorIndex;
```


### _validatorsManager

```solidity
address private _validatorsManager;
```


### _initialDomainSeparator

```solidity
bytes32 private _initialDomainSeparator;
```


### trackedValidators
Function for checking if the validator is tracked in the contract


```solidity
mapping(bytes32 publicKeyHash => bool isRegistered) public override trackedValidators;
```


### validatorsManagerNonce
The nonce for the validators manager used for signing


```solidity
uint256 public override validatorsManagerNonce;
```


### __gap
*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


```solidity
uint256[47] private __gap;
```


## Functions
### constructor

*Constructor*

*Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy’s storage.*

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(
    address depositDataRegistry,
    address validatorsRegistry,
    address validatorsWithdrawals,
    address validatorsConsolidations,
    address consolidationsChecker
);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`depositDataRegistry`|`address`|The address of the deposit data registry contract|
|`validatorsRegistry`|`address`|The contract address used for registering validators in beacon chain|
|`validatorsWithdrawals`|`address`|The contract address used for withdrawing validators in beacon chain|
|`validatorsConsolidations`|`address`|The contract address used for consolidating validators in beacon chain|
|`consolidationsChecker`|`address`|The contract address used for verifying consolidation approvals|


### validatorsManager

The Vault validators manager address


```solidity
function validatorsManager() public view override returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address that can register validators|


### registerValidators

Function for registering single or multiple validators


```solidity
function registerValidators(
    IKeeperValidators.ApprovalParams calldata keeperParams,
    bytes calldata validatorsManagerSignature
) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`keeperParams`|`IKeeperValidators.ApprovalParams`|The parameters for getting approval from Keeper oracles|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|


### fundValidators

Function for funding single or multiple existing validators


```solidity
function fundValidators(bytes calldata validators, bytes calldata validatorsManagerSignature) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|


### withdrawValidators

Function for withdrawing single or multiple validators


```solidity
function withdrawValidators(bytes calldata validators, bytes calldata validatorsManagerSignature)
    external
    payable
    override
    nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|


### consolidateValidators

Function for consolidating single or multiple validators


```solidity
function consolidateValidators(
    bytes calldata validators,
    bytes calldata validatorsManagerSignature,
    bytes calldata oracleSignatures
) external payable override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|
|`oracleSignatures`|`bytes`|The optional signatures from the oracles|


### _processConsolidation

*Internal function to process validator consolidations*


```solidity
function _processConsolidation(bytes calldata validators, uint256 validatorsCount, bytes calldata oracleSignatures)
    private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`validatorsCount`|`uint256`|The number of validators to consolidate|
|`oracleSignatures`|`bytes`|The optional signatures from the oracles|


### setValidatorsManager

Function for updating the validators manager. Can only be called by the admin. Default is the DepositDataRegistry contract.


```solidity
function setValidatorsManager(address validatorsManager_) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validatorsManager_`|`address`||


### _registerValidator

*Internal function for registering validator*


```solidity
function _registerValidator(bytes calldata validator, bool isTopUp, bool isV1Validator)
    internal
    virtual
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


### _consolidateValidator

*Internal function for consolidating validators*


```solidity
function _consolidateValidator(bytes calldata validator)
    private
    returns (bytes calldata fromPublicKey, bytes calldata toPublicKey, uint256 feePaid);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validator`|`bytes`||


### _validatorMinEffectiveBalance

*Internal function for fetching validator minimum effective balance*


```solidity
function _validatorMinEffectiveBalance() internal pure virtual returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The minimum effective balance for the validator|


### _validatorMaxEffectiveBalance

*Internal function for fetching validator maximum effective balance*


```solidity
function _validatorMaxEffectiveBalance() internal pure virtual returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The maximum effective balance for the validator|


### _registerValidators

*Internal function for registering validators*


```solidity
function _registerValidators(
    bytes calldata validators,
    bytes32 nonce,
    bytes calldata validatorsManagerSignature,
    bool isTopUp
) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`nonce`|`bytes32`|The nonce of the signature|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|
|`isTopUp`|`bool`|Whether the registration is a balance top-up|


### _checkCanWithdrawValidators

*Internal function for checking whether the caller can withdraw validators*


```solidity
function _checkCanWithdrawValidators(bytes calldata validators, bytes calldata validatorsManagerSignature)
    internal
    virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|


### _isValidatorsManager

*Internal function for checking whether the caller is the validators manager.
If the valid signature is provided, update the nonce.*


```solidity
function _isValidatorsManager(bytes calldata validators, bytes32 nonce, bytes calldata validatorsManagerSignature)
    internal
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`nonce`|`bytes32`|The nonce of the signature|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the caller is the validators manager|


### _getValidatorsManagerSigningMessage

Get the message to be signed by the validators manager


```solidity
function _getValidatorsManagerSigningMessage(bytes32 nonce, bytes calldata validators) private view returns (bytes32);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`nonce`|`bytes32`|The nonce of the message|
|`validators`|`bytes`|The concatenated validators data|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The message to be signed|


### _computeVaultValidatorsDomain

Computes the hash of the EIP712 typed data

*This function is used to compute the hash of the EIP712 typed data*


```solidity
function _computeVaultValidatorsDomain() private view returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The hash of the EIP712 typed data|


### __VaultValidators_upgrade

*Upgrades the VaultValidators contract*


```solidity
function __VaultValidators_upgrade() internal onlyInitializing;
```

### __VaultValidators_init

*Initializes the VaultValidators contract*

*NB! This initializer must be called after VaultState initializer*


```solidity
function __VaultValidators_init() internal onlyInitializing;
```

