# IValidatorsChecker
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IValidatorsChecker.sol)

**Author:**
StakeWise

Defines the interface for ValidatorsChecker


## Functions
### checkValidatorsManagerSignature

Function for checking validators manager signature


```solidity
function checkValidatorsManagerSignature(
    address vault,
    bytes32 validatorsRegistryRoot,
    bytes calldata validators,
    bytes calldata signature
) external view returns (uint256 blockNumber, Status status);
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


## Structs
### DepositDataRootCheckParams
*Struct for checking deposit data root*


```solidity
struct DepositDataRootCheckParams {
    address vault;
    bytes32 validatorsRegistryRoot;
    bytes validators;
    bytes32[] proof;
    bool[] proofFlags;
    uint256[] proofIndexes;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`validatorsRegistryRoot`|`bytes32`|The validators registry root|
|`validators`|`bytes`|The concatenation of the validators' public key, deposit signature, deposit root|
|`proof`|`bytes32[]`|The proof of the deposit data root|
|`proofFlags`|`bool[]`|The flags of the proof|
|`proofIndexes`|`uint256[]`|The indexes of the proof|

## Enums
### Status

```solidity
enum Status {
    SUCCEEDED,
    INVALID_VALIDATORS_REGISTRY_ROOT,
    INVALID_VAULT,
    INSUFFICIENT_ASSETS,
    INVALID_SIGNATURE,
    INVALID_VALIDATORS_MANAGER,
    INVALID_VALIDATORS_COUNT,
    INVALID_VALIDATORS_LENGTH,
    INVALID_PROOF
}
```

