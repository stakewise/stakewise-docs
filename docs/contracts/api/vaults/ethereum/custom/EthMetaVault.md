---
title: EthMetaVault
sidebar_position: 2
description: "Meta vault that delegates stake to sub-vaults on Ethereum"
---

# EthMetaVault

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/ethereum/custom/EthMetaVault.sol)

**Inherits:** [VaultImmutables →](../../modules/VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [VaultAdmin →](../../modules/VaultAdmin), [VaultVersion →](../../modules/VaultVersion), [VaultFee →](../../modules/VaultFee), [VaultState →](../../modules/VaultState), [VaultEnterExit →](../../modules/VaultEnterExit), [VaultOsToken →](../../modules/VaultOsToken), [VaultSubVaults →](../../modules/VaultSubVaults), Multicall, IEthMetaVault

Defines the Meta Vault that delegates stake to the sub vaults on Ethereum

## Structs
### EthMetaVaultConstructorArgs
Struct for deploying the EthMetaVault contract


```solidity
struct EthMetaVaultConstructorArgs {
    address keeper;
    address vaultsRegistry;
    address osTokenVaultController;
    address osTokenConfig;
    address osTokenVaultEscrow;
    address curatorsRegistry;
    uint64 exitingAssetsClaimDelay;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`keeper`|`address`|The address of the Keeper contract|
|`vaultsRegistry`|`address`|The address of the VaultsRegistry contract|
|`osTokenVaultController`|`address`|The address of the OsTokenVaultController contract|
|`osTokenConfig`|`address`|The address of the OsTokenConfig contract|
|`osTokenVaultEscrow`|`address`|The address of the OsTokenVaultEscrow contract|
|`curatorsRegistry`|`address`|The address of the CuratorsRegistry contract|
|`exitingAssetsClaimDelay`|`uint64`|The delay after which the assets can be claimed after exiting from staking|

### EthMetaVaultInitParams
Struct for initializing the EthMetaVault contract


```solidity
struct EthMetaVaultInitParams {
    address subVaultsCurator;
    uint256 capacity;
    uint16 feePercent;
    string metadataIpfsHash;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`subVaultsCurator`|`address`|The address of the initial sub-vaults curator|
|`capacity`|`uint256`|The Vault stops accepting deposits after exceeding the capacity|
|`feePercent`|`uint16`|The fee percent that is charged by the Vault|
|`metadataIpfsHash`|`string`|The IPFS hash of the Vault's metadata file|


## Functions
### constructor

Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy's storage.

:::custom-notes[Note]
oz-upgrades-unsafe-allow: constructor
:::


```solidity
constructor(EthMetaVaultConstructorArgs memory args)
    VaultImmutables(args.keeper, args.vaultsRegistry)
    VaultEnterExit(args.exitingAssetsClaimDelay)
    VaultOsToken(args.osTokenVaultController, args.osTokenConfig, args.osTokenVaultEscrow)
    VaultSubVaults(args.curatorsRegistry);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`args`|`EthMetaVaultConstructorArgs`|The arguments for initializing the EthMetaVault contract|


### initialize

Initializes or upgrades the EthMetaVault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata params) external payable virtual override reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the EthVault contract|


### isStateUpdateRequired

Check whether state update is required


```solidity
function isStateUpdateRequired() public view override(IVaultState, VaultState, VaultSubVaults) returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if state update is required, `false` otherwise|


### deposit

Deposit ETH to the Vault


```solidity
function deposit(address receiver, address referrer) public payable virtual override returns (uint256 shares);
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


### receive

Function for depositing using fallback function


```solidity
receive() external payable virtual;
```

### updateState


```solidity
function updateState(IKeeperRewards.HarvestParams calldata harvestParams)
    public
    override(IVaultState, VaultState, VaultSubVaults);
```

### enterExitQueue

Locks shares to the exit queue. The shares continue earning rewards until they will be burned by the Vault.


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


### updateStateAndDeposit

Updates Vault state and deposits ETH to the Vault


```solidity
function updateStateAndDeposit(
    address receiver,
    address referrer,
    IKeeperRewards.HarvestParams calldata harvestParams
) public payable virtual override returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive Vault's shares|
|`referrer`|`address`|The address of the referrer. Set to zero address if not used.|
|`harvestParams`|`IKeeperRewards.HarvestParams`|The parameters for harvesting Keeper rewards|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares minted|


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


### donateAssets

Donate assets to the Vault. Must transfer ETH together with the call.


```solidity
function donateAssets() external payable override;
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
