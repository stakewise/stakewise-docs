---
title: GnoVault
sidebar_position: 7
description: "Core Gnosis staking vault implementation"
---

# GnoVault

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/gnosis/GnoVault.sol)

**Inherits:** [VaultImmutables →](../modules/VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [VaultAdmin →](../modules/VaultAdmin), [VaultVersion →](../modules/VaultVersion), [VaultFee →](../modules/VaultFee), [VaultState →](../modules/VaultState), [VaultValidators →](../modules/VaultValidators), [VaultEnterExit →](../modules/VaultEnterExit), [VaultOsToken →](../modules/VaultOsToken), [VaultMev →](../modules/VaultMev), [VaultGnoStaking →](../modules/VaultGnoStaking), Multicall, IGnoVault

Defines the Gnosis staking Vault


## Structs
### GnoVaultConstructorArgs
Struct for initializing the GnoVault contract


```solidity
struct GnoVaultConstructorArgs {
    address keeper;
    address vaultsRegistry;
    address validatorsRegistry;
    address validatorsWithdrawals;
    address validatorsConsolidations;
    address consolidationsChecker;
    address osTokenVaultController;
    address osTokenConfig;
    address osTokenVaultEscrow;
    address sharedMevEscrow;
    address depositDataRegistry;
    address gnoToken;
    address tokensConverterFactory;
    uint256 exitingAssetsClaimDelay;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`keeper`|`address`|The address of the Keeper contract|
|`vaultsRegistry`|`address`|The address of the VaultsRegistry contract|
|`validatorsRegistry`|`address`|The contract address used for registering validators in beacon chain|
|`validatorsWithdrawals`|`address`|The contract address used for withdrawing validators in beacon chain|
|`validatorsConsolidations`|`address`|The contract address used for consolidating validators in beacon chain|
|`consolidationsChecker`|`address`|The contract address used for checking consolidations|
|`osTokenVaultController`|`address`|The address of the OsTokenVaultController contract|
|`osTokenConfig`|`address`|The address of the OsTokenConfig contract|
|`osTokenVaultEscrow`|`address`|The address of the OsTokenVaultEscrow contract|
|`sharedMevEscrow`|`address`|The address of the shared MEV escrow|
|`depositDataRegistry`|`address`|The address of the DepositDataRegistry contract|
|`gnoToken`|`address`|The address of the GNO token|
|`tokensConverterFactory`|`address`|The address of the TokensConverterFactory contract|
|`exitingAssetsClaimDelay`|`uint256`|The delay after which the assets can be claimed after exiting from staking|

### GnoVaultInitParams
Struct for initializing the GnoVault contract


```solidity
struct GnoVaultInitParams {
    uint256 capacity;
    uint16 feePercent;
    string metadataIpfsHash;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`capacity`|`uint256`|The Vault stops accepting deposits after exceeding the capacity|
|`feePercent`|`uint16`|The fee percent that is charged by the Vault|
|`metadataIpfsHash`|`string`|The IPFS hash of the Vault's metadata file|

## Functions
### constructor

:::custom-notes[Note]
oz-upgrades-unsafe-allow: constructor
:::


```solidity
constructor(GnoVaultConstructorArgs memory args)
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
    VaultMev(args.sharedMevEscrow)
    VaultGnoStaking(args.gnoToken, args.tokensConverterFactory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`args`|`GnoVaultConstructorArgs`|The arguments for initializing the GnoVault contract|


### initialize

Initializes or upgrades the GnoVault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata params) external virtual override reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the GnoVault contract|


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
