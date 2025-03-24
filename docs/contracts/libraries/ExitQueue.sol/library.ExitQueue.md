# ExitQueue
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/libraries/ExitQueue.sol)

**Author:**
StakeWise

ExitQueue represent checkpoints of burned shares and exited assets


## Functions
### getLatestTotalTickets

Get the latest checkpoint total tickets


```solidity
function getLatestTotalTickets(History storage self) internal view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`self`|`History`|An array containing checkpoints|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The current total tickets or zero if there are no checkpoints|


### getCheckpointIndex

Get checkpoint index for the burned shares


```solidity
function getCheckpointIndex(History storage self, uint256 positionTicket) internal view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`self`|`History`|An array containing checkpoints|
|`positionTicket`|`uint256`|The position ticket to search the closest checkpoint for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The checkpoint index or the length of checkpoints array in case there is no such|


### calculateExitedAssets

Calculates burned shares and exited assets


```solidity
function calculateExitedAssets(
    History storage self,
    uint256 checkpointIdx,
    uint256 positionTicket,
    uint256 positionShares
) internal view returns (uint256 burnedShares, uint256 exitedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`self`|`History`|An array containing checkpoints|
|`checkpointIdx`|`uint256`|The index of the checkpoint to start calculating from|
|`positionTicket`|`uint256`|The position ticket to start calculating exited assets from|
|`positionShares`|`uint256`|The number of shares to calculate assets for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`burnedShares`|`uint256`|The number of shares burned|
|`exitedAssets`|`uint256`|The number of assets exited|


### push

Pushes a new checkpoint onto a History


```solidity
function push(History storage self, uint256 shares, uint256 assets) internal;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`self`|`History`|An array containing checkpoints|
|`shares`|`uint256`|The number of shares to add to the latest checkpoint|
|`assets`|`uint256`|The number of assets that were exited for this checkpoint|


### _unsafeAccess


```solidity
function _unsafeAccess(Checkpoint[] storage self, uint256 pos) private pure returns (Checkpoint storage result);
```

## Structs
### Checkpoint
A struct containing checkpoint data


```solidity
struct Checkpoint {
    uint160 totalTickets;
    uint96 exitedAssets;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`totalTickets`|`uint160`|The cumulative number of tickets (shares) exited|
|`exitedAssets`|`uint96`|The number of assets that exited in this checkpoint|

### History
A struct containing the history of checkpoints data


```solidity
struct History {
    Checkpoint[] checkpoints;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`checkpoints`|`Checkpoint[]`|An array of checkpoints|

