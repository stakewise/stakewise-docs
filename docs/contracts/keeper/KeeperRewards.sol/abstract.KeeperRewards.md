# KeeperRewards
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/keeper/KeeperRewards.sol)

**Inherits:**
[KeeperOracles](/contracts/keeper/KeeperOracles.sol/abstract.KeeperOracles.md), [IKeeperRewards](/contracts/interfaces/IKeeperRewards.sol/interface.IKeeperRewards.md)

**Author:**
StakeWise

Defines the functionality for updating Vaults' and OsToken rewards


## State Variables
### _rewardsUpdateTypeHash

```solidity
bytes32 private constant _rewardsUpdateTypeHash = keccak256(
    "KeeperRewards(bytes32 rewardsRoot,string rewardsIpfsHash,uint256 avgRewardPerSecond,uint64 updateTimestamp,uint64 nonce)"
);
```


### _maxAvgRewardPerSecond

```solidity
uint256 private immutable _maxAvgRewardPerSecond;
```


### _sharedMevEscrow

```solidity
address private immutable _sharedMevEscrow;
```


### _osTokenVaultController

```solidity
IOsTokenVaultController private immutable _osTokenVaultController;
```


### _vaultsRegistry

```solidity
IVaultsRegistry internal immutable _vaultsRegistry;
```


### rewardsDelay
The rewards delay


```solidity
uint256 public immutable override rewardsDelay;
```


### rewards
Get last synced Vault cumulative reward


```solidity
mapping(address => Reward) public override rewards;
```


### unlockedMevRewards
Get last unlocked shared MEV Vault cumulative reward


```solidity
mapping(address => UnlockedMevReward) public override unlockedMevRewards;
```


### prevRewardsRoot
Previous Rewards Root


```solidity
bytes32 public override prevRewardsRoot;
```


### rewardsRoot
Rewards Root


```solidity
bytes32 public override rewardsRoot;
```


### rewardsMinOracles
The minimum number of oracles required to update rewards


```solidity
uint256 public override rewardsMinOracles;
```


### lastRewardsTimestamp
The last rewards update


```solidity
uint64 public override lastRewardsTimestamp;
```


### rewardsNonce
Rewards Nonce


```solidity
uint64 public override rewardsNonce;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(
    address sharedMevEscrow,
    IVaultsRegistry vaultsRegistry,
    IOsTokenVaultController osTokenVaultController,
    uint256 _rewardsDelay,
    uint256 maxAvgRewardPerSecond
);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sharedMevEscrow`|`address`|The address of the shared MEV escrow contract|
|`vaultsRegistry`|`IVaultsRegistry`|The address of the VaultsRegistry contract|
|`osTokenVaultController`|`IOsTokenVaultController`|The address of the OsTokenVaultController contract|
|`_rewardsDelay`|`uint256`|The delay in seconds between rewards updates|
|`maxAvgRewardPerSecond`|`uint256`|The maximum possible average reward per second|


### updateRewards

Update rewards data


```solidity
function updateRewards(RewardsUpdateParams calldata params) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`RewardsUpdateParams`|The struct containing rewards update parameters|


### canUpdateRewards

Checks whether rewards can be updated


```solidity
function canUpdateRewards() public view override returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if rewards can be updated, `false` otherwise|


### isHarvestRequired

Checks whether Vault must be harvested


```solidity
function isHarvestRequired(address vault) external view override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if the Vault requires harvesting, `false` otherwise|


### canHarvest

Checks whether the Vault can be harvested


```solidity
function canHarvest(address vault) external view override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if Vault can be harvested, `false` otherwise|


### isCollateralized

Checks whether the Vault has registered validators


```solidity
function isCollateralized(address vault) public view override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if Vault is collateralized, `false` otherwise|


### harvest

Harvest rewards. Can be called only by Vault.


```solidity
function harvest(HarvestParams calldata params)
    external
    override
    returns (int256 totalAssetsDelta, uint256 unlockedMevDelta, bool harvested);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`HarvestParams`|The struct containing rewards harvesting parameters|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`totalAssetsDelta`|`int256`|The total reward/penalty accumulated by the Vault since the last sync|
|`unlockedMevDelta`|`uint256`|The Vault execution reward that can be withdrawn from shared MEV escrow. Only used by shared MEV Vaults.|
|`harvested`|`bool`|`true` when the rewards were harvested, `false` otherwise|


### setRewardsMinOracles

Set min number of oracles for confirming rewards update. Can only be called by the owner.


```solidity
function setRewardsMinOracles(uint256 _rewardsMinOracles) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rewardsMinOracles`|`uint256`|The new min number of oracles for confirming rewards update|


### _setRewardsMinOracles

*Internal function for updating rewardsMinOracles*


```solidity
function _setRewardsMinOracles(uint256 _rewardsMinOracles) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rewardsMinOracles`|`uint256`|The new value of rewardsMinOracles|


### _collateralize

*Collateralize Vault so that it must be harvested in future reward updates*


```solidity
function _collateralize(address vault) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault|


