# ValidatorsChecker
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/validators/ValidatorsChecker.sol)

**Inherits:**
[IValidatorsChecker](/contracts/interfaces/IValidatorsChecker.sol/interface.IValidatorsChecker.md)

**Author:**
StakeWise

Defines the functionality for:
checking validators manager signature
checking deposit data root


## State Variables
### _registerValidatorsTypeHash

```solidity
bytes32 private constant _registerValidatorsTypeHash =
    keccak256("VaultValidators(bytes32 validatorsRegistryRoot,bytes validators)");
```


### _validatorsRegistry

```solidity
IValidatorsRegistry private immutable _validatorsRegistry;
```


### _keeper

```solidity
IKeeper private immutable _keeper;
```


### _vaultsRegistry

```solidity
IVaultsRegistry private immutable _vaultsRegistry;
```


### _depositDataRegistry

```solidity
IDepositDataRegistry private immutable _depositDataRegistry;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(address validatorsRegistry, address keeper, address vaultsRegistry, address depositDataRegistry);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validatorsRegistry`|`address`|The address of the beacon chain validators registry contract|
|`keeper`|`address`|The address of the Keeper contract|
|`vaultsRegistry`|`address`|The address of the VaultsRegistry contract|
|`depositDataRegistry`|`address`|The address of the DepositDataRegistry contract|


### checkValidatorsManagerSignature

Function for checking validators manager signature


```solidity
function checkValidatorsManagerSignature(
    address vault,
    bytes32 validatorsRegistryRoot,
    bytes calldata validators,
    bytes calldata signature
) external view override returns (uint256 blockNumber, Status status);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`validatorsRegistryRoot`|`bytes32`|The validators registry root|
|`validators`|`bytes`|The concatenation of the validators' public key, deposit signature, deposit root|
|`signature`|`bytes`|The validators manager signature|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`blockNumber`|`uint256`|Current block number|
|`status`|`Status`|The status of the verification|


### checkDepositDataRoot

Function for checking deposit data root


```solidity
function checkDepositDataRoot(DepositDataRootCheckParams calldata params)
    external
    view
    override
    returns (uint256 blockNumber, Status status);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`DepositDataRootCheckParams`|The parameters for checking deposit data root|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`blockNumber`|`uint256`|Current block number|
|`status`|`Status`|The status of the verification|


### _getValidatorsManagerMessageHash

Get the hash to be signed by the validators manager


```solidity
function _getValidatorsManagerMessageHash(address vault, bytes32 validatorsRegistryRoot, bytes calldata validators)
    private
    view
    returns (bytes32);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`validatorsRegistryRoot`|`bytes32`|The validators registry root|
|`validators`|`bytes`|The concatenation of the validators' public key, deposit signature, deposit root|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The hash to be signed by the validators manager|


### _computeVaultValidatorsDomain

Computes the hash of the EIP712 typed data for the vault

*This function is used to compute the hash of the EIP712 typed data*


```solidity
function _computeVaultValidatorsDomain(address vault) private view returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The hash of the EIP712 typed data|


### _depositAmount

Get the amount of assets required for validator deposit


```solidity
function _depositAmount() internal pure virtual returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of assets required for deposit|


