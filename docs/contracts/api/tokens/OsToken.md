---
title: OsToken
sidebar_position: 5
description: "Over-collateralized staked token with controller-based minting and burning"
---

# OsToken

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/tokens/OsToken.sol)

**Inherits:** [Ownable2Step ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable2Step.sol), [ERC20Permit ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Permit.sol), IOsToken

OsToken is an over-collateralized staked token


## State Variables
### _vaultController

```solidity
address private immutable _vaultController
```


### controllers

```solidity
mapping(address controller => bool enabled) public override controllers
```


## Functions
### constructor

Constructor


```solidity
constructor(address _owner, address vaultController, string memory _name, string memory _symbol)
    ERC20(_name, _symbol)
    ERC20Permit(_name)
    Ownable(_owner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|The address of the contract owner|
|`vaultController`|`address`|The address of the OsTokenVaultController contract|
|`_name`|`string`|The name of the ERC20 token|
|`_symbol`|`string`|The symbol of the ERC20 token|


### onlyController

Throws if called by any account other than the controller.


```solidity
modifier onlyController() ;
```

### mint

Mint OsToken. Can only be called by the controller.


```solidity
function mint(address account, uint256 value) external override onlyController;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to mint OsToken for|
|`value`|`uint256`|The amount of OsToken to mint|


### burn

Burn OsToken. Can only be called by the controller.


```solidity
function burn(address account, uint256 value) external override onlyController;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to burn OsToken for|
|`value`|`uint256`|The amount of OsToken to burn|


### nonces

Returns the current nonce for `owner`. This value must be
included whenever a signature is generated for `permit`.
Every successful call to `permit` increases `owner`'s nonce by one. This
prevents a signature from being used multiple times.


```solidity
function nonces(address owner) public view virtual override(ERC20Permit, IERC20Permit) returns (uint256);
```

### setController

Enable or disable the controller. Can only be called by the contract owner.


```solidity
function setController(address controller, bool enabled) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`controller`|`address`|The address of the controller|
|`enabled`|`bool`||
