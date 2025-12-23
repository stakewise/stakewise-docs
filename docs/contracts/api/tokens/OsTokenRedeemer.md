---
title: OsTokenRedeemer
sidebar_position: 8
description: "Abstract contract for redeeming osTokens through exit queue or direct redemption"
---

# OsTokenRedeemer

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/tokens/OsTokenRedeemer.sol)

**Inherits:** [Ownable2Step ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable2Step.sol), [Multicall →](../base/Multicall), IOsTokenRedeemer

This contract is used to redeem OsTokens for the underlying asset.


## Events
### PositionsManagerUpdated
Event emitted when the positions manager is updated


```solidity
event PositionsManagerUpdated(address indexed positionsManager);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`positionsManager`|`address`|The address of the new positions manager|

### RedeemablePositionsProposed
Event emitted when new redeemable positions are proposed


```solidity
event RedeemablePositionsProposed(bytes32 indexed merkleRoot, string ipfsHash);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`merkleRoot`|`bytes32`|The Merkle root of the redeemable positions|
|`ipfsHash`|`string`|The IPFS hash of the redeemable positions|

### RedeemablePositionsAccepted
Event emitted when the pending redeemable positions are accepted


```solidity
event RedeemablePositionsAccepted(bytes32 indexed merkleRoot, string ipfsHash);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`merkleRoot`|`bytes32`|The Merkle root of the accepted redeemable positions|
|`ipfsHash`|`string`|The IPFS hash of the accepted redeemable positions|

### RedeemablePositionsDenied
Event emitted when the new redeemable positions are denied


```solidity
event RedeemablePositionsDenied(bytes32 indexed merkleRoot, string ipfsHash);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`merkleRoot`|`bytes32`|The Merkle root of the denied redeemable positions|
|`ipfsHash`|`string`|The IPFS hash of the denied redeemable positions|

### RedeemablePositionsRemoved
Event emitted when the redeemable positions are removed


