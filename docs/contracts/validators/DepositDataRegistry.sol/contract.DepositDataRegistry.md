# DepositDataRegistry
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/validators/DepositDataRegistry.sol)

**Inherits:**
[Multicall](/contracts/base/multicall.md), [IDepositDataRegistry](/contracts/interfaces/IDepositDataRegistry.sol/interface.IDepositDataRegistry.md)

**Author:**
StakeWise

Defines the functionality for the Vault's deposit data management


## State Variables
### _vaultsRegistry

```solidity
IVaultsRegistry private immutable _vaultsRegistry;
```


### depositDataIndexes
The vault deposit data index


```solidity
mapping(address => uint256) public override depositDataIndexes;
```


### depositDataRoots
The vault deposit data root


```solidity
mapping(address => bytes32) public override depositDataRoots;
```


### _depositDataManagers

```solidity
mapping(address => address) private _depositDataManagers;
```


### _migrated

```solidity
mapping(address => bool) private _migrated;
```


## Functions
### onlyValidVault

*Modifier to check if the caller is a valid vault*


```solidity
modifier onlyValidVault(address vault);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|


### constructor

*Constructor*


```solidity
constructor(address vaultsRegistry);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vaultsRegistry`|`address`|The address of the vaults registry contract|


### getDepositDataManager

The vault deposit data manager. Defaults to the vault admin if not set.


```solidity
function getDepositDataManager(address vault) public view override returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|depositDataManager The address of the deposit data manager|


### setDepositDataManager

Function for setting the deposit data manager for the vault. Can only be called by the vault admin.


```solidity
function setDepositDataManager(address vault, address depositDataManager) external override onlyValidVault(vault);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`depositDataManager`|`address`|The address of the new deposit data manager|


### setDepositDataRoot

Function for setting the deposit data root for the vault. Can only be called by the deposit data manager.


```solidity
function setDepositDataRoot(address vault, bytes32 depositDataRoot) external override onlyValidVault(vault);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`depositDataRoot`|`bytes32`|The new deposit data Merkle tree root|


### updateVaultState

Updates the vault state. Can be used in multicall to update state and register validator(s).


```solidity
function updateVaultState(address vault, IKeeperRewards.HarvestParams calldata harvestParams) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`harvestParams`|`IKeeperRewards.HarvestParams`|The harvest params to use for updating the vault state|


### registerValidator

Function for registering single validator


```solidity
function registerValidator(
    address vault,
    IKeeperValidators.ApprovalParams calldata keeperParams,
    bytes32[] calldata proof
) external override onlyValidVault(vault);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`keeperParams`|`IKeeperValidators.ApprovalParams`|The parameters for getting approval from Keeper oracles|
|`proof`|`bytes32[]`|The proof used to verify that the validator is part of the deposit data merkle tree|


### registerValidators

Function for registering multiple validators


```solidity
function registerValidators(
    address vault,
    IKeeperValidators.ApprovalParams calldata keeperParams,
    uint256[] calldata indexes,
    bool[] calldata proofFlags,
    bytes32[] calldata proof
) external override onlyValidVault(vault);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`keeperParams`|`IKeeperValidators.ApprovalParams`|The parameters for getting approval from Keeper oracles|
|`indexes`|`uint256[]`|The indexes of the leaves for the merkle tree multi proof verification|
|`proofFlags`|`bool[]`|The multi proof flags for the merkle tree verification|
|`proof`|`bytes32[]`|The proof used for the merkle tree verification|


### migrate

Function for migrating the deposit data of the Vault. Can only be called once by a vault during an upgrade.


```solidity
function migrate(bytes32 depositDataRoot, uint256 validatorIndex, address depositDataManager)
    external
    override
    onlyValidVault(msg.sender);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`depositDataRoot`|`bytes32`|The current deposit data root|
|`validatorIndex`|`uint256`|The current index of the next validator to be registered|
|`depositDataManager`|`address`|The address of the deposit data manager|


