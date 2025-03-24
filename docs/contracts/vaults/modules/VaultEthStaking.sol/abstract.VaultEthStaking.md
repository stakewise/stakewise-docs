# VaultEthStaking
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/modules/VaultEthStaking.sol)

**Inherits:**
Initializable, [VaultState](/contracts/vaults/modules/VaultState.sol/abstract.VaultState.md), [VaultValidators](/contracts/vaults/modules/VaultValidators.sol/abstract.VaultValidators.md), [VaultEnterExit](/contracts/vaults/modules/VaultEnterExit.sol/abstract.VaultEnterExit.md), [VaultMev](/contracts/vaults/modules/VaultMev.sol/abstract.VaultMev.md), [IVaultEthStaking](/contracts/interfaces/IVaultEthStaking.sol/interface.IVaultEthStaking.md)

**Author:**
StakeWise

Defines the Ethereum staking functionality for the Vault


## State Variables
### _securityDeposit

```solidity
uint256 private constant _securityDeposit = 1e9;
```


### __gap
*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


```solidity
uint256[50] private __gap;
```


## Functions
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


### updateStateAndDeposit

Updates Vault state and deposits ETH to the Vault


```solidity
function updateStateAndDeposit(address receiver, address referrer, IKeeperRewards.HarvestParams calldata harvestParams)
    public
    payable
    virtual
    override
    returns (uint256 shares);
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


### receive

*Function for depositing using fallback function*


```solidity
receive() external payable virtual;
```

### receiveFromMevEscrow

Used by MEV escrow to transfer ETH.


```solidity
function receiveFromMevEscrow() external payable override;
```

### _registerValidator

*Internal function for registering validator*


```solidity
function _registerValidator(bytes calldata validator, bool isTopUp, bool isV1Validator)
    internal
    virtual
    override
    returns (uint256 depositAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validator`|`bytes`|The validator registration data|
|`isTopUp`|`bool`|Whether the registration is a balance top-up|
|`isV1Validator`|`bool`|Whether the validator is V1 or V2|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`depositAmount`|`uint256`|The amount of assets that was deposited|


### _vaultAssets

*Internal function for retrieving the total assets stored in the Vault.
NB! Assets can be forcibly sent to the vault, the returned value must be used with caution*


```solidity
function _vaultAssets() internal view virtual override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of assets stored in the Vault|


### _transferVaultAssets

*Internal function for transferring assets from the Vault to the receiver*


```solidity
function _transferVaultAssets(address receiver, uint256 assets) internal virtual override nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the assets|
|`assets`|`uint256`|The number of assets to transfer|


### _validatorMinEffectiveBalance

*Internal function for fetching validator minimum effective balance*


```solidity
function _validatorMinEffectiveBalance() internal pure virtual override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The minimum effective balance for the validator|


### _validatorMaxEffectiveBalance

*Internal function for fetching validator maximum effective balance*


```solidity
function _validatorMaxEffectiveBalance() internal pure virtual override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The maximum effective balance for the validator|


### __VaultEthStaking_init

*Initializes the VaultEthStaking contract*


```solidity
function __VaultEthStaking_init() internal onlyInitializing;
```

