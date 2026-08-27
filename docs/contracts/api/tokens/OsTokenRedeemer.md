---
title: OsTokenRedeemer
sidebar_position: 8
description: "Abstract contract for redeeming osTokens through exit queue or direct redemption"
---

# OsTokenRedeemer

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/tokens/OsTokenRedeemer.sol)

**Inherits:** [Ownable2Step ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable2Step.sol), [Multicall](../base/Multicall), IOsTokenRedeemer

This contract is used to redeem OsTokens for the underlying asset.


## State Variables
### _vaultsRegistry

```solidity
IVaultsRegistry private immutable _vaultsRegistry
```


### _osToken

```solidity
IERC20 private immutable _osToken
```


### _osTokenVaultController

```solidity
IOsTokenVaultController private immutable _osTokenVaultController
```


### exitQueueUpdateDelay
The delay in seconds for the exit queue updates


```solidity
uint256 public immutable override exitQueueUpdateDelay
```


### positionsManager
The address authorized to redeem OsToken positions


```solidity
address public override positionsManager
```


### nonce
The current nonce for the redemptions


```solidity
uint256 public override nonce
```


### queuedShares
The number of queued OsToken shares


```solidity
uint128 public override queuedShares
```


### unclaimedAssets
The number of unclaimed assets in the exit queue


```solidity
uint128 public override unclaimedAssets
```


### redeemedShares
The number of redeemed OsToken shares


```solidity
uint128 public override redeemedShares
```


### redeemedAssets
The number of redeemed assets


```solidity
uint128 public override redeemedAssets
```


### swappedShares
The number of swapped OsToken shares


```solidity
uint128 public override swappedShares
```


### swappedAssets
The number of swapped assets


```solidity
uint128 public override swappedAssets
```


### leafToProcessedShares

```solidity
mapping(bytes32 leaf => uint256 processedShares) public override leafToProcessedShares
```


### exitRequests

```solidity
mapping(bytes32 exitRequestHash => uint256 shares) public override exitRequests
```


### exitQueueTimestamp
The timestamp when the exit queue was last updated


```solidity
uint256 public override exitQueueTimestamp
```


### _redeemablePositions

```solidity
RedeemablePositions private _redeemablePositions
```


### _exitQueue

```solidity
ExitQueue.History private _exitQueue
```


## Functions
### constructor

Constructor


```solidity
constructor(
    address vaultsRegistry_,
    address osToken_,
    address osTokenVaultController_,
    address owner_,
    uint256 exitQueueUpdateDelay_
) Ownable(owner_);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vaultsRegistry_`|`address`|The address of the VaultsRegistry contract|
|`osToken_`|`address`|The address of the OsToken contract|
|`osTokenVaultController_`|`address`|The address of the OsTokenVaultController contract|
|`owner_`|`address`|The address of the owner|
|`exitQueueUpdateDelay_`|`uint256`|The delay in seconds for exit queue updates|


### getExitQueueData

Get the current exit queue data


```solidity
function getExitQueueData() public view override returns (uint256, uint256, uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|queuedShares The total number of shares currently queued for exit|
|`<none>`|`uint256`|unclaimedAssets The total number of assets that have not been claimed yet|
|`<none>`|`uint256`|totalTickets The total number of tickets (shares) processed in the exit queue|


### getExitQueueCumulativeTickets

Gets the cumulative tickets in the exit queue


```solidity
function getExitQueueCumulativeTickets() external view override returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The cumulative tickets in the exit queue|


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


### getExitQueueMissingAssets

Calculates the missing assets in the exit queue for a target cumulative tickets.


```solidity
function getExitQueueMissingAssets(uint256 targetCumulativeTickets)
    external
    view
    override
    returns (uint256 missingAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`targetCumulativeTickets`|`uint256`|The target cumulative tickets in the exit queue|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`missingAssets`|`uint256`|The number of missing assets in the exit queue|


### setRedeemablePositions

Set new redeemable positions. Can only be called by the owner.


```solidity
function setRedeemablePositions(RedeemablePositions calldata newPositions) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newPositions`|`RedeemablePositions`|The new redeemable positions|


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


### redeemSubVaultsAssets

Redeem assets from the sub-vaults to the meta vault. Can only be called by the positions manager.


```solidity
function redeemSubVaultsAssets(address metaVault, uint256 assetsToRedeem)
    external
    override
    returns (uint256 totalRedeemedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`metaVault`|`address`|The address of the meta vault|
|`assetsToRedeem`|`uint256`|The number of assets to redeem|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`totalRedeemedAssets`|`uint256`|The total number of redeemed assets|


### redeemSubVaultOsToken

Redeem OsToken shares from a specific sub-vault. Can only be called by the meta vault.


```solidity
function redeemSubVaultOsToken(address subVault, uint256 osTokenShares) external override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`subVault`|`address`|The address of the sub-vault|
|`osTokenShares`|`uint256`|The number of OsToken shares to redeem|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of redeemed assets|


### redeemOsTokenPositions

Redeem OsToken shares from the vault positions.


```solidity
function redeemOsTokenPositions(
    OsTokenPosition[] memory positions,
    bytes32[] calldata proof,
    bool[] calldata proofFlags
) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`positions`|`OsTokenPosition[]`|The array of OsToken positions to redeem|
|`proof`|`bytes32[]`|The Merkle proof for the positions root|
|`proofFlags`|`bool[]`|The flags for the Merkle proof|


### processExitQueue

Process the exit queue and checkpoint swapped or redeemed shares. Can only be called once per `exitQueueUpdateDelay`.


```solidity
function processExitQueue() external override;
```

### updateVaultState

Updates the vault state. To be used in multicall to update state and redeem positions.


```solidity
function updateVaultState(address vault, IKeeperRewards.HarvestParams calldata harvestParams) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault to update|
|`harvestParams`|`IKeeperRewards.HarvestParams`|The harvest parameters for the vault state update|


### _swapAssetsToOsTokenShares

Internal function to swap assets to OsToken shares


```solidity
function _swapAssetsToOsTokenShares(address receiver, uint256 assets) internal returns (uint256 osTokenShares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the OsToken shares|
|`assets`|`uint256`|The number of assets to swap|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`osTokenShares`|`uint256`|The number of OsToken shares swapped|


### _isMetaVault

Internal function to check whether the caller is a meta vault


```solidity
function _isMetaVault(address vault) private view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault to check|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the caller is a meta vault, false otherwise|


### _getAssets

Internal function that must be implemented to return the account assets


```solidity
function _getAssets(address account) internal view virtual returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The address of the account|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of assets in the vault|


### _transferAssets

Internal function for transferring assets to the receiver

IMPORTANT: because control is transferred to the receiver, care must be
taken to not create reentrancy vulnerabilities. The Vault must follow the checks-effects-interactions pattern:
https://docs.soliditylang.org/en/v0.8.22/security-considerations.html#use-the-checks-effects-interactions-pattern


```solidity
function _transferAssets(address receiver, uint256 assets) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the assets|
|`assets`|`uint256`|The number of assets to transfer|
