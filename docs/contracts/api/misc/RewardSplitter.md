---
title: RewardSplitter
sidebar_position: 3
description: "Abstract contract for splitting vault rewards among shareholders based on configured shares"
---

# RewardSplitter

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/misc/RewardSplitter.sol)

**Inherits:** IRewardSplitter, [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [Multicall →](../base/Multicall)

The RewardSplitter can be used to split the rewards of the fee recipient of the Vault based on configured shares.


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


## Events
### ClaimerUpdated
Event emitted when the claim on behalf flag is updated


```solidity
event ClaimerUpdated(address indexed caller, address indexed claimer);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the account that called the function|
|`claimer`|`address`|The address of the claimer that can claim rewards on behalf of shareholders|

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

## Functions
### onlyVaultAdmin

Modifier to check if the caller is the vault admin


```solidity
modifier onlyVaultAdmin() ;
```

### setClaimer

Sets the claimer address that can claim rewards on behalf of shareholders.


```solidity
function setClaimer(address _claimer) external onlyVaultAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_claimer`|`address`|The address of the claimer Can only be called by the vault admin.|


### totalRewards

The total amount of unclaimed rewards in the splitter


```solidity
function totalRewards() external view override returns (uint128);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|The total amount of rewards|


### sharesOf

Retrieves the amount of splitter shares for the given account.
The shares are used to calculate the amount of rewards the account is entitled to.


```solidity
function sharesOf(address account) external view override returns (uint256);
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
function rewardsOf(address account) public view override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to get rewards for|


### canSyncRewards

Checks whether new rewards can be synced from the vault.


```solidity
function canSyncRewards() external view override returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if new rewards can be synced, false otherwise|


### increaseShares

Increases the amount of shares for the given account. Can only be called by the owner.


```solidity
function increaseShares(address account, uint128 amount) external override onlyVaultAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to increase shares for|
|`amount`|`uint128`|The amount of shares to add|


### decreaseShares

Decreases the amount of shares for the given account. Can only be called by the owner.


```solidity
function decreaseShares(address account, uint128 amount) external override onlyVaultAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to decrease shares for|
|`amount`|`uint128`|The amount of shares to deduct|


### updateVaultState

Updates the vault state. Can be used in multicall to update state, sync rewards and withdraw them.


```solidity
function updateVaultState(IKeeperRewards.HarvestParams calldata harvestParams) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`harvestParams`|`IKeeperRewards.HarvestParams`|The harvest params to use for updating the vault state|


### claimVaultTokens

Transfers the vault tokens to the given account. Can only be called for the vault with ERC-20 token.


```solidity
function claimVaultTokens(uint256 rewards, address receiver) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`rewards`|`uint256`|The amount of vault tokens to transfer|
|`receiver`|`address`|The address of the account to transfer tokens to|


### enterExitQueue

Sends the rewards to the exit queue


```solidity
function enterExitQueue(uint256 rewards, address receiver) external override returns (uint256 positionTicket);
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
function enterExitQueueOnBehalf(uint256 rewards, address onBehalf)
    external
    override
    returns (uint256 positionTicket);
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
function claimExitedAssetsOnBehalf(uint256 positionTicket, uint256 timestamp, uint256 exitQueueIndex)
    external
    override;
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
function syncRewards() public override;
```
