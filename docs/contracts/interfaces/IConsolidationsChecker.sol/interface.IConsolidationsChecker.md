# IConsolidationsChecker
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IConsolidationsChecker.sol)

**Inherits:**
IERC5267

**Author:**
StakeWise

Defines the interface for the ConsolidationsChecker contract


## Functions
### verifySignatures

Verifies the signatures of oracles for validators consolidations. Reverts if the signatures are invalid.


```solidity
function verifySignatures(address vault, bytes calldata validators, bytes calldata signatures) external;
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
    external
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


