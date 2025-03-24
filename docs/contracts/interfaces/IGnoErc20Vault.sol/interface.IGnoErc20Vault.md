# IGnoErc20Vault
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IGnoErc20Vault.sol)

**Inherits:**
[IVaultAdmin](/contracts/interfaces/IVaultAdmin.sol/interface.IVaultAdmin.md), [IVaultVersion](/contracts/interfaces/IVaultVersion.sol/interface.IVaultVersion.md), [IVaultFee](/contracts/interfaces/IVaultFee.sol/interface.IVaultFee.md), [IVaultState](/contracts/interfaces/IVaultState.sol/interface.IVaultState.md), [IVaultValidators](/contracts/interfaces/IVaultValidators.sol/interface.IVaultValidators.md), [IVaultEnterExit](/contracts/interfaces/IVaultEnterExit.sol/interface.IVaultEnterExit.md), [IVaultOsToken](/contracts/interfaces/IVaultOsToken.sol/interface.IVaultOsToken.md), [IVaultMev](/contracts/interfaces/IVaultMev.sol/interface.IVaultMev.md), [IVaultToken](/contracts/interfaces/IVaultToken.sol/interface.IVaultToken.md), [IVaultGnoStaking](/contracts/interfaces/IVaultGnoStaking.sol/interface.IVaultGnoStaking.md), [IMulticall](/contracts/interfaces/IMulticall.sol/interface.IMulticall.md)

**Author:**
StakeWise

Defines the interface for the GnoErc20Vault contract


## Functions
### initialize

Initializes or upgrades the GnoErc20Vault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata params) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the GnoErc20Vault contract|


## Structs
### GnoErc20VaultConstructorArgs
Struct for initializing the GnoErc20Vault contract


```solidity
struct GnoErc20VaultConstructorArgs {
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
    address gnoDaiDistributor;
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
|`gnoDaiDistributor`|`address`|The address of the GnoDaiDistributor contract|
|`exitingAssetsClaimDelay`|`uint256`|The delay after which the assets can be claimed after exiting from staking|

### GnoErc20VaultInitParams
*Struct for initializing the GnoErc20Vault contract*


```solidity
struct GnoErc20VaultInitParams {
    uint256 capacity;
    uint16 feePercent;
    string name;
    string symbol;
    string metadataIpfsHash;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`capacity`|`uint256`|The Vault stops accepting deposits after exceeding the capacity|
|`feePercent`|`uint16`|The fee percent that is charged by the Vault|
|`name`|`string`|The name of the ERC20 token|
|`symbol`|`string`|The symbol of the ERC20 token|
|`metadataIpfsHash`|`string`|The IPFS hash of the Vault's metadata file|

