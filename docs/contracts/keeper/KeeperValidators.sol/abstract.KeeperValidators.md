# KeeperValidators
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/keeper/KeeperValidators.sol)

**Inherits:**
[KeeperOracles](/contracts/keeper/KeeperOracles.sol/abstract.KeeperOracles.md), [KeeperRewards](/contracts/keeper/KeeperRewards.sol/abstract.KeeperRewards.md), [IKeeperValidators](/contracts/interfaces/IKeeperValidators.sol/interface.IKeeperValidators.md)

**Author:**
StakeWise

Defines the functionality for approving validators' registrations and updating exit signatures


## State Variables
### _registerValidatorsTypeHash

```solidity
bytes32 private constant _registerValidatorsTypeHash = keccak256(
    "KeeperValidators(bytes32 validatorsRegistryRoot,address vault,bytes validators,string exitSignaturesIpfsHash,uint256 deadline)"
);
```


### _updateExitSigTypeHash

```solidity
bytes32 private constant _updateExitSigTypeHash =
    keccak256("KeeperValidators(address vault,string exitSignaturesIpfsHash,uint256 nonce,uint256 deadline)");
```


### _validatorsRegistry

```solidity
IValidatorsRegistry private immutable _validatorsRegistry;
```


### exitSignaturesNonces
Get nonce for the next vault exit signatures update


```solidity
mapping(address => uint256) public override exitSignaturesNonces;
```


### validatorsMinOracles
The minimum number of oracles required to update validators


```solidity
uint256 public override validatorsMinOracles;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(IValidatorsRegistry validatorsRegistry);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validatorsRegistry`|`IValidatorsRegistry`|The address of the beacon chain validators registry contract|


### setValidatorsMinOracles

Function for updating validators min oracles number


```solidity
function setValidatorsMinOracles(uint256 _validatorsMinOracles) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_validatorsMinOracles`|`uint256`|The new minimum number of oracles required to approve validators|


### approveValidators

Function for approving validators registration


```solidity
function approveValidators(ApprovalParams calldata params) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`ApprovalParams`|The parameters for approving validators registration|


### updateExitSignatures

Function for updating exit signatures for every hard fork


```solidity
function updateExitSignatures(
    address vault,
    uint256 deadline,
    string calldata exitSignaturesIpfsHash,
    bytes calldata oraclesSignatures
) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault to update signatures for|
|`deadline`|`uint256`|The deadline for submitting signatures update|
|`exitSignaturesIpfsHash`|`string`|The IPFS hash with the validators' exit signatures|
|`oraclesSignatures`|`bytes`|The concatenation of Oracles' signatures|


### _setValidatorsMinOracles

*Internal function to set the minimum number of oracles required to approve validators*


```solidity
function _setValidatorsMinOracles(uint256 _validatorsMinOracles) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_validatorsMinOracles`|`uint256`|The new minimum number of oracles required to approve validators|


