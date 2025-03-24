# IGnoVaultFactory
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IGnoVaultFactory.sol)

**Author:**
StakeWise

Defines the interface for the GNO Vault Factory contract


## Functions
### implementation

The address of the Vault implementation contract used for proxy creation


```solidity
function implementation() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the Vault implementation contract|


### ownMevEscrow

The address of the own MEV escrow contract used for Vault creation


```solidity
function ownMevEscrow() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the MEV escrow contract|


### vaultAdmin

The address of the Vault admin used for Vault creation


```solidity
function vaultAdmin() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the Vault admin|


### createVault

Create Vault. Must transfer security deposit together with a call.


```solidity
function createVault(bytes calldata params, bool isOwnMevEscrow) external returns (address vault);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the Vault contract|
|`isOwnMevEscrow`|`bool`|Whether to deploy own escrow contract or connect to a smoothing pool for priority fees and MEV rewards|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`vault`|`address`|The address of the created Vault|


## Events
### VaultCreated
Event emitted on a Vault creation


```solidity
event VaultCreated(address indexed admin, address indexed vault, address ownMevEscrow, bytes params);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`admin`|`address`|The address of the Vault admin|
|`vault`|`address`|The address of the created Vault|
|`ownMevEscrow`|`address`|The address of the own MEV escrow contract. Zero address if shared MEV escrow is used.|
|`params`|`bytes`|The encoded parameters for initializing the Vault contract|

