# IRewardSplitter
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IRewardSplitter.sol)

**Inherits:**
[IMulticall](/contracts/interfaces/IMulticall.sol/interface.IMulticall.md)

**Author:**
StakeWise

Defines the interface for the RewardSplitter contract


## Functions
### vault

The vault to which the RewardSplitter is connected


```solidity
function vault() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the vault|


### totalShares

The total number of shares in the splitter


```solidity
function totalShares() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total number of shares|


### exitPositions

Returns the address of shareholder on behalf of which the rewards are claimed


```solidity
function exitPositions(uint256 exitPosition) external view returns (address onBehalf);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`exitPosition`|`uint256`|The position in the exit queue|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`onBehalf`|`address`|The address of shareholder|


### isClaimOnBehalfEnabled

Returns whether the claim on behalf is enabled


```solidity
function isClaimOnBehalfEnabled() external view returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if the claim on behalf is enabled, `false` otherwise|


### totalRewards

The total amount of unclaimed rewards in the splitter


```solidity
function totalRewards() external view returns (uint128);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|The total amount of rewards|


### initialize

Initializes the RewardSplitter contract


```solidity
function initialize(address _vault) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_vault`|`address`|The address of the vault to which the RewardSplitter will be connected|


### setClaimOnBehalf

Sets the flag indicating whether the claim on behalf is enabled.


```solidity
function setClaimOnBehalf(bool enabled) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`enabled`|`bool`|The flag indicating whether the claim on behalf is enabled Can only be called by the vault admin.|


### sharesOf

Retrieves the amount of splitter shares for the given account.
The shares are used to calculate the amount of rewards the account is entitled to.


```solidity
function sharesOf(address account) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to get shares for|


### rewardsOf

Retrieves the amount of rewards the account is entitled to.
The rewards are calculated based on the amount of shares the account has.
Note, rewards must be synced using the `syncRewards` function.


```solidity
function rewardsOf(address account) external view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to get rewards for|


### canSyncRewards

Checks whether new rewards can be synced from the vault.


```solidity
function canSyncRewards() external view returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if new rewards can be synced, false otherwise|


### increaseShares

Increases the amount of shares for the given account. Can only be called by the owner.


```solidity
function increaseShares(address account, uint128 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to increase shares for|
|`amount`|`uint128`|The amount of shares to add|


### decreaseShares

Decreases the amount of shares for the given account. Can only be called by the owner.


```solidity
function decreaseShares(address account, uint128 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to decrease shares for|
|`amount`|`uint128`|The amount of shares to deduct|


### updateVaultState

Updates the vault state. Can be used in multicall to update state, sync rewards and withdraw them.


```solidity
function updateVaultState(IKeeperRewards.HarvestParams calldata harvestParams) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`harvestParams`|`IKeeperRewards.HarvestParams`|The harvest params to use for updating the vault state|


### claimVaultTokens

Transfers the vault tokens to the given account. Can only be called for the vault with ERC-20 token.


```solidity
function claimVaultTokens(uint256 rewards, address receiver) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`rewards`|`uint256`|The amount of vault tokens to transfer|
|`receiver`|`address`|The address of the account to transfer tokens to|


### enterExitQueue

Sends the rewards to the exit queue


```solidity
function enterExitQueue(uint256 rewards, address receiver) external returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`rewards`|`uint256`|The amount of rewards to send to the exit queue|
|`receiver`|`address`|The address that will claim exited assets|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket of the exit queue|


### enterExitQueueOnBehalf

Enters the exit queue on behalf of the shareholder. Can only be called if claim on behalf is enabled.


```solidity
function enterExitQueueOnBehalf(uint256 rewards, address onBehalf) external returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`rewards`|`uint256`|The amount of rewards to send to the exit queue|
|`onBehalf`|`address`|The address of the account on behalf of which the rewards are sent to the exit queue|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket of the exit queue|


### claimExitedAssetsOnBehalf

Claims the exited assets from the vault.


```solidity
function claimExitedAssetsOnBehalf(uint256 positionTicket, uint256 timestamp, uint256 exitQueueIndex) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket in the exit queue|
|`timestamp`|`uint256`|The timestamp when the shares entered the exit queue|
|`exitQueueIndex`|`uint256`|The exit queue index of the exit request|


### syncRewards

Syncs the rewards from the vault to the splitter. The vault state must be up-to-date.


```solidity
function syncRewards() external;
```

## Events
### ClaimOnBehalfUpdated
Event emitted when the claim on behalf flag is updated


```solidity
event ClaimOnBehalfUpdated(address caller, bool enabled);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the account that called the function|
|`enabled`|`bool`|The flag indicating whether the claim on behalf is enabled|

### SharesIncreased
Event emitted when the number of shares is increased for an account


```solidity
event SharesIncreased(address indexed account, uint256 amount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account for which the shares were increased|
|`amount`|`uint256`|The amount of shares that were added|

### SharesDecreased
Event emitted when the number of shares is decreased for an account


```solidity
event SharesDecreased(address indexed account, uint256 amount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account for which the shares were decreased|
|`amount`|`uint256`|The amount of shares that were deducted|

### RewardsSynced
Event emitted when the rewards are synced from the vault.


```solidity
event RewardsSynced(uint256 totalRewards, uint256 rewardPerShare);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`totalRewards`|`uint256`|The new total amount of rewards|
|`rewardPerShare`|`uint256`|The new reward per share|

### RewardsWithdrawn
Event emitted when the rewards are withdrawn from the splitter


```solidity
event RewardsWithdrawn(address indexed account, uint256 amount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account for which the rewards were withdrawn|
|`amount`|`uint256`|The amount of rewards that were withdrawn|

### ExitQueueEnteredOnBehalf
Event emitted when the rewards are claimed on behalf


```solidity
event ExitQueueEnteredOnBehalf(address indexed onBehalf, uint256 positionTicket, uint256 amount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`onBehalf`|`address`|The address of the account on behalf of which the rewards were claimed|
|`positionTicket`|`uint256`|The position ticket in the exit queue|
|`amount`|`uint256`|The amount of rewards that were claimed|

### ExitedAssetsClaimedOnBehalf
Event emitted when the exited assets are claimed on behalf


```solidity
event ExitedAssetsClaimedOnBehalf(address indexed onBehalf, uint256 positionTicket, uint256 amount);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`onBehalf`|`address`|The address of the account on behalf of which the assets were claimed|
|`positionTicket`|`uint256`|The position ticket in the exit queue|
|`amount`|`uint256`|The amount of assets that were claimed|

## Errors
### NotHarvested

```solidity
error NotHarvested();
```

### InvalidAccount

```solidity
error InvalidAccount();
```

### InvalidAmount

```solidity
error InvalidAmount();
```

## Structs
### ShareHolder
Structure for storing information about share holder


```solidity
struct ShareHolder {
    uint128 shares;
    uint128 rewardPerShare;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint128`|The amount of shares the account has|
|`rewardPerShare`|`uint128`|The last synced reward per share|

