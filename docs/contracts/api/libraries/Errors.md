---
title: Errors
sidebar_position: 2
description: "Custom error definitions used across contracts"
---

# Errors

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/libraries/Errors.sol)

Contains all the custom errors.


## Errors
### AccessDenied

```solidity
error AccessDenied();
```

### InvalidShares

```solidity
error InvalidShares();
```

### InvalidAssets

```solidity
error InvalidAssets();
```

### ZeroAddress

```solidity
error ZeroAddress();
```

### CapacityExceeded

```solidity
error CapacityExceeded();
```

### InvalidCapacity

```solidity
error InvalidCapacity();
```

### InvalidSecurityDeposit

```solidity
error InvalidSecurityDeposit();
```

### InvalidFeeRecipient

```solidity
error InvalidFeeRecipient();
```

### InvalidFeePercent

```solidity
error InvalidFeePercent();
```

### NotHarvested

```solidity
error NotHarvested();
```

### NotCollateralized

```solidity
error NotCollateralized();
```

### Collateralized

```solidity
error Collateralized();
```

### InvalidProof

```solidity
error InvalidProof();
```

### LowLtv

```solidity
error LowLtv();
```

### InvalidPosition

```solidity
error InvalidPosition();
```

### InvalidHealthFactor

```solidity
error InvalidHealthFactor();
```

### InvalidReceivedAssets

```solidity
error InvalidReceivedAssets();
```

### InvalidTokenMeta

```solidity
error InvalidTokenMeta();
```

### UpgradeFailed

```solidity
error UpgradeFailed();
```

### InvalidValidators

```solidity
error InvalidValidators();
```

### DeadlineExpired

```solidity
error DeadlineExpired();
```

### PermitInvalidSigner

```solidity
error PermitInvalidSigner();
```

### InvalidValidatorsRegistryRoot

```solidity
error InvalidValidatorsRegistryRoot();
```

### InvalidVault

```solidity
error InvalidVault();
```

### AlreadyAdded

```solidity
error AlreadyAdded();
```

### AlreadyRemoved

```solidity
error AlreadyRemoved();
```

### InvalidOracles

```solidity
error InvalidOracles();
```

### NotEnoughSignatures

```solidity
error NotEnoughSignatures();
```

### InvalidOracle

```solidity
error InvalidOracle();
```

### TooEarlyUpdate

```solidity
error TooEarlyUpdate();
```

### InvalidAvgRewardPerSecond

```solidity
error InvalidAvgRewardPerSecond();
```

### InvalidRewardsRoot

```solidity
error InvalidRewardsRoot();
```

### HarvestFailed

```solidity
error HarvestFailed();
```

### LiquidationDisabled

```solidity
error LiquidationDisabled();
```

### InvalidLiqThresholdPercent

```solidity
error InvalidLiqThresholdPercent();
```

### InvalidLiqBonusPercent

```solidity
error InvalidLiqBonusPercent();
```

### InvalidLtvPercent

```solidity
error InvalidLtvPercent();
```

### InvalidCheckpointIndex

```solidity
error InvalidCheckpointIndex();
```

### InvalidCheckpointValue

```solidity
error InvalidCheckpointValue();
```

### MaxOraclesExceeded

```solidity
error MaxOraclesExceeded();
```

### ExitRequestNotProcessed

```solidity
error ExitRequestNotProcessed();
```

### ValueNotChanged

```solidity
error ValueNotChanged();
```

### FlashLoanFailed

```solidity
error FlashLoanFailed();
```

### CannotTopUpV1Validators

```solidity
error CannotTopUpV1Validators();
```

### InvalidSignatures

```solidity
error InvalidSignatures();
```

### EmptySubVaults

```solidity
error EmptySubVaults();
```

### EjectingVaultNotFound

```solidity
error EjectingVaultNotFound();
```

### EjectingVault

```solidity
error EjectingVault();
```

### RepeatedEjectingVault

```solidity
error RepeatedEjectingVault();
```

### UnclaimedAssets

```solidity
error UnclaimedAssets();
```

### InvalidCurator

```solidity
error InvalidCurator();
```

### RewardsNonceIsHigher

```solidity
error RewardsNonceIsHigher();
```

### InvalidRedeemablePositions

```solidity
error InvalidRedeemablePositions();
```

### RedeemablePositionsProposed

```solidity
error RedeemablePositionsProposed();
```

### InvalidDelay

```solidity
error InvalidDelay();
```
