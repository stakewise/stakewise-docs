# IEthVault
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IEthVault.sol)

**Inherits:**
[IVaultAdmin](/contracts/interfaces/IVaultAdmin.sol/interface.IVaultAdmin.md), [IVaultVersion](/contracts/interfaces/IVaultVersion.sol/interface.IVaultVersion.md), [IVaultFee](/contracts/interfaces/IVaultFee.sol/interface.IVaultFee.md), [IVaultState](/contracts/interfaces/IVaultState.sol/interface.IVaultState.md), [IVaultValidators](/contracts/interfaces/IVaultValidators.sol/interface.IVaultValidators.md), [IVaultEnterExit](/contracts/interfaces/IVaultEnterExit.sol/interface.IVaultEnterExit.md), [IVaultOsToken](/contracts/interfaces/IVaultOsToken.sol/interface.IVaultOsToken.md), [IVaultMev](/contracts/interfaces/IVaultMev.sol/interface.IVaultMev.md), [IVaultEthStaking](/contracts/interfaces/IVaultEthStaking.sol/interface.IVaultEthStaking.md), [IMulticall](/contracts/interfaces/IMulticall.sol/interface.IMulticall.md)

**Author:**
StakeWise

Defines the interface for the EthVault contract


## Functions
### initialize

Initializes or upgrades the EthVault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata params) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the EthVault contract|


### depositAndMintOsToken

Deposits assets to the vault and mints OsToken shares to the receiver


```solidity
function depositAndMintOsToken(address receiver, uint256 osTokenShares, address referrer)
    external
    payable
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
) external payable returns (uint256);
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


## Structs
### EthVaultConstructorArgs
*Struct for deploying the EthVault contract*


```solidity
struct EthVaultConstructorArgs {
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
    uint64 exitingAssetsClaimDelay;
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
|`exitingAssetsClaimDelay`|`uint64`|The delay after which the assets can be claimed after exiting from staking|

### EthVaultInitParams
*Struct for initializing the EthVault contract*


```solidity
struct EthVaultInitParams {
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

