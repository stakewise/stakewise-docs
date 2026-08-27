---
title: NodesManager
sidebar_position: 2
description: "uint256 private constant _validatorChangeClaimDelay = 2"
---

# NodesManager

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/nodes/NodesManager.sol)

**Inherits:** [Ownable2StepUpgradeable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/access/Ownable2StepUpgradeable.sol), [EIP712Upgradeable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/utils/cryptography/EIP712Upgradeable.sol), [UUPSUpgradeable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/UUPSUpgradeable.sol), [ReentrancyGuardUpgradeable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/utils/ReentrancyGuardUpgradeable.sol), [Multicall](../base/Multicall), INodesManager


## State Variables
### _validatorChangeClaimDelay

```solidity
uint256 private constant _validatorChangeClaimDelay = 2
```


### _wad

```solidity
uint256 private constant _wad = 1e18
```


### _maxPercent

```solidity
uint256 private constant _maxPercent = 10_000
```


### _validatorV2DepositLength

```solidity
uint256 private constant _validatorV2DepositLength = 184
```


### _signatureLength

```solidity
uint256 private constant _signatureLength = 65
```


### _fundValidatorsTypeHash

```solidity
bytes32 private constant _fundValidatorsTypeHash =
    keccak256("FundValidators(address operator,uint256 nonce,address vault,bytes validators)")
```


### _registerValidatorsTypeHash

```solidity
bytes32 private constant _registerValidatorsTypeHash =
    keccak256("RegisterValidators(address operator,uint256 nonce,address vault,bytes validators)")
```


### _updateStateTypeHash

```solidity
bytes32 private constant _updateStateTypeHash =
    keccak256("UpdateState(bytes32 stateRoot,string stateIpfsHash,uint64 updateTimestamp,uint256 nonce)")
```


### _keeper

```solidity
IKeeper private immutable _keeper
```


### vault
The address of the vault the NodesManager is attached to


```solidity
address public immutable override vault
```


### operatorStates

```solidity
mapping(address operator => OperatorState state) public override operatorStates
```


### stateData
The state data of the nodes manager


```solidity
StateData public override stateData
```


### minDepositAssets
The minimum assets required for a deposit request


```solidity
uint256 public override minDepositAssets
```


### withdrawalsManager
The address of the withdrawals manager


```solidity
address public override withdrawalsManager
```


### minBalancePercent
The minimum balance percent in BPS (10000 = 100%)


```solidity
uint16 public override minBalancePercent
```


### operatorNonces

```solidity
mapping(address operator => mapping(OperatorNonceType nonceType => uint256 nonce)) public override operatorNonces
```


### pendingPenaltyAssets

```solidity
mapping(address operator => uint256 penaltyAssets) public override pendingPenaltyAssets
```


### validatorsManagers

```solidity
mapping(address operator => address manager) public override validatorsManagers
```


### _exitPositions

```solidity
mapping(uint256 positionTicket => address operator) private _exitPositions
```


### __gap
This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps


```solidity
uint256[50] private __gap
```


## Functions
### onlyWithdrawalsManager

Modifier to restrict access to the withdrawals manager


```solidity
modifier onlyWithdrawalsManager() ;
```

### constructor

Constructor sets the immutables


```solidity
constructor(address vault_, address keeper_) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault_`|`address`|The address of the vault|
|`keeper_`|`address`|The address of the Keeper contract|


### __NodesManager_init

Initializes the NodesManager contract


```solidity
function __NodesManager_init(
    address _owner,
    uint256 _minDepositAssets,
    uint16 _minBalancePercent,
    uint256 _stateUpdateDelay
) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_owner`|`address`|The address of the contract owner|
|`_minDepositAssets`|`uint256`|The minimum assets required for a deposit request|
|`_minBalancePercent`|`uint16`|The minimum balance percent in BPS|
|`_stateUpdateDelay`|`uint256`|The delay in seconds between state updates|


### setMinDepositAssets

Updates the minimum deposit assets. Can only be called by the owner.


```solidity
function setMinDepositAssets(uint256 newMinDepositAssets) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMinDepositAssets`|`uint256`|The new minimum deposit assets|


### setMinBalancePercent

Updates the minimum balance percent. Can only be called by the owner.


```solidity
function setMinBalancePercent(uint16 newMinBalancePercent) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMinBalancePercent`|`uint16`|The new minimum balance percent|


### setWithdrawalsManager

Updates the withdrawals manager address. Can only be called by the owner.


```solidity
function setWithdrawalsManager(address newWithdrawalsManager) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newWithdrawalsManager`|`address`|The new withdrawals manager address|


### setValidatorsManager

Sets the validators manager address for the calling operator


```solidity
function setValidatorsManager(address validatorsManager) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validatorsManager`|`address`|The new validators manager address|


### canUpdateState

Checks whether state can be updated


```solidity
function canUpdateState() external view override returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|`true` if state can be updated, `false` otherwise|


### updateState

Update state data


```solidity
function updateState(StateUpdateParams calldata params) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`StateUpdateParams`|The struct containing state update parameters|


### setStateUpdateDelay

Updates the state update delay. Can only be called by the owner.


```solidity
function setStateUpdateDelay(uint256 newStateUpdateDelay) external override onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newStateUpdateDelay`|`uint256`|The new state update delay in seconds|


