---
title: ConsolidationsChecker
sidebar_position: 1
description: "Contract for checking signatures of oracles for validators consolidations"
---

# ConsolidationsChecker

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/validators/ConsolidationsChecker.sol)

**Inherits:** [EIP712 ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/cryptography/EIP712.sol), IConsolidationsChecker

Defines the functionality for checking signatures of oracles for validators consolidations.


## Functions

### verifySignatures

Verifies the signatures of oracles for validators consolidations. Reverts if the signatures are invalid.


```solidity
function verifySignatures(address vault, bytes calldata validators, bytes calldata signatures)
    external
    view
    override;
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
