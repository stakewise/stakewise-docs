# KeeperOracles
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/keeper/KeeperOracles.sol)

**Inherits:**
Ownable2Step, EIP712, [IKeeperOracles](/contracts/interfaces/IKeeperOracles.sol/interface.IKeeperOracles.md)

**Author:**
StakeWise

Defines the functionality for verifying signatures of the whitelisted off-chain oracles


## State Variables
### _signatureLength

```solidity
uint256 internal constant _signatureLength = 65;
```


### _maxOracles

```solidity
uint256 private constant _maxOracles = 30;
```


### isOracle
Function for verifying whether oracle is registered or not


```solidity
mapping(address => bool) public override isOracle;
```


### totalOracles
Total Oracles


```solidity
uint256 public override totalOracles;
```


## Functions
### constructor

*Constructor*


```solidity
constructor() Ownable(msg.sender) EIP712("KeeperOracles", "1");
```

### addOracle

Function for adding oracle to the set


```solidity
function addOracle(address oracle) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracle`|`address`|The address of the oracle to add|


### removeOracle

Function for removing oracle from the set


```solidity
function removeOracle(address oracle) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracle`|`address`|The address of the oracle to remove|


### updateConfig

Function for updating the config IPFS hash


```solidity
function updateConfig(string calldata configIpfsHash) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`configIpfsHash`|`string`|The new config IPFS hash|


### _verifySignatures

Internal function for verifying oracles' signatures


```solidity
function _verifySignatures(uint256 requiredSignatures, bytes32 message, bytes calldata signatures) internal view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`requiredSignatures`|`uint256`|The number of signatures required for the verification to pass|
|`message`|`bytes32`|The message that was signed|
|`signatures`|`bytes`|The concatenation of the oracles' signatures|


