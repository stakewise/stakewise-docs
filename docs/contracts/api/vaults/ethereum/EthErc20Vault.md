---
title: EthErc20Vault
sidebar_position: 4
description: "Ethereum staking vault with ERC-20 token functionality"
---

# EthErc20Vault

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/ethereum/EthErc20Vault.sol)

**Inherits:** [VaultImmutables](../modules/VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [VaultAdmin](../modules/VaultAdmin), [VaultVersion](../modules/VaultVersion), [VaultFee](../modules/VaultFee), [VaultState](../modules/VaultState), [VaultValidators](../modules/VaultValidators), [VaultEnterExit](../modules/VaultEnterExit), [VaultOsToken](../modules/VaultOsToken), [VaultMev](../modules/VaultMev), [VaultToken](../modules/VaultToken), [VaultEthStaking](../modules/VaultEthStaking), [Multicall](../../base/Multicall), IEthErc20Vault

Defines the Ethereum staking Vault with ERC-20 token


## State Variables
### _version

```solidity
uint8 private constant _version = 5
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
constructor(EthErc20VaultConstructorArgs memory args)
    VaultImmutables(args.keeper, args.vaultsRegistry)
    VaultValidators(
        args.depositDataRegistry,
        args.validatorsRegistry,
        args.validatorsWithdrawals,
        args.validatorsConsolidations,
        args.consolidationsChecker
    )
    VaultEnterExit(args.exitingAssetsClaimDelay)
    VaultOsToken(args.osTokenVaultController, args.osTokenConfig, args.osTokenVaultEscrow)
    VaultMev(args.sharedMevEscrow);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`args`|`EthErc20VaultConstructorArgs`|The arguments for initializing the EthErc20Vault contract|


### initialize

Initializes or upgrades the EthErc20Vault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata params) external payable virtual override reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the EthErc20Vault contract|


### depositAndMintOsToken

Deposits assets to the vault and mints OsToken shares to the receiver


```solidity
function depositAndMintOsToken(address receiver, uint256 osTokenShares, address referrer)
    public
    payable
    override
    returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address to receive the OsToken|
|`osTokenShares`|`uint256`|The amount of OsToken shares to mint. If set to type(uint256).max, max OsToken shares will be minted.|
|`referrer`|`address`|The address of the referrer|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of OsToken assets minted|


### updateStateAndDepositAndMintOsToken

Updates the state, deposits assets to the vault and mints OsToken shares to the receiver


```solidity
function updateStateAndDepositAndMintOsToken(
    address receiver,
    uint256 osTokenShares,
    address referrer,
    IKeeperRewards.HarvestParams calldata harvestParams
) external payable override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address to receive the OsToken|
|`osTokenShares`|`uint256`|The amount of OsToken shares to mint. If set to type(uint256).max, max OsToken shares will be minted.|
|`referrer`|`address`|The address of the referrer|
|`harvestParams`|`IKeeperRewards.HarvestParams`|The parameters for the harvest|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of OsToken assets minted|


### transfer

Moves `amount` tokens from the caller's account to `to`.


```solidity
function transfer(address to, uint256 amount) public virtual override(IERC20, ERC20Upgradeable) returns (bool);
```

### transferFrom

Moves `amount` tokens from `from` to `to` using the allowance mechanism.
`amount` is then deducted from the caller's allowance.


```solidity
function transferFrom(address from, address to, uint256 amount)
    public
    virtual
    override(IERC20, ERC20Upgradeable)
    returns (bool);
```

### transferOsTokenPositionToEscrow

Transfers minted osToken shares to the OsTokenVaultEscrow contract, enters the exit queue for staked assets


```solidity
function transferOsTokenPositionToEscrow(uint256 osTokenShares)
    public
    virtual
    override(IVaultOsToken, VaultOsToken)
    returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenShares`|`uint256`|The number of osToken shares to transfer|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The exit position ticket|


### enterExitQueue

Locks shares to the exit queue. The shares continue earning rewards until they will be burned by the Vault.

For ERC-20 vault variants, balanceOf(vault) does not reflect queued exit shares despite the emitted Transfer event.


```solidity
function enterExitQueue(uint256 shares, address receiver)
    public
    virtual
    override(IVaultEnterExit, VaultEnterExit, VaultOsToken)
    returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares to lock|
|`receiver`|`address`|The address that will receive assets upon withdrawal|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket of the exit queue. Returns uint256 max if no ticket created.|


### donateShares

Donates shares to the Vault by burning them from the caller,
increasing the value per share for remaining holders


```solidity
function donateShares(uint256 shares) public virtual override(IVaultState, VaultState, VaultOsToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares to donate|


### vaultId

Vault Unique Identifier


```solidity
function vaultId() public pure virtual override(IVaultVersion, VaultVersion) returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The unique identifier of the Vault|


### version

Version


```solidity
function version() public pure virtual override(IVaultVersion, VaultVersion) returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|


### _updateExitQueue

Internal function that must be used to process exit queue


```solidity
function _updateExitQueue() internal virtual override(VaultState, VaultToken) returns (uint256 burnedShares);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`burnedShares`|`uint256`|The total amount of burned shares|


### _mintShares

Internal function for minting shares


```solidity
function _mintShares(address owner, uint256 shares) internal virtual override(VaultState, VaultToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner to mint shares to|
|`shares`|`uint256`|The number of shares to mint|


### _burnShares

Internal function for burning shares


```solidity
function _burnShares(address owner, uint256 shares) internal virtual override(VaultState, VaultToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner to burn shares for|
|`shares`|`uint256`|The number of shares to burn|


### __EthErc20Vault_upgrade

Upgrades the EthErc20Vault contract


```solidity
function __EthErc20Vault_upgrade() internal;
```

### __EthErc20Vault_init

Initializes the EthErc20Vault contract


```solidity
function __EthErc20Vault_init(address admin, address ownMevEscrow, EthErc20VaultInitParams memory params)
    internal
    onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`admin`|`address`|The address of the admin of the Vault|
|`ownMevEscrow`|`address`|The address of the MEV escrow owned by the Vault. Zero address if shared MEV escrow is used.|
|`params`|`EthErc20VaultInitParams`|The decoded parameters for initializing the EthErc20Vault contract|
