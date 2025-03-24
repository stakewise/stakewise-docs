# IVaultValidators
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IVaultValidators.sol)

**Inherits:**
[IVaultAdmin](/contracts/interfaces/IVaultAdmin.sol/interface.IVaultAdmin.md), [IVaultState](/contracts/interfaces/IVaultState.sol/interface.IVaultState.md)

**Author:**
StakeWise

Defines the interface for VaultValidators contract


## Functions
### validatorsManager

The Vault validators manager address


```solidity
function validatorsManager() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address that can register validators|


### validatorsManagerNonce

The nonce for the validators manager used for signing


```solidity
function validatorsManagerNonce() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The nonce for the validators manager|


### trackedValidators

Function for checking if the validator is tracked in the contract


```solidity
function trackedValidators(bytes32 publicKeyHash) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`publicKeyHash`|`bytes32`|The keccak256 hash of the public key of the validator|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|Whether the validator is tracked|


### fundValidators

Function for funding single or multiple existing validators


```solidity
function fundValidators(bytes calldata validators, bytes calldata validatorsManagerSignature) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|


### withdrawValidators

Function for withdrawing single or multiple validators


```solidity
function withdrawValidators(bytes calldata validators, bytes calldata validatorsManagerSignature) external payable;
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
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|
|`oracleSignatures`|`bytes`|The optional signatures from the oracles|


### registerValidators

Function for registering single or multiple validators


```solidity
function registerValidators(
    IKeeperValidators.ApprovalParams calldata keeperParams,
    bytes calldata validatorsManagerSignature
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`keeperParams`|`IKeeperValidators.ApprovalParams`|The parameters for getting approval from Keeper oracles|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|


### setValidatorsManager

Function for updating the validators manager. Can only be called by the admin. Default is the DepositDataRegistry contract.


```solidity
function setValidatorsManager(address _validatorsManager) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_validatorsManager`|`address`|The new validators manager address|


## Events
### ValidatorRegistered
Event emitted on V1 validator registration


```solidity
event ValidatorRegistered(bytes publicKey);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`publicKey`|`bytes`|The public key of the validator that was registered|

### ValidatorRegistered
Event emitted on V2 validator registration


```solidity
event ValidatorRegistered(bytes publicKey, uint256 amount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`publicKey`|`bytes`|The public key of the validator that was registered|
|`amount`|`uint256`|The amount of assets that was registered|

### ValidatorWithdrawalSubmitted
Event emitted on validator withdrawal


```solidity
event ValidatorWithdrawalSubmitted(bytes publicKey, uint256 amount, uint256 feePaid);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`publicKey`|`bytes`|The public key of the validator that was withdrawn|
|`amount`|`uint256`|The amount of assets that was withdrawn|
|`feePaid`|`uint256`|The amount of fee that was paid|

### ValidatorFunded
Event emitted on validator balance top-up


```solidity
event ValidatorFunded(bytes publicKey, uint256 amount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`publicKey`|`bytes`|The public key of the validator that was funded|
|`amount`|`uint256`|The amount of assets that was funded|

### ValidatorConsolidationSubmitted
Event emitted on validators consolidation


```solidity
event ValidatorConsolidationSubmitted(bytes fromPublicKey, bytes toPublicKey, uint256 feePaid);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`fromPublicKey`|`bytes`|The public key of the validator that was consolidated|
|`toPublicKey`|`bytes`|The public key of the validator that was consolidated to|
|`feePaid`|`uint256`|The amount of fee that was paid|

### KeysManagerUpdated
Event emitted on keys manager address update (deprecated)


```solidity
event KeysManagerUpdated(address indexed caller, address indexed keysManager);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`keysManager`|`address`|The address of the new keys manager|

### ValidatorsRootUpdated
Event emitted on validators merkle tree root update (deprecated)


```solidity
event ValidatorsRootUpdated(address indexed caller, bytes32 indexed validatorsRoot);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`validatorsRoot`|`bytes32`|The new validators merkle tree root|

### ValidatorsManagerUpdated
Event emitted on validators manager address update


```solidity
event ValidatorsManagerUpdated(address indexed caller, address indexed validatorsManager);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`validatorsManager`|`address`|The address of the new validators manager|

