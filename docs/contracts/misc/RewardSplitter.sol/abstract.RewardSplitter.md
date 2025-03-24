# RewardSplitter
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/misc/RewardSplitter.sol)

**Inherits:**
[IRewardSplitter](/contracts/interfaces/IRewardSplitter.sol/interface.IRewardSplitter.md), Initializable, [Multicall](/contracts/base/Multicall.sol/abstract.Multicall.md)

**Author:**
StakeWise

The RewardSplitter can be used to split the rewards of the fee recipient of the vault based on configured shares


## State Variables
### _wad

```solidity
uint256 private constant _wad = 1e18;
```


### vault
The vault to which the RewardSplitter is connected


```solidity
address public override vault;
```


### totalShares
The total number of shares in the splitter


```solidity
uint256 public override totalShares;
```


### isClaimOnBehalfEnabled
Returns whether the claim on behalf is enabled


```solidity
bool public override isClaimOnBehalfEnabled;
```


### _shareHolders

```solidity
mapping(address => ShareHolder) private _shareHolders;
```


### _unclaimedRewards

```solidity
mapping(address => uint256) private _unclaimedRewards;
```


### exitPositions

```solidity
mapping(uint256 positionTicket => address onBehalf) public override exitPositions;
```


### _totalRewards

```solidity
uint128 private _totalRewards;
```


### _rewardPerShare

```solidity
uint128 private _rewardPerShare;
```


## Functions
### onlyVaultAdmin

*Modifier to check if the caller is the vault admin*


```solidity
modifier onlyVaultAdmin();
```

### constructor


```solidity
constructor();
```

### setClaimOnBehalf

Sets the flag indicating whether the claim on behalf is enabled.


```solidity
function setClaimOnBehalf(bool enabled) external onlyVaultAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`enabled`|`bool`|The flag indicating whether the claim on behalf is enabled Can only be called by the vault admin.|


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
function enterExitQueueOnBehalf(uint256 rewards, address onBehalf) external override returns (uint256 positionTicket);
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


### _transferRewards

*Transfers the specified amount of rewards to the shareholder*


```solidity
function _transferRewards(address shareholder, uint256 amount) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shareholder`|`address`|The address of the shareholder|
|`amount`|`uint256`|The amount of rewards to transfer|


### syncRewards

Syncs the rewards from the vault to the splitter. The vault state must be up-to-date.


```solidity
function syncRewards() public override;
```

### _withdrawRewards

*Withdraws rewards for the given account*


```solidity
function _withdrawRewards(address account, uint256 rewards) private returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account to withdraw rewards for|
|`rewards`|`uint256`|The amount of rewards to withdraw|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The actual amount of rewards withdrawn|


### __RewardSplitter_init

*Initializes the RewardSplitter contract*


```solidity
function __RewardSplitter_init(address _vault) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_vault`|`address`|The address of the vault to which the RewardSplitter will be connected|


