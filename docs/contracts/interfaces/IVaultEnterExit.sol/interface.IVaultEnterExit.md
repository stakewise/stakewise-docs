# IVaultEnterExit
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IVaultEnterExit.sol)

**Inherits:**
[IVaultState](/contracts/interfaces/IVaultState.sol/interface.IVaultState.md)

**Author:**
StakeWise

Defines the interface for the VaultEnterExit contract


## Functions
### enterExitQueue

Locks shares to the exit queue. The shares continue earning rewards until they will be burned by the Vault.


```solidity
function enterExitQueue(uint256 shares, address receiver) external returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares to lock|
|`receiver`|`address`|The address that will receive assets upon withdrawal|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket of the exit queue. Returns uint256 max if no ticket created.|


### getExitQueueIndex

Get the exit queue index to claim exited assets from


```solidity
function getExitQueueIndex(uint256 positionTicket) external view returns (int256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The exit queue position ticket to get the index for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`int256`|The exit queue index that should be used to claim exited assets. Returns -1 in case such index does not exist.|


### calculateExitedAssets

Calculates the number of shares and assets that can be claimed from the exit queue.


```solidity
function calculateExitedAssets(address receiver, uint256 positionTicket, uint256 timestamp, uint256 exitQueueIndex)
    external
    view
    returns (uint256 leftTickets, uint256 exitedTickets, uint256 exitedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive assets upon withdrawal|
|`positionTicket`|`uint256`|The exit queue ticket received after the `enterExitQueue` call|
|`timestamp`|`uint256`|The timestamp when the shares entered the exit queue|
|`exitQueueIndex`|`uint256`|The exit queue index at which the shares were burned. It can be looked up by calling `getExitQueueIndex`.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`leftTickets`|`uint256`|The number of tickets left in the queue|
|`exitedTickets`|`uint256`|The number of tickets that have already exited|
|`exitedAssets`|`uint256`|The number of assets that can be claimed|


### claimExitedAssets

Claims assets that were withdrawn by the Vault. It can be called only after the `enterExitQueue` call by the `receiver`.


```solidity
function claimExitedAssets(uint256 positionTicket, uint256 timestamp, uint256 exitQueueIndex) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The exit queue ticket received after the `enterExitQueue` call|
|`timestamp`|`uint256`|The timestamp when the assets entered the exit queue|
|`exitQueueIndex`|`uint256`|The exit queue index at which the shares were burned. It can be looked up by calling `getExitQueueIndex`.|


## Events
### Deposited
Event emitted on deposit


```solidity
event Deposited(address indexed caller, address indexed receiver, uint256 assets, uint256 shares, address referrer);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address that called the deposit function|
|`receiver`|`address`|The address that received the shares|
|`assets`|`uint256`|The number of assets deposited by the caller|
|`shares`|`uint256`|The number of shares received|
|`referrer`|`address`|The address of the referrer|

### Redeemed
Event emitted on redeem


```solidity
event Redeemed(address indexed owner, address indexed receiver, uint256 assets, uint256 shares);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address that owns the shares|
|`receiver`|`address`|The address that received withdrawn assets|
|`assets`|`uint256`|The total number of withdrawn assets|
|`shares`|`uint256`|The total number of withdrawn shares|

### ExitQueueEntered
Event emitted on shares added to the exit queue


```solidity
event ExitQueueEntered(address indexed owner, address indexed receiver, uint256 positionTicket, uint256 shares);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address that owns the shares|
|`receiver`|`address`|The address that will receive withdrawn assets|
|`positionTicket`|`uint256`|The exit queue ticket that was assigned to the position|
|`shares`|`uint256`|The number of shares that queued for the exit|

### V2ExitQueueEntered
Event emitted on shares added to the V2 exit queue (deprecated)


```solidity
event V2ExitQueueEntered(
    address indexed owner, address indexed receiver, uint256 positionTicket, uint256 shares, uint256 assets
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address that owns the shares|
|`receiver`|`address`|The address that will receive withdrawn assets|
|`positionTicket`|`uint256`|The exit queue ticket that was assigned to the position|
|`shares`|`uint256`|The number of shares that queued for the exit|
|`assets`|`uint256`|The number of assets that queued for the exit|

### ExitedAssetsClaimed
Event emitted on claim of the exited assets


```solidity
event ExitedAssetsClaimed(
    address indexed receiver, uint256 prevPositionTicket, uint256 newPositionTicket, uint256 withdrawnAssets
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that has received withdrawn assets|
|`prevPositionTicket`|`uint256`|The exit queue ticket received after the `enterExitQueue` call|
|`newPositionTicket`|`uint256`|The new exit queue ticket in case not all the shares were withdrawn. Otherwise 0.|
|`withdrawnAssets`|`uint256`|The total number of assets withdrawn|

