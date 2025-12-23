---
title: GnoPrivErc20Vault
sidebar_position: 5
description: "Gnosis staking vault with whitelist and ERC-20 token functionality"
---

# GnoPrivErc20Vault

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/gnosis/GnoPrivErc20Vault.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [GnoErc20Vault →](./GnoErc20Vault), [VaultWhitelist →](../modules/VaultWhitelist), IGnoPrivErc20Vault

Defines the Gnosis staking Vault with whitelist and ERC-20 token


## Functions
### constructor

:::custom-notes[Note]
oz-upgrades-unsafe-allow: constructor
:::


```solidity
constructor(GnoErc20VaultConstructorArgs memory args) GnoErc20Vault(args);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`args`|`GnoErc20VaultConstructorArgs`|The arguments for initializing the GnoErc20Vault contract|


### initialize

Initializes or upgrades the GnoErc20Vault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata params)
    external
    virtual
    override(IGnoErc20Vault, GnoErc20Vault)
    reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the GnoErc20Vault contract|


### deposit

Deposit GNO to the Vault


```solidity
function deposit(uint256 assets, address receiver, address referrer)
    public
    virtual
    override(IVaultGnoStaking, VaultGnoStaking)
    returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of GNO to deposit|
|`receiver`|`address`|The address that will receive Vault's shares|
|`referrer`|`address`|The address of the referrer. Set to zero address if not used.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares minted|


### mintOsToken

Mints OsToken shares


```solidity
function mintOsToken(address receiver, uint256 osTokenShares, address referrer)
    public
    virtual
    override(IVaultOsToken, VaultOsToken)
    returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the minted OsToken shares|
|`osTokenShares`|`uint256`|The number of OsToken shares to mint to the receiver. To mint the maximum amount of shares, use 2^256 - 1.|
|`referrer`|`address`|The address of the referrer|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The number of assets minted to the receiver|


### vaultId

Vault Unique Identifier


```solidity
function vaultId() public pure virtual override(IVaultVersion, GnoErc20Vault) returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The unique identifier of the Vault|


### version

Version


```solidity
function version() public pure virtual override(IVaultVersion, GnoErc20Vault) returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|

