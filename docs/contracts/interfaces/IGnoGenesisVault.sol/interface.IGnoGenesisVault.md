# IGnoGenesisVault
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IGnoGenesisVault.sol)

**Inherits:**
[IGnoVault](/contracts/interfaces/IGnoVault.sol/interface.IGnoVault.md)

**Author:**
StakeWise

Defines the interface for the GnoGenesisVault contract


## Functions
### migrate

Function for migrating from StakeWise Legacy. Can be called only by RewardGnoToken contract.


```solidity
function migrate(address receiver, uint256 assets) external returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address of the receiver|
|`assets`|`uint256`|The amount of assets migrated|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The amount of shares minted|


## Events
### Migrated
Event emitted on migration from StakeWise Legacy


```solidity
event Migrated(address receiver, uint256 assets, uint256 shares);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address of the shares receiver|
|`assets`|`uint256`|The amount of assets migrated|
|`shares`|`uint256`|The amount of shares migrated|

### GenesisVaultCreated
Event emitted on GnoGenesisVault creation (deprecated)


```solidity
event GenesisVaultCreated(address admin, uint256 capacity, uint16 feePercent, string metadataIpfsHash);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`admin`|`address`|The address of the Vault admin|
|`capacity`|`uint256`|The capacity of the Vault|
|`feePercent`|`uint16`|The fee percent of the Vault|
|`metadataIpfsHash`|`string`|The IPFS hash of the Vault metadata|

