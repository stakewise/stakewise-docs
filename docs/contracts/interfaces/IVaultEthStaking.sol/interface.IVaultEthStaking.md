# IVaultEthStaking
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IVaultEthStaking.sol)

**Inherits:**
[IVaultState](/contracts/interfaces/IVaultState.sol/interface.IVaultState.md), [IVaultValidators](/contracts/interfaces/IVaultValidators.sol/interface.IVaultValidators.md), [IVaultEnterExit](/contracts/interfaces/IVaultEnterExit.sol/interface.IVaultEnterExit.md), [IVaultMev](/contracts/interfaces/IVaultMev.sol/interface.IVaultMev.md)

**Author:**
StakeWise

Defines the interface for the VaultEthStaking contract


## Functions
### deposit

Deposit ETH to the Vault


```solidity
function deposit(address receiver, address referrer) external payable returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive Vault's shares|
|`referrer`|`address`|The address of the referrer. Set to zero address if not used.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares minted|


### receiveFromMevEscrow

Used by MEV escrow to transfer ETH.


```solidity
function receiveFromMevEscrow() external payable;
```

### updateStateAndDeposit

Updates Vault state and deposits ETH to the Vault


```solidity
function updateStateAndDeposit(address receiver, address referrer, IKeeperRewards.HarvestParams calldata harvestParams)
    external
    payable
    returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive Vault's shares|
|`referrer`|`address`|The address of the referrer. Set to zero address if not used.|
|`harvestParams`|`IKeeperRewards.HarvestParams`|The parameters for harvesting Keeper rewards|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares minted|


