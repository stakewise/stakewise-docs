# ConsolidationsChecker
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/validators/ConsolidationsChecker.sol)

**Inherits:**
EIP712, [IConsolidationsChecker](/contracts/interfaces/IConsolidationsChecker.sol/interface.IConsolidationsChecker.md)

**Author:**
StakeWise

Defines the functionality for checking signatures of oracles for validators consolidations


## State Variables
### _signatureLength

```solidity
uint256 private constant _signatureLength = 65;
```


### _consolidationsCheckerTypeHash

```solidity
bytes32 private constant _consolidationsCheckerTypeHash =
    keccak256("ConsolidationsChecker(address vault,bytes validators)");
```


### _keeper

```solidity
IKeeper private immutable _keeper;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(address keeper) EIP712("ConsolidationsChecker", "1");
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`keeper`|`address`|The address of the Keeper contract|


### verifySignatures

Verifies the signatures of oracles for validators consolidations. Reverts if the signatures are invalid.


```solidity
function verifySignatures(address vault, bytes calldata validators, bytes calldata signatures) external view override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`validators`|`bytes`|The concatenation of the validators' data|
|`signatures`|`bytes`|The concatenation of the oracles' signatures|


### isValidSignatures

Function for checking signatures of oracles for validators consolidations


```solidity
function isValidSignatures(address vault, bytes calldata validators, bytes calldata signatures)
    public
    view
    override
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`validators`|`bytes`|The concatenation of the validators' data|
|`signatures`|`bytes`|The concatenation of the oracles' signatures|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if the signatures are valid, `false` otherwise|


### _isValidSignatures

Internal function for verifying oracles' signatures


```solidity
function _isValidSignatures(uint256 requiredSignatures, bytes32 message, bytes calldata signatures)
    private
    view
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`requiredSignatures`|`uint256`|The number of signatures required for the verification to pass|
|`message`|`bytes32`|The message that was signed|
|`signatures`|`bytes`|The concatenation of the oracles' signatures|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the signatures are valid, otherwise false|


