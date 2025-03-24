# EthFoxVault
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/ethereum/custom/EthFoxVault.sol)

**Inherits:**
[VaultImmutables](/contracts/vaults/modules/VaultImmutables.sol/abstract.VaultImmutables.md), Initializable, [VaultAdmin](/contracts/vaults/modules/VaultAdmin.sol/abstract.VaultAdmin.md), [VaultVersion](/contracts/vaults/modules/VaultVersion.sol/abstract.VaultVersion.md), [VaultFee](/contracts/vaults/modules/VaultFee.sol/abstract.VaultFee.md), [VaultState](/contracts/vaults/modules/VaultState.sol/abstract.VaultState.md), [VaultValidators](/contracts/vaults/modules/VaultValidators.sol/abstract.VaultValidators.md), [VaultEnterExit](/contracts/vaults/modules/VaultEnterExit.sol/abstract.VaultEnterExit.md), [VaultMev](/contracts/vaults/modules/VaultMev.sol/abstract.VaultMev.md), [VaultEthStaking](/contracts/vaults/modules/VaultEthStaking.sol/abstract.VaultEthStaking.md), [VaultBlocklist](/contracts/vaults/modules/VaultBlocklist.sol/abstract.VaultBlocklist.md), [Multicall](/contracts/base/multicall.md), [IEthFoxVault](/contracts/interfaces/IEthFoxVault.sol/interface.IEthFoxVault.md)

**Author:**
StakeWise

Custom Ethereum non-ERC20 vault with blocklist, own MEV and without osToken minting.


## State Variables
### _version

```solidity
uint8 private constant _version = 2;
```


### __gap
*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


```solidity
uint256[50] private __gap;
```


## Functions
### constructor

*Constructor*

*Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy’s storage.*

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(
    address keeper,
    address vaultsRegistry,
    address validatorsRegistry,
    address validatorsWithdrawals,
    address validatorsConsolidations,
    address consolidationsChecker,
    address sharedMevEscrow,
    address depositDataRegistry,
    uint256 exitingAssetsClaimDelay
)
    VaultImmutables(keeper, vaultsRegistry)
    VaultValidators(
        depositDataRegistry,
        validatorsRegistry,
        validatorsWithdrawals,
        validatorsConsolidations,
        consolidationsChecker
    )
    VaultEnterExit(exitingAssetsClaimDelay)
    VaultMev(sharedMevEscrow);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`keeper`|`address`|The address of the Keeper contract|
|`vaultsRegistry`|`address`|The address of the VaultsRegistry contract|
|`validatorsRegistry`|`address`|The contract address used for registering validators in beacon chain|
|`validatorsWithdrawals`|`address`|The contract address used for withdrawing validators in beacon chain|
|`validatorsConsolidations`|`address`|The contract address used for consolidating validators in beacon chain|
|`consolidationsChecker`|`address`|The contract address used for checking consolidations|
|`sharedMevEscrow`|`address`|The address of the shared MEV escrow|
|`depositDataRegistry`|`address`|The address of the DepositDataRegistry contract|
|`exitingAssetsClaimDelay`|`uint256`|The delay after which the assets can be claimed after exiting from staking|


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

*Function for depositing using fallback function*


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


### _checkCanWithdrawValidators

*Internal function for checking whether the caller can withdraw validators*


```solidity
function _checkCanWithdrawValidators(bytes calldata validators, bytes calldata validatorsManagerSignature)
    internal
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenated validators data|
|`validatorsManagerSignature`|`bytes`|The optional signature from the validators manager|