```solidity
event RedeemablePositionsRemoved(bytes32 indexed merkleRoot, string ipfsHash);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`merkleRoot`|`bytes32`|The Merkle root of the removed redeemable positions|
|`ipfsHash`|`string`|The IPFS hash of the removed redeemable positions|

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

### OsTokenSharesSwapped
Event emitted on shares swapped for assets


```solidity
event OsTokenSharesSwapped(address indexed sender, address indexed receiver, uint256 shares, uint256 assets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address that initiated the swap|
|`receiver`|`address`|The address that will receive the shares|
|`shares`|`uint256`|The number of shares received|
|`assets`|`uint256`|The number of assets spent|

### CheckpointCreated
Event emitted on checkpoint creation


```solidity
event CheckpointCreated(uint256 shares, uint256 assets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of burned shares|
|`assets`|`uint256`|The amount of exited assets|

### OsTokenPositionsRedeemed
Event emitted when OsToken positions are redeemed


```solidity
event OsTokenPositionsRedeemed(uint256 shares, uint256 assets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares redeemed|
|`assets`|`uint256`|The number of assets redeemed|

## Structs
### RedeemablePositions
Struct to store the redeemable positions Merkle root and IPFS hash


```solidity
struct RedeemablePositions {
    bytes32 merkleRoot;
    string ipfsHash;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`merkleRoot`|`bytes32`|The Merkle root of the redeemable positions|
|`ipfsHash`|`string`|The IPFS hash of the redeemable positions|

### OsTokenPosition
Struct to store the redeemed OsToken position details


```solidity
struct OsTokenPosition {
    address vault;
    address owner;
    uint256 leafShares;
    uint256 sharesToRedeem;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault|
|`owner`|`address`|The address of the position owner|
|`leafShares`|`uint256`|The amount of OsToken shares used to calculate the merkle leaf|
|`sharesToRedeem`|`uint256`||


## Functions
### constructor


```solidity
constructor(address osToken_, address osTokenVaultController_, address owner_, uint256 exitQueueUpdateDelay_)
    Ownable(owner_);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osToken_`|`address`|The address of the OsToken contract|
|`osTokenVaultController_`|`address`|The address of the OsTokenVaultController contract|
|`owner_`|`address`|The address of the owner|
|`exitQueueUpdateDelay_`|`uint256`|The delay in seconds for exit queue updates|


### exitQueueUpdateDelay

The delay in seconds for the exit queue updates


```solidity
function exitQueueUpdateDelay() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The delay in seconds|


### queuedShares

The number of queued OsToken shares


```solidity
function queuedShares() external view returns (uint128);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|The number of queued shares|


### unclaimedAssets

The number of unclaimed assets in the exit queue


```solidity
function unclaimedAssets() external view returns (uint128);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|The number of unclaimed assets|


### redeemedShares

The number of redeemed OsToken shares


```solidity
function redeemedShares() external view returns (uint128);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|The number of redeemed shares|


### redeemedAssets

The number of redeemed assets


```solidity
function redeemedAssets() external view returns (uint128);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|The number of redeemed assets|


### swappedShares

The number of swapped OsToken shares


```solidity
function swappedShares() external view returns (uint128);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|The number of swapped shares|


### swappedAssets

The number of swapped assets


```solidity
function swappedAssets() external view returns (uint128);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint128`|The number of swapped assets|


### leafToProcessedShares

Maps a Merkle tree leaf to processed shares


```solidity
function leafToProcessedShares(bytes32 leaf) external view returns (uint256 processedShares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`leaf`|`bytes32`|The leaf of the Merkle tree|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`processedShares`|`uint256`|The number of processed shares corresponding to the leaf|


### exitRequests

Maps a exit request hash to the number of exiting shares


```solidity
function exitRequests(bytes32 exitRequestHash) external view returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`exitRequestHash`|`bytes32`|The hash of the exit request|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares that are exiting for the given exit request hash|


### exitQueueTimestamp

The timestamp when the exit queue was last updated


```solidity
function exitQueueTimestamp() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The timestamp of the last exit queue update|


### positionsManager

The address that can propose redeemable OsToken positions


```solidity
function positionsManager() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the positions manager|


### nonce

The current nonce for the redemptions


```solidity
function nonce() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The current nonce value|


### getExitQueueData

Get the current exit queue data


```solidity
function getExitQueueData() external view override returns (uint256, uint256, uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|queuedShares The total number of shares currently queued for exit|
|`<none>`|`uint256`|unclaimedAssets The total number of assets that have not been claimed yet|
|`<none>`|`uint256`|totalTickets The total number of tickets (shares) processed in the exit queue|


### redeemablePositions

The current redeemable positions Merkle root and IPFS hash


```solidity
function redeemablePositions() external view override returns (bytes32 merkleRoot, string memory ipfsHash);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`merkleRoot`|`bytes32`|The Merkle root of the redeemable positions|
|`ipfsHash`|`string`|The IPFS hash of the redeemable positions|


### pendingRedeemablePositions

The pending redeemable positions Merkle root and IPFS hash that is waiting to be accepted


```solidity
function pendingRedeemablePositions() external view override returns (bytes32 merkleRoot, string memory ipfsHash);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`merkleRoot`|`bytes32`|The Merkle root of the pending redeemable positions|
|`ipfsHash`|`string`|The IPFS hash of the pending redeemable positions|


### getExitQueueIndex

Gets the index of the exit queue for a given position ticket.


```solidity
function getExitQueueIndex(uint256 positionTicket) external view override returns (int256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket to search for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`int256`|The index of the exit queue or -1 if not found|


### canProcessExitQueue

Checks if the exit queue can be processed


```solidity
function canProcessExitQueue() external view override returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the exit queue can be processed, false otherwise|


### calculateExitedAssets

Calculates the exited assets for a given position ticket and exit queue index.


```solidity
function calculateExitedAssets(address receiver, uint256 positionTicket, uint256 exitQueueIndex)
    public
    view
    override
    returns (uint256 leftTickets, uint256 exitedTickets, uint256 exitedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address of the receiver|
|`positionTicket`|`uint256`|The position ticket to calculate exited assets for|
|`exitQueueIndex`|`uint256`|The index of the exit queue to calculate exited assets for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`leftTickets`|`uint256`|The number of tickets left in the exit queue|
|`exitedTickets`|`uint256`|The number of tickets that have exited|
|`exitedAssets`|`uint256`|The number of assets that have exited|


### setPositionsManager

Update the address of the positions manager. Can only be called by the owner.


```solidity
function setPositionsManager(address positionsManager_) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`positionsManager_`|`address`|The address of the new positions manager|


### proposeRedeemablePositions

Proposes new redeemable positions. Can only be called by the positions manager.


```solidity
function proposeRedeemablePositions(RedeemablePositions calldata newPositions) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newPositions`|`RedeemablePositions`|The new redeemable positions to propose|


### acceptRedeemablePositions

Accepts the pending redeemable positions. Can only be called by the owner.


```solidity
function acceptRedeemablePositions() external override onlyOwner;
```

### denyRedeemablePositions

Denies the pending redeemable positions. Can only be called by the owner.


```solidity
function denyRedeemablePositions() external override onlyOwner;
```

### removeRedeemablePositions

Removes the redeemable positions. Can only be called by the owner.


```solidity
function removeRedeemablePositions() external override onlyOwner;
```

### permitOsToken

Permit OsToken shares to be used for redemption.


```solidity
function permitOsToken(uint256 shares, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares to permit|
|`deadline`|`uint256`|The deadline for the permit|
|`v`|`uint8`|The recovery byte of the signature|
|`r`|`bytes32`|The output of the ECDSA signature|
|`s`|`bytes32`|The output of the ECDSA signature|


### enterExitQueue

Enters the exit queue with a given number of shares and receiver address.


```solidity
function enterExitQueue(uint256 shares, address receiver) external override returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares to enter the exit queue with|
|`receiver`|`address`|The address that will receive the assets after exit|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket for the entered exit queue|


### claimExitedAssets

Claims exited assets for a given position ticket and exit queue index.


```solidity
function claimExitedAssets(uint256 positionTicket, uint256 exitQueueIndex) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket to claim exited assets for|
|`exitQueueIndex`|`uint256`|The index of the exit queue to claim exited assets for|


### redeemOsTokenPositions


```solidity
function redeemOsTokenPositions(
    OsTokenPosition[] memory positions,
    bytes32[] calldata proof,
    bool[] calldata proofFlags
) external override;
```

### processExitQueue

Process the exit queue and checkpoint swapped or redeemed shares. Can only be called once per `exitQueueUpdateDelay`.


```solidity
function processExitQueue() external override;
```
