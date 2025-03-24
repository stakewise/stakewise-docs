# IKeeperRewards
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IKeeperRewards.sol)

**Inherits:**
[IKeeperOracles](/contracts/interfaces/IKeeperOracles.sol/interface.IKeeperOracles.md)

**Author:**
StakeWise

Defines the interface for the Keeper contract rewards


## Functions
### prevRewardsRoot

Previous Rewards Root


```solidity
function prevRewardsRoot() external view returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The previous merkle tree root of the rewards accumulated by the Vaults|


### rewardsRoot

Rewards Root


```solidity
function rewardsRoot() external view returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The latest merkle tree root of the rewards accumulated by the Vaults|


### rewardsNonce

Rewards Nonce


```solidity
function rewardsNonce() external view returns (uint64);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint64`|The nonce used for updating rewards merkle tree root|


### lastRewardsTimestamp

The last rewards update


```solidity
function lastRewardsTimestamp() external view returns (uint64);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint64`|The timestamp of the last rewards update|


### rewardsMinOracles

The minimum number of oracles required to update rewards


```solidity
function rewardsMinOracles() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The minimum number of oracles|


### rewardsDelay

The rewards delay


```solidity
function rewardsDelay() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The delay in seconds between rewards updates|


### rewards

Get last synced Vault cumulative reward


```solidity
function rewards(address vault) external view returns (int192 assets, uint64 nonce);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`int192`|The last synced reward assets|
|`nonce`|`uint64`|The last synced reward nonce|


### unlockedMevRewards

Get last unlocked shared MEV Vault cumulative reward


```solidity
function unlockedMevRewards(address vault) external view returns (uint192 assets, uint64 nonce);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint192`|The last synced reward assets|
|`nonce`|`uint64`|The last synced reward nonce|


### isHarvestRequired

Checks whether Vault must be harvested


```solidity
function isHarvestRequired(address vault) external view returns (bool);
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
function canHarvest(address vault) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if Vault can be harvested, `false` otherwise|


### canUpdateRewards

Checks whether rewards can be updated


```solidity
function canUpdateRewards() external view returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if rewards can be updated, `false` otherwise|


### isCollateralized

Checks whether the Vault has registered validators


```solidity
function isCollateralized(address vault) external view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if Vault is collateralized, `false` otherwise|


### updateRewards

Update rewards data


```solidity
function updateRewards(RewardsUpdateParams calldata params) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`RewardsUpdateParams`|The struct containing rewards update parameters|


### harvest

Harvest rewards. Can be called only by Vault.


```solidity
function harvest(HarvestParams calldata params)
    external
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
function setRewardsMinOracles(uint256 _rewardsMinOracles) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_rewardsMinOracles`|`uint256`|The new min number of oracles for confirming rewards update|


## Events
### RewardsUpdated
Event emitted on rewards update


```solidity
event RewardsUpdated(
    address indexed caller,
    bytes32 indexed rewardsRoot,
    uint256 avgRewardPerSecond,
    uint64 updateTimestamp,
    uint64 nonce,
    string rewardsIpfsHash
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`rewardsRoot`|`bytes32`|The new rewards merkle tree root|
|`avgRewardPerSecond`|`uint256`|The new average reward per second|
|`updateTimestamp`|`uint64`|The update timestamp used for rewards calculation|
|`nonce`|`uint64`|The nonce used for verifying signatures|
|`rewardsIpfsHash`|`string`|The new rewards IPFS hash|

### Harvested
Event emitted on Vault harvest


```solidity
event Harvested(address indexed vault, bytes32 indexed rewardsRoot, int256 totalAssetsDelta, uint256 unlockedMevDelta);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault|
|`rewardsRoot`|`bytes32`|The rewards merkle tree root|
|`totalAssetsDelta`|`int256`|The Vault total assets delta since last sync. Can be negative in case of penalty/slashing.|
|`unlockedMevDelta`|`uint256`|The Vault execution reward that can be withdrawn from shared MEV escrow. Only used by shared MEV Vaults.|

### RewardsMinOraclesUpdated
Event emitted on rewards min oracles number update


```solidity
event RewardsMinOraclesUpdated(uint256 oracles);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oracles`|`uint256`|The new minimum number of oracles required to update rewards|

## Structs
### Reward
A struct containing the last synced Vault's cumulative reward


```solidity
struct Reward {
    int192 assets;
    uint64 nonce;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`int192`|The Vault cumulative reward earned since the start. Can be negative in case of penalty/slashing.|
|`nonce`|`uint64`|The nonce of the last sync|

### UnlockedMevReward
A struct containing the last unlocked Vault's cumulative execution reward that can be withdrawn from shared MEV escrow. Only used by shared MEV Vaults.


```solidity
struct UnlockedMevReward {
    uint192 assets;
    uint64 nonce;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint192`|The shared MEV Vault's cumulative execution reward that can be withdrawn|
|`nonce`|`uint64`|The nonce of the last sync|

### RewardsUpdateParams
A struct containing parameters for rewards update


```solidity
struct RewardsUpdateParams {
    bytes32 rewardsRoot;
    uint256 avgRewardPerSecond;
    uint64 updateTimestamp;
    string rewardsIpfsHash;
    bytes signatures;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`rewardsRoot`|`bytes32`|The new rewards merkle root|
|`avgRewardPerSecond`|`uint256`|The new average reward per second|
|`updateTimestamp`|`uint64`|The update timestamp used for rewards calculation|
|`rewardsIpfsHash`|`string`|The new IPFS hash with all the Vaults' rewards for the new root|
|`signatures`|`bytes`|The concatenation of the Oracles' signatures|

### HarvestParams
A struct containing parameters for harvesting rewards. Can only be called by Vault.


```solidity
struct HarvestParams {
    bytes32 rewardsRoot;
    int160 reward;
    uint160 unlockedMevReward;
    bytes32[] proof;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`rewardsRoot`|`bytes32`|The rewards merkle root|
|`reward`|`int160`|The Vault cumulative reward earned since the start. Can be negative in case of penalty/slashing.|
|`unlockedMevReward`|`uint160`|The Vault cumulative execution reward that can be withdrawn from shared MEV escrow. Only used by shared MEV Vaults.|
|`proof`|`bytes32[]`|The proof to verify that Vault's reward is correct|

