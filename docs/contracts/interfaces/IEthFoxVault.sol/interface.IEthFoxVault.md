# IEthFoxVault
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IEthFoxVault.sol)

**Inherits:**
[IVaultAdmin](/contracts/interfaces/IVaultAdmin.sol/interface.IVaultAdmin.md), [IVaultVersion](/contracts/interfaces/IVaultVersion.sol/interface.IVaultVersion.md), [IVaultFee](/contracts/interfaces/IVaultFee.sol/interface.IVaultFee.md), [IVaultState](/contracts/interfaces/IVaultState.sol/interface.IVaultState.md), [IVaultValidators](/contracts/interfaces/IVaultValidators.sol/interface.IVaultValidators.md), [IVaultEnterExit](/contracts/interfaces/IVaultEnterExit.sol/interface.IVaultEnterExit.md), [IVaultMev](/contracts/interfaces/IVaultMev.sol/interface.IVaultMev.md), [IVaultEthStaking](/contracts/interfaces/IVaultEthStaking.sol/interface.IVaultEthStaking.md), [IVaultBlocklist](/contracts/interfaces/IVaultBlocklist.sol/interface.IVaultBlocklist.md), [IMulticall](/contracts/interfaces/IMulticall.sol/interface.IMulticall.md)

**Author:**
StakeWise

Defines the interface for the EthFoxVault contract


## Functions
### initialize

Initializes or upgrades the EthFoxVault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata params) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the EthFoxVault contract|


### ejectUser

Ejects user from the Vault. Can only be called by the blocklist manager.
The ejected user will be added to the blocklist and all his shares will be sent to the exit queue.


```solidity
function ejectUser(address user) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The address of the user to eject|


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

## Structs
### EthFoxVaultInitParams
*Struct for initializing the EthFoxVault contract*


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

