---
title: EthFoxVault
sidebar_position: 2
description: "Custom Ethereum non-ERC20 vault with blocklist, own MEV and without osToken minting"
---

# EthFoxVault

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/ethereum/custom/EthFoxVault.sol)

**Inherits:** [VaultImmutables](../../modules/VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [VaultAdmin](../../modules/VaultAdmin), [VaultVersion](../../modules/VaultVersion), [VaultFee](../../modules/VaultFee), [VaultState](../../modules/VaultState), [VaultValidators](../../modules/VaultValidators), [VaultEnterExit](../../modules/VaultEnterExit), [VaultMev](../../modules/VaultMev), [VaultEthStaking](../../modules/VaultEthStaking), [VaultBlocklist](../../modules/VaultBlocklist), [Multicall](../../../base/Multicall), IEthFoxVault

Custom Ethereum non-ERC20 vault with blocklist, own MEV and without osToken minting.


## State Variables
### _version

```solidity
uint8 private constant _version = 2
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
its value would be shared among all proxies pointing to a given contract instead of each proxy’s storage.

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(EthFoxVaultConstructorArgs memory args)
    VaultImmutables(args.keeper, args.vaultsRegistry)
    VaultValidators(
        args.depositDataRegistry,
        args.validatorsRegistry,
        args.validatorsWithdrawals,
        args.validatorsConsolidations,
        args.consolidationsChecker
    )
    VaultEnterExit(args.exitingAssetsClaimDelay)
    VaultMev(args.sharedMevEscrow);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`args`|`EthFoxVaultConstructorArgs`|The arguments for initializing the EthFoxVault contract|


### initialize

Initializes or upgrades the EthFoxVault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata) external payable virtual override reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes`||


### deposit

Deposit ETH to the Vault


```solidity
function deposit(address receiver, address referrer)
    public
    payable
    virtual
    override(IVaultEthStaking, VaultEthStaking)
    returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive Vault's shares|
|`referrer`|`address`|The address of the referrer. Set to zero address if not used.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares minted|


### ejectUser

Ejects user from the Vault. Can only be called by the blocklist manager.
The ejected user will be added to the blocklist and all his shares will be sent to the exit queue.


```solidity
function ejectUser(address user) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The address of the user to eject|


### receive

Function for depositing using fallback function


```solidity
receive() external payable virtual override;
```

### vaultId


```solidity
function vaultId() public pure virtual override(IVaultVersion, VaultVersion) returns (bytes32);
```

### version

Version


```solidity
function version() public pure virtual override(IVaultVersion, VaultVersion) returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|
