---
title: OsTokenVaultEscrow
sidebar_position: 10
description: "Abstract contract for initiating assets exits from the vault without burning osToken"
---

# OsTokenVaultEscrow

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/tokens/OsTokenVaultEscrow.sol)

**Inherits:** [Ownable2Step ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable2Step.sol), [Multicall →](../base/Multicall), IOsTokenVaultEscrow

Used for initiating assets exits from the vault without burning osToken

## Structs
### Position
Struct to store the escrow position details


```solidity
struct Position {
    address owner;
    uint96 exitedAssets;
    uint128 osTokenShares;
    uint128 cumulativeFeePerShare;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the assets owner|
|`exitedAssets`|`uint96`|The amount of assets exited and ready to be claimed|
|`osTokenShares`|`uint128`|The amount of osToken shares|
|`cumulativeFeePerShare`|`uint128`|The cumulative fee per share used to calculate the osToken fee|


## Events
### PositionCreated
Event emitted on position creation


```solidity
event PositionCreated(
    address indexed vault,
    uint256 indexed exitPositionTicket,
    address owner,
    uint256 osTokenShares,
    uint256 cumulativeFeePerShare
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`owner`|`address`|The address of the assets owner|
|`osTokenShares`|`uint256`|The amount of osToken shares|
|`cumulativeFeePerShare`|`uint256`|The cumulative fee per share used to calculate the osToken fee|

### ExitedAssetsProcessed
Event emitted on assets exit processing


```solidity
event ExitedAssetsProcessed(
    address indexed vault, address indexed caller, uint256 indexed exitPositionTicket, uint256 exitedAssets
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`caller`|`address`|The address of the caller|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`exitedAssets`|`uint256`|The amount of exited assets claimed|

### OsTokenLiquidated
Event emitted on osToken liquidation


```solidity
event OsTokenLiquidated(
    address indexed caller,
    address indexed vault,
    uint256 indexed exitPositionTicket,
    address receiver,
    uint256 osTokenShares,
    uint256 receivedAssets
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`vault`|`address`|The address of the vault|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`receiver`|`address`|The address of the receiver of the liquidated assets|
|`osTokenShares`|`uint256`|The amount of osToken shares to liquidate|
|`receivedAssets`|`uint256`|The amount of assets received|

### OsTokenRedeemed
Event emitted on osToken redemption


```solidity
event OsTokenRedeemed(
    address indexed caller,
    address indexed vault,
    uint256 indexed exitPositionTicket,
    address receiver,
    uint256 osTokenShares,
    uint256 receivedAssets
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`caller`|`address`|The address of the function caller|
|`vault`|`address`|The address of the vault|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`receiver`|`address`|The address of the receiver of the redeemed assets|
|`osTokenShares`|`uint256`|The amount of osToken shares to redeem|
|`receivedAssets`|`uint256`|The amount of assets received|

### ExitedAssetsClaimed
Event emitted on exited assets claim


```solidity
event ExitedAssetsClaimed(
    address indexed receiver,
    address indexed vault,
    uint256 indexed exitPositionTicket,
    uint256 osTokenShares,
    uint256 assets
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address of the receiver of the exited assets|
|`vault`|`address`|The address of the vault|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`osTokenShares`|`uint256`|The amount of osToken shares burned|
|`assets`|`uint256`|The amount of assets claimed|

### LiqConfigUpdated
Event emitted on liquidation configuration update


```solidity
event LiqConfigUpdated(uint64 liqThresholdPercent, uint256 liqBonusPercent);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`liqThresholdPercent`|`uint64`|The liquidation threshold percent|
|`liqBonusPercent`|`uint256`|The liquidation bonus percent|

### AuthenticatorUpdated
Event emitted on authenticator update


```solidity
event AuthenticatorUpdated(address newAuthenticator);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newAuthenticator`|`address`|The address of the new authenticator|


## Functions
### constructor


```solidity
constructor(
    address osTokenVaultController,
    address osTokenConfig,
    address initialOwner,
    address _authenticator,
    uint64 _liqThresholdPercent,
    uint256 _liqBonusPercent
) Ownable(msg.sender);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenVaultController`|`address`|The address of the OsTokenVaultController contract|
|`osTokenConfig`|`address`|The address of the OsTokenConfig contract|
|`initialOwner`|`address`|The address of the contract owner|
|`_authenticator`|`address`|The address of the OsTokenVaultEscrowAuth contract|
|`_liqThresholdPercent`|`uint64`|The liquidation threshold percent|
|`_liqBonusPercent`|`uint256`|The liquidation bonus percent|


### liqThresholdPercent

The liquidation threshold percent


```solidity
function liqThresholdPercent() external view returns (uint64);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint64`|The liquidation threshold percent starting from which the osToken shares can be liquidated|


### liqBonusPercent

The liquidation bonus percent


```solidity
function liqBonusPercent() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The liquidation bonus percent paid for liquidating the osToken shares|


### authenticator

The address of the authenticator


```solidity
function authenticator() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the authenticator contract|


### getPosition

Get the position details


```solidity
function getPosition(address vault, uint256 positionTicket) external view returns (address, uint256, uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`positionTicket`|`uint256`|The exit position ticket|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|owner The address of the assets owner|
|`<none>`|`uint256`|exitedAssets The amount of assets exited and ready to be claimed|
|`<none>`|`uint256`|osTokenShares The amount of osToken shares|


### register

Registers the new escrow position


```solidity
function register(address owner, uint256 exitPositionTicket, uint256 osTokenShares, uint256 cumulativeFeePerShare)
    external
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the exited assets owner|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`osTokenShares`|`uint256`|The amount of osToken shares|
|`cumulativeFeePerShare`|`uint256`|The cumulative fee per share used to calculate the osToken fee|


### processExitedAssets

Claims exited assets from the vault to the escrow


```solidity
function processExitedAssets(address vault, uint256 exitPositionTicket, uint256 timestamp, uint256 exitQueueIndex)
    external
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`timestamp`|`uint256`|The timestamp of the exit|
|`exitQueueIndex`|`uint256`|The index of the exit in the queue|


### claimExitedAssets

Claims the exited assets from the escrow to the owner. Can only be called by the position owner.


```solidity
function claimExitedAssets(address vault, uint256 exitPositionTicket, uint256 osTokenShares)
    external
    override
    returns (uint256 claimedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`osTokenShares`|`uint256`|The amount of osToken shares to burn|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`claimedAssets`|`uint256`|The amount of assets claimed|


### liquidateOsToken

Liquidates the osToken shares


```solidity
function liquidateOsToken(address vault, uint256 exitPositionTicket, uint256 osTokenShares, address receiver)
    external
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`osTokenShares`|`uint256`|The amount of osToken shares to liquidate|
|`receiver`|`address`|The address of the receiver of the liquidated assets|


### redeemOsToken

Redeems the osToken shares. Can only be called by the osToken redeemer.


```solidity
function redeemOsToken(address vault, uint256 exitPositionTicket, uint256 osTokenShares, address receiver)
    external
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|
|`exitPositionTicket`|`uint256`|The exit position ticket|
|`osTokenShares`|`uint256`|The amount of osToken shares to redeem|
|`receiver`|`address`|The address of the receiver of the redeemed assets|


### setAuthenticator

Updates the authenticator. Can only be called by the owner.


```solidity
function setAuthenticator(address newAuthenticator) public override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newAuthenticator`|`address`|The address of the new authenticator|


### updateLiqConfig

Updates the liquidation configuration. Can only be called by the owner.


```solidity
function updateLiqConfig(uint64 _liqThresholdPercent, uint256 _liqBonusPercent) public override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_liqThresholdPercent`|`uint64`|The liquidation threshold percent|
|`_liqBonusPercent`|`uint256`|The liquidation bonus percent|
