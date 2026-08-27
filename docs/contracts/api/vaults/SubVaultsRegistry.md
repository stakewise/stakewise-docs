---
title: SubVaultsRegistry
sidebar_position: 1
description: "Defines the functionality for managing the Vault sub-vaults. This contract is deployed per MetaVault."
---

# SubVaultsRegistry

[Git Source ↗](https://github.com/stakewise/v3-core/blob/fc70cbe1b3d41bc5f78434830d837aa270ca33bc/contracts/vaults/SubVaultsRegistry.sol)

**Inherits:** [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/Initializable.sol), [UUPSUpgradeable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/proxy/utils/UUPSUpgradeable.sol), [ReentrancyGuardUpgradeable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/master/contracts/utils/ReentrancyGuardUpgradeable.sol), [Multicall](../base/Multicall), ISubVaultsRegistry

Defines the functionality for managing the Vault sub-vaults. This contract is deployed per MetaVault.


## State Variables
### _maxSubVaults

```solidity
uint256 private constant _maxSubVaults = 50
```


### _maxPercent

```solidity
uint256 private constant _maxPercent = 1e18
```


### _curatorsRegistry

```solidity
address private immutable _curatorsRegistry
```


### _vaultsRegistry

```solidity
address private immutable _vaultsRegistry
```


### _keeper

```solidity
address private immutable _keeper
```


### _osTokenVaultController

```solidity
IOsTokenVaultController private immutable _osTokenVaultController
```


### _osTokenConfig

```solidity
IOsTokenConfig private immutable _osTokenConfig
```


### metaVault
The address of the meta vault


```solidity
address public override metaVault
```


### subVaultsCurator
The address of the sub-vaults curator


```solidity
address public override subVaultsCurator
```


### pendingMetaSubVault
Pending meta sub-vault waiting for approval


```solidity
address public override pendingMetaSubVault
```


### subVaultsRewardsNonce
Function to get the rewards nonce of the sub-vaults


```solidity
uint128 public override subVaultsRewardsNonce
```


### ejectingSubVault
The address of the sub-vault being ejected


```solidity
address public override ejectingSubVault
```


### ejectingSubVaultShares
The number of shares of the ejecting sub-vault


```solidity
uint256 public override ejectingSubVaultShares
```


### _subVaults

```solidity
EnumerableSet.AddressSet private _subVaults
```


### _subVaultsExits

```solidity
mapping(address vault => DoubleEndedQueue.Bytes32Deque) private _subVaultsExits
```


### _subVaultsStates

```solidity
mapping(address vault => SubVaultState state) private _subVaultsStates
```


### subVaultsTotalAssets
The total assets deposited to sub-vaults


```solidity
uint128 public override subVaultsTotalAssets
```


### _totalProcessedExitQueueTickets

```solidity
uint256 private _totalProcessedExitQueueTickets
```


### _unaccountedExitedAssets

```solidity
uint256 private _unaccountedExitedAssets
```


### __gap
This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps


```solidity
uint256[50] private __gap
```


## Functions
### onlyMetaVaultAdmin

Modifier to check if the caller is the meta vault admin


```solidity
modifier onlyMetaVaultAdmin() ;
```

### constructor

Constructor


```solidity
constructor(
    address curatorsRegistry,
    address vaultsRegistry,
    address keeper,
    address osTokenVaultController,
    address osTokenConfig
) ;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`curatorsRegistry`|`address`|The address of the CuratorsRegistry contract|
|`vaultsRegistry`|`address`|The address of the VaultsRegistry contract|
|`keeper`|`address`|The address of the Keeper contract|
|`osTokenVaultController`|`address`|The address of the OsTokenVaultController contract|
|`osTokenConfig`|`address`|The address of the OsTokenConfig contract|


### _authorizeUpgrade

Function that should revert when `msg.sender` is not authorized to upgrade the contract. Called by
`upgradeToAndCall`.
Normally, this function will use an access control modifier such as `Ownable-onlyOwner`.
```solidity
function _authorizeUpgrade(address) internal onlyOwner {}
```


```solidity
function _authorizeUpgrade(address) internal view override;
```

### initialize

Initializes the SubVaultsRegistry


```solidity
function initialize(address _metaVault, address curator) external override initializer;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_metaVault`|`address`||
|`curator`|`address`|The address of initial sub-vaults curator|


### getSubVaults

Returns the list of sub-vaults


```solidity
function getSubVaults() public view override returns (address[] memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address[]`|The array of sub-vault addresses|


### isSubVault

Checks if the given address is a sub-vault


```solidity
function isSubVault(address vault) public view override returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address to check|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the address is a sub-vault, false otherwise|


### setSubVaultsCurator

Function to update the sub-vaults curator. Can only be called by the meta vault admin.


```solidity
function setSubVaultsCurator(address curator) external override onlyMetaVaultAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`curator`|`address`|The address of the new sub-vaults curator|


### addSubVault

Function to add a new sub-vault. Can only be called by the meta vault admin.


```solidity
function addSubVault(address vault) external override onlyMetaVaultAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault to add|


### acceptMetaSubVault

Function to accept a meta sub-vault. Can only be called by the VaultsRegistry owner.


```solidity
function acceptMetaSubVault(address metaSubVault) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`metaSubVault`|`address`|The address of the meta sub-vault to accept|


### rejectMetaSubVault

Function to reject a meta sub-vault. Can only be called by the VaultsRegistry owner or meta vault admin.


```solidity
function rejectMetaSubVault(address metaSubVault) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`metaSubVault`|`address`|The address of the meta sub-vault to reject|


### ejectSubVault

Function to eject a sub-vault. Can only be called by the meta vault admin.
All the sub-vault shares will be added to the exit queue.


```solidity
function ejectSubVault(address vault) external override onlyMetaVaultAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault to eject|


### subVaultsStates

Returns the state of a sub-vault


```solidity
function subVaultsStates(address vault) external view override returns (SubVaultState memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`SubVaultState`|The state of the sub-vault|


### subVaultsExits

Returns the exits queue for a sub-vault


```solidity
function subVaultsExits(address vault) external view override returns (bytes32[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32[]`|The array of packed exit data (positionTicket: uint160, shares: uint96)|


### canUpdateState

Checks whether the state can be updated


```solidity
function canUpdateState() external view override returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the state can be updated, false otherwise|


### isCollateralized

Checks whether the meta vault is collateralized


```solidity
function isCollateralized() public view override returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the meta vault is collateralized, false otherwise|


### isStateUpdateRequired

Checks whether the state update is required


```solidity
function isStateUpdateRequired() public view override returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the state update is required, false otherwise|


### depositToSubVaults

Deposit available assets to the sub vaults


```solidity
function depositToSubVaults() external override nonReentrant;
```

### claimSubVaultsExitedAssets

Claims exited assets from sub vaults


```solidity
function claimSubVaultsExitedAssets(SubVaultExitRequest[] calldata exitRequests) external override nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`exitRequests`|`SubVaultExitRequest[]`|The array of exit requests to claim|


### harvestSubVaultsAssets

Harvests sub-vaults assets. Can only be called by the meta vault.


```solidity
function harvestSubVaultsAssets() external override returns (int256 totalAssetsDelta, bool harvested);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`totalAssetsDelta`|`int256`|The change in total assets after the harvest|
|`harvested`|`bool`|Whether the sub-vaults were harvested|


### enterSubVaultsExitQueue

Enters the exit queue for sub-vaults. Can only be called by the meta vault.


```solidity
function enterSubVaultsExitQueue() external override nonReentrant;
```

### calculateSubVaultsRedemptions

Calculates the required sub-vaults exit requests to fulfill the assets to redeem


```solidity
function calculateSubVaultsRedemptions(uint256 assetsToRedeem)
    external
    view
    override
    returns (ISubVaultsCurator.ExitRequest[] memory redeemRequests);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsToRedeem`|`uint256`|The amount of assets to redeem|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`redeemRequests`|`ISubVaultsCurator.ExitRequest[]`|The array of sub-vaults exit requests|


### redeemSubVaultsAssets

Redeems assets from sub-vaults to the meta vault. Can only be called by the redeemer.


```solidity
function redeemSubVaultsAssets(uint256 assetsToRedeem)
    external
    override
    nonReentrant
    returns (uint256 totalRedeemedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsToRedeem`|`uint256`|The amount of assets to redeem to the meta vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`totalRedeemedAssets`|`uint256`|The total amount of assets redeemed from sub-vaults|


### _calculateSubVaultsRedemptions

Internal function to calculate the required sub-vaults exit requests to fulfill the assets to redeem


```solidity
function _calculateSubVaultsRedemptions(uint256 assetsToRedeem, bool useEjectingSubVaultShares)
    private
    view
    returns (ISubVaultsCurator.ExitRequest[] memory redeemRequests);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assetsToRedeem`|`uint256`|The amount of assets to redeem|
|`useEjectingSubVaultShares`|`bool`|Whether to use ejecting sub-vault shares|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`redeemRequests`|`ISubVaultsCurator.ExitRequest[]`|The array of sub-vaults exit requests|


### _getSubVaultsBalances

Returns the balances of the given sub-vaults


```solidity
function _getSubVaultsBalances(address[] memory vaults, bool calcNewTotalAssets)
    private
    view
    returns (uint256[] memory balances, uint256 newTotalAssets, uint256 totalStakedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vaults`|`address[]`|The addresses of the sub-vaults|
|`calcNewTotalAssets`|`bool`|Whether to calculate the new total assets across all sub-vaults|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`balances`|`uint256[]`|The balances of the sub-vaults|
|`newTotalAssets`|`uint256`|The new total assets across all sub-vaults|
|`totalStakedAssets`|`uint256`|The sum of the staked balances across all sub-vaults|


### _checkHarvested

Internal function to check whether the sub-vaults are harvested


```solidity
function _checkHarvested() private view;
```

### _checkSubVaultsExitClaims

Internal function to check whether the sub vaults have claimed processed exit queue tickets


```solidity
function _checkSubVaultsExitClaims(address[] memory vaults) private view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vaults`|`address[]`|The addresses of the sub vaults|


### _syncRewardsNonce

Internal function to check whether the vaults are harvested


```solidity
function _syncRewardsNonce(address[] memory vaults) private returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vaults`|`address[]`|The addresses of the vaults|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|Whether the nonce has been updated|


### _consumeEjectingSubVaultAssets

Internal function to consume ejecting sub-vault assets


```solidity
function _consumeEjectingSubVaultAssets(uint256 unprocessedAssets) private returns (uint256 processedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`unprocessedAssets`|`uint256`|The amount of unprocessed assets|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`processedAssets`|`uint256`|The amount of processed assets|


### _setSubVaultsCurator

Internal function to set the sub-vaults curator


```solidity
function _setSubVaultsCurator(address curator) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`curator`|`address`|The address of the sub-vaults curator|


### _validateSubVault

Internal function to validate the addition of a sub-vault


```solidity
function _validateSubVault(address vault) private view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault to be added|


### _addSubVault

Internal function to add a sub-vault


```solidity
function _addSubVault(address vault) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the sub-vault to add|


### _isMetaVault

Internal function to check whether the vault is a meta vault


```solidity
function _isMetaVault(address vault) private view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the vault is a meta vault, false otherwise|


### _isSubVaultCollateralized

Internal function to check whether the sub-vault is collateralized


```solidity
function _isSubVaultCollateralized(address subVault) private view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`subVault`|`address`|The address of the sub-vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the sub-vault is collateralized, false otherwise|


### _getSubVaultRewardsNonce

Internal function to get the rewards nonce of a sub-vault


```solidity
function _getSubVaultRewardsNonce(address subVault) private view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`subVault`|`address`|The address of the sub-vault|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The rewards nonce of the sub-vault|


### _getCurrentRewardsNonce

Internal function to get the current rewards nonce from the Keeper contract


```solidity
function _getCurrentRewardsNonce() private view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The current rewards nonce|


### _processRedeemRequests

Processes the given redeem requests


```solidity
function _processRedeemRequests(address redeemer, ISubVaultsCurator.ExitRequest[] memory redeemRequests)
    private
    returns (uint256 totalRedeemedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`redeemer`|`address`|The address of the redeemer|
|`redeemRequests`|`ISubVaultsCurator.ExitRequest[]`|The redeem requests to process|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`totalRedeemedAssets`|`uint256`|The total amount of redeemed assets|
