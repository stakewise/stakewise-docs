---
title: EthCommunityVault
sidebar_position: 1
description: "Defines the Ethereum staking Vault with ERC-20 token and NodesManager as fee recipient and validators manager."
---

# EthCommunityVault

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/ethereum/custom/EthCommunityVault.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [EthErc20Vault](../EthErc20Vault), IEthCommunityVault

Defines the Ethereum staking Vault with ERC-20 token and NodesManager as fee recipient and validators manager.


## State Variables
### _version

```solidity
uint8 private constant _version = 6
```


### __gap
This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps


```solidity
uint256[50] private __gap
```


## Functions
### constructor

Constructor

Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy's storage.

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(EthErc20VaultConstructorArgs memory args) EthErc20Vault(args);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`args`|`EthErc20VaultConstructorArgs`|The arguments for initializing the EthErc20Vault contract|


### initialize

Initializes or upgrades the EthErc20Vault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata params)
    external
    payable
    virtual
    override(IEthErc20Vault, EthErc20Vault)
    reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the EthErc20Vault contract|


### setFeeRecipient

Function for updating the fee recipient address. Can only be called by the admin.


```solidity
function setFeeRecipient(address) external virtual override(IVaultFee, VaultFee);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`||


### _setFeeRecipient

No-op: prevents __VaultFee_init from setting feeRecipient to admin.
The fee recipient is set directly to nodesManager in initialize() and cannot be changed later.


```solidity
function _setFeeRecipient(address) internal virtual override;
```

### setValidatorsManager

Function for updating the validators manager. Can only be called by the admin. Default is the DepositDataRegistry contract.


```solidity
function setValidatorsManager(address) external virtual override(IVaultValidators, VaultValidators);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`||


### vaultId

Vault Unique Identifier


```solidity
function vaultId() public pure virtual override(IVaultVersion, EthErc20Vault) returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The unique identifier of the Vault|


### version

Version


```solidity
function version() public pure virtual override(IVaultVersion, EthErc20Vault) returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|
