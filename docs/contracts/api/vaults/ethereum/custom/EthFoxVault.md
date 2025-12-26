---
title: EthFoxVault
sidebar_position: 1
description: "Custom Ethereum non-ERC20 vault with blocklist, own MEV and without osToken minting"
---

# EthFoxVault

[Git Source ↗](https://github.com/stakewise/eth-core/blob/c511cd912cb881f60cf2a32d6c5d5f533e5d04b5/contracts/vaults/ethereum/custom/EthFoxVault.sol)

**Inherits:** [VaultImmutables →](../../modules/VaultImmutables), [Initializable ↗](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/utils/Initializable.sol), [VaultAdmin →](../../modules/VaultAdmin), [VaultVersion →](../../modules/VaultVersion), [VaultFee →](../../modules/VaultFee), [VaultState →](../../modules/VaultState), [VaultValidators →](../../modules/VaultValidators), [VaultEnterExit →](../../modules/VaultEnterExit), [VaultMev →](../../modules/VaultMev), [VaultEthStaking →](../../modules/VaultEthStaking), [VaultBlocklist →](../../modules/VaultBlocklist), [Multicall →](../../../base/Multicall), IEthFoxVault

Custom Ethereum non-ERC20 vault with blocklist, own MEV and without osToken minting.


## Structs
### EthFoxVaultConstructorArgs
Struct for deploying the EthFoxVault contract


```solidity
struct EthFoxVaultConstructorArgs {
    address keeper;
    address vaultsRegistry;
    address validatorsRegistry;
    address validatorsWithdrawals;
    address validatorsConsolidations;
    address consolidationsChecker;
    address sharedMevEscrow;
    address depositDataRegistry;
    uint64 exitingAssetsClaimDelay;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`keeper`|`address`|The address of the Keeper contract|
|`vaultsRegistry`|`address`|The address of the VaultsRegistry contract|
|`validatorsRegistry`|`address`|The contract address used for registering validators in beacon chain|
|`validatorsWithdrawals`|`address`|The contract address used for withdrawing validators in beacon chain|
|`validatorsConsolidations`|`address`|The contract address used for consolidating validators in beacon chain|
|`consolidationsChecker`|`address`|The contract address used for checking consolidations|
|`sharedMevEscrow`|`address`|The address of the shared MEV escrow|
|`depositDataRegistry`|`address`|The address of the DepositDataRegistry contract|
|`exitingAssetsClaimDelay`|`uint64`|The delay after which the assets can be claimed after exiting from staking|

### EthFoxVaultInitParams
Struct for initializing the EthFoxVault contract


```solidity
struct EthFoxVaultInitParams {
    address admin;
    address ownMevEscrow;
    uint256 capacity;
    uint16 feePercent;
    string metadataIpfsHash;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`admin`|`address`|The address of the Vault admin|
|`ownMevEscrow`|`address`|The address of the MEV escrow contract|
|`capacity`|`uint256`|The Vault stops accepting deposits after exceeding the capacity|
|`feePercent`|`uint16`|The fee percent that is charged by the Vault|
|`metadataIpfsHash`|`string`|The IPFS hash of the Vault's metadata file|


## Events
### UserEjected
Event emitted when a user is ejected from the Vault


```solidity
event UserEjected(address user, uint256 shares);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The address of the user|
|`shares`|`uint256`|The amount of shares ejected|

### EthFoxVaultCreated
Event emitted on EthFoxVault creation


```solidity
event EthFoxVaultCreated(
    address admin, address ownMevEscrow, uint256 capacity, uint16 feePercent, string metadataIpfsHash
);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`admin`|`address`|The address of the Vault admin|
|`ownMevEscrow`|`address`|The address of the MEV escrow contract|
|`capacity`|`uint256`|The capacity of the Vault|
|`feePercent`|`uint16`|The fee percent of the Vault|
|`metadataIpfsHash`|`string`|The IPFS hash of the Vault metadata|


## Functions

### deposit

Deposit ETH to the Vault


```solidity
function deposit(address receiver, address referrer)
    public
    payable
    virtual
    override(IVaultEthStaking, VaultEthStaking)
    returns (uint256 shares);
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


### ejectUser

Ejects user from the Vault. Can only be called by the blocklist manager.
The ejected user will be added to the blocklist and all his shares will be sent to the exit queue.


```solidity
function ejectUser(address user) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The address of the user to eject|


### receive

Function for depositing using fallback function


```solidity
receive() external payable virtual override;
```

### vaultId


```solidity
function vaultId() public pure virtual override(IVaultVersion, VaultVersion) returns (bytes32);
```

### version

Version


```solidity
function version() public pure virtual override(IVaultVersion, VaultVersion) returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|