### updateVaultState

Updates the vault state by harvesting rewards


```solidity
function updateVaultState(IKeeperRewards.HarvestParams calldata harvestParams) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`harvestParams`|`IKeeperRewards.HarvestParams`|The parameters for harvesting Keeper rewards|


### updateOperatorState

Updates the operator state by verifying a merkle proof against the current state root


```solidity
function updateOperatorState(address operator, OperatorStateUpdateParams calldata params) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`operator`|`address`|The address of the operator to update|
|`params`|`OperatorStateUpdateParams`|The parameters for updating the operator state|


### registerValidators

Registers validators with oracle-approved signatures. Can only be called by the operator's validators manager.


```solidity
function registerValidators(
    address operator,
    IKeeperValidators.ApprovalParams calldata keeperParams,
    bytes calldata signatures
) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`operator`|`address`|The address of the operator|
|`keeperParams`|`IKeeperValidators.ApprovalParams`|The keeper approval parameters containing validator data|
|`signatures`|`bytes`|The concatenation of the oracles' signatures|


### fundValidators

Funds validators with oracle-approved signatures. Can only be called by the operator's validators manager.


```solidity
function fundValidators(address operator, bytes calldata validators, bytes calldata signatures) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`operator`|`address`|The address of the operator|
|`validators`|`bytes`|The concatenation of the validators' data|
|`signatures`|`bytes`|The concatenation of the oracles' signatures approving the funding|


### withdrawValidators

Submits validator withdrawals. Can only be called by the withdrawals manager.


```solidity
function withdrawValidators(bytes calldata validators)
    external
    payable
    override
    nonReentrant
    onlyWithdrawalsManager;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenation of the validators' data|


### enterExitQueue

Enters the exit queue by locking operator shares in the vault's exit queue


```solidity
function enterExitQueue(uint256 shares) external override nonReentrant returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares to lock in the exit queue|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket of the exit queue|


### claimExitedAssets

Claims exited assets from the vault's exit queue for the operator


```solidity
function claimExitedAssets(uint256 positionTicket, uint256 timestamp, uint256 exitQueueIndex)
    external
    override
    nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The exit queue ticket received after the `enterExitQueue` call|
|`timestamp`|`uint256`|The timestamp when the shares entered the exit queue|
|`exitQueueIndex`|`uint256`|The exit queue index at which the shares were burned|


### _deposit

Internal function to deposit assets to the vault and update the operator's shares balance


```solidity
function _deposit(uint256 assets) internal returns (uint256 addedShares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to deposit|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`addedShares`|`uint256`|The amount of shares received with penalty applied if any|


### _setMinDepositAssets

Internal function for updating the minimum deposit assets


```solidity
function _setMinDepositAssets(uint256 newMinDepositAssets) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMinDepositAssets`|`uint256`|The new minimum deposit assets|


### _setStateUpdateDelay

Internal function for updating the state update delay


```solidity
function _setStateUpdateDelay(uint256 newStateUpdateDelay) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newStateUpdateDelay`|`uint256`|The new state update delay in seconds|


### _setMinBalancePercent

Internal function for updating the minimum balance percent


```solidity
function _setMinBalancePercent(uint16 newMinBalancePercent) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMinBalancePercent`|`uint16`|The new minimum balance percent|


### _useOperatorNonce

Returns the current nonce for an operator and nonce type, then increments it


```solidity
function _useOperatorNonce(address operator, OperatorNonceType nonceType) private returns (uint256 nonce);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`operator`|`address`|The address of the operator|
|`nonceType`|`OperatorNonceType`|The type of nonce to use|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`nonce`|`uint256`|The current nonce before incrementing|


### _verifySignatures

Verifies that oracles have approved the action by checking their signatures


```solidity
function _verifySignatures(bytes32 digest, bytes calldata signatures) private view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`digest`|`bytes32`|The EIP-712 typed data hash to verify signatures against|
|`signatures`|`bytes`|The concatenation of the oracles' signatures|


### _getValidatorsPublicKeys

Internal function to extract the validators' public keys from the concatenated validators data


```solidity
function _getValidatorsPublicKeys(bytes calldata validators) internal pure returns (bytes memory publicKeys);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`validators`|`bytes`|The concatenation of the validators' data|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`publicKeys`|`bytes`|The concatenation of the validators' public keys extracted from the validators data|


### _authorizeUpgrade

Function that should revert when `msg.sender` is not authorized to upgrade the contract. Called by
`upgradeToAndCall`.
Normally, this function will use an access control modifier such as `Ownable-onlyOwner`.
```solidity
function _authorizeUpgrade(address) internal onlyOwner {}
```


```solidity
function _authorizeUpgrade(address) internal override onlyOwner;
```

### _depositToVault

Deposits assets to the vault and returns the shares received.
Must be implemented by network-specific contracts.


```solidity
function _depositToVault(uint256 assets) internal virtual returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to deposit|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The vault shares received|


### _transferAssets

Transfers assets to the receiver.
Must be implemented by network-specific contracts.


```solidity
function _transferAssets(address receiver, uint256 assets) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address to transfer assets to|
|`assets`|`uint256`|The amount of assets to transfer|


### _donateAssets

Donates assets back to the vault.
Must be implemented by network-specific contracts.


```solidity
function _donateAssets(uint256 assets) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to donate|
