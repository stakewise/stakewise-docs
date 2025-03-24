# IOsTokenVaultController
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IOsTokenVaultController.sol)

**Author:**
StakeWise

Defines the interface for the OsTokenVaultController contract


## Functions
### capacity

The OsToken capacity


```solidity
function capacity() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount after which the OsToken stops accepting deposits|


### treasury

The DAO treasury address that receives OsToken fees


```solidity
function treasury() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the treasury|


### feePercent

The fee percent (multiplied by 100)


```solidity
function feePercent() external view returns (uint64);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint64`|The fee percent applied by the OsToken on the rewards|


### keeper

The address that can update avgRewardPerSecond


```solidity
function keeper() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the keeper contract|


### avgRewardPerSecond

The average reward per second used to mint OsToken rewards


```solidity
function avgRewardPerSecond() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The average reward per second earned by the Vaults|


### cumulativeFeePerShare

The fee per share used for calculating the fee for every position


```solidity
function cumulativeFeePerShare() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The cumulative fee per share|


### totalShares

The total number of shares controlled by the OsToken


```solidity
function totalShares() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total number of shares|


### totalAssets

Total assets controlled by the OsToken


```solidity
function totalAssets() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of the underlying asset that is "managed" by OsToken|


### convertToShares

Converts assets to shares


```solidity
function convertToShares(uint256 assets) external view returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets to convert to shares|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of OsToken shares obtained when exchanging with the amount of assets provided|


### convertToAssets

Converts shares to assets


```solidity
function convertToAssets(uint256 shares) external view returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares to convert to assets|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets obtained when exchanging with the amount of OsToken shares provided|


### updateState

Updates rewards and treasury fee checkpoint for the OsToken


```solidity
function updateState() external;
```

### mintShares

Mint OsToken shares. Can only be called by the registered vault.


```solidity
function mintShares(address receiver, uint256 shares) external returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the shares|
|`shares`|`uint256`|The amount of shares to mint|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets minted|


### burnShares

Burn shares for withdrawn assets. Can only be called by the registered vault.


```solidity
function burnShares(address owner, uint256 shares) external returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address that owns the shares|
|`shares`|`uint256`|The amount of shares to burn|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of assets withdrawn|


### setTreasury

Update treasury address. Can only be called by the owner.


```solidity
function setTreasury(address _treasury) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_treasury`|`address`|The new treasury address|


### setCapacity

Update capacity. Can only be called by the owner.


```solidity
function setCapacity(uint256 _capacity) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_capacity`|`uint256`|The amount after which the OsToken stops accepting deposits|


### setFeePercent

Update fee percent. Can only be called by the owner. Cannot be larger than 10 000 (100%).


```solidity
function setFeePercent(uint16 _feePercent) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_feePercent`|`uint16`|The new fee percent|


### setKeeper

Update keeper address. Can only be called by the owner.


```solidity
function setKeeper(address _keeper) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_keeper`|`address`|The new keeper address|


### setAvgRewardPerSecond

Updates average reward per second. Can only be called by the keeper.


```solidity
function setAvgRewardPerSecond(uint256 _avgRewardPerSecond) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_avgRewardPerSecond`|`uint256`|The new average reward per second|


## Events
### Mint
Event emitted on minting shares


```solidity
event Mint(address indexed vault, address indexed receiver, uint256 assets, uint256 shares);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault|
|`receiver`|`address`|The address that received the shares|
|`assets`|`uint256`|The number of assets collateralized|
|`shares`|`uint256`|The number of tokens the owner received|

### Burn
Event emitted on burning shares


```solidity
event Burn(address indexed vault, address indexed owner, uint256 assets, uint256 shares);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the Vault|
|`owner`|`address`|The address that owns the shares|
|`assets`|`uint256`|The total number of assets withdrawn|
|`shares`|`uint256`|The total number of shares burned|

### StateUpdated
Event emitted on state update


```solidity
event StateUpdated(uint256 profitAccrued, uint256 treasuryShares, uint256 treasuryAssets);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`profitAccrued`|`uint256`|The profit accrued since the last update|
|`treasuryShares`|`uint256`|The number of shares minted for the treasury|
|`treasuryAssets`|`uint256`|The number of assets minted for the treasury|

### CapacityUpdated
Event emitted on capacity update


```solidity
event CapacityUpdated(uint256 capacity);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`capacity`|`uint256`|The amount after which the OsToken stops accepting deposits|

### TreasuryUpdated
Event emitted on treasury address update


```solidity
event TreasuryUpdated(address indexed treasury);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`treasury`|`address`|The new treasury address|

### FeePercentUpdated
Event emitted on fee percent update


```solidity
event FeePercentUpdated(uint16 feePercent);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`feePercent`|`uint16`|The new fee percent|

### AvgRewardPerSecondUpdated
Event emitted on average reward per second update


```solidity
event AvgRewardPerSecondUpdated(uint256 avgRewardPerSecond);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`avgRewardPerSecond`|`uint256`|The new average reward per second|

### KeeperUpdated
Event emitted on keeper address update


```solidity
event KeeperUpdated(address keeper);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`keeper`|`address`|The new keeper address|

