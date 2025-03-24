# VaultEnterExit
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/modules/VaultEnterExit.sol)

**Inherits:**
[VaultImmutables](/contracts/vaults/modules/VaultImmutables.sol/abstract.VaultImmutables.md), Initializable, [VaultState](/contracts/vaults/modules/VaultState.sol/abstract.VaultState.md), [IVaultEnterExit](/contracts/interfaces/IVaultEnterExit.sol/interface.IVaultEnterExit.md)

**Author:**
StakeWise

Defines the functionality for entering and exiting the Vault


## State Variables
### _exitingAssetsClaimDelay
**Note:**
oz-upgrades-unsafe-allow: state-variable-immutable


```solidity
uint256 private immutable _exitingAssetsClaimDelay;
```


### __gap
*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


```solidity
uint256[50] private __gap;
```


## Functions
### constructor

*Constructor*

*Since the immutable variable value is stored in the bytecode,
its value would be shared among all proxies pointing to a given contract instead of each proxy’s storage.*

**Note:**
oz-upgrades-unsafe-allow: constructor


```solidity
constructor(uint256 exitingAssetsClaimDelay);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`exitingAssetsClaimDelay`|`uint256`|The minimum delay after which the assets can be claimed after joining the exit queue|


### getExitQueueIndex

Get the exit queue index to claim exited assets from


```solidity
function getExitQueueIndex(uint256 positionTicket) external view override returns (int256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The exit queue position ticket to get the index for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`int256`|The exit queue index that should be used to claim exited assets. Returns -1 in case such index does not exist.|


### enterExitQueue

Locks shares to the exit queue. The shares continue earning rewards until they will be burned by the Vault.


```solidity
function enterExitQueue(uint256 shares, address receiver) public virtual override returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares to lock|
|`receiver`|`address`|The address that will receive assets upon withdrawal|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket of the exit queue. Returns uint256 max if no ticket created.|


### calculateExitedAssets

Calculates the number of shares and assets that can be claimed from the exit queue.


```solidity
function calculateExitedAssets(address receiver, uint256 positionTicket, uint256 timestamp, uint256 exitQueueIndex)
    public
    view
    override
    returns (uint256 leftTickets, uint256 exitedTickets, uint256 exitedAssets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive assets upon withdrawal|
|`positionTicket`|`uint256`|The exit queue ticket received after the `enterExitQueue` call|
|`timestamp`|`uint256`|The timestamp when the shares entered the exit queue|
|`exitQueueIndex`|`uint256`|The exit queue index at which the shares were burned. It can be looked up by calling `getExitQueueIndex`.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`leftTickets`|`uint256`|The number of tickets left in the queue|
|`exitedTickets`|`uint256`|The number of tickets that have already exited|
|`exitedAssets`|`uint256`|The number of assets that can be claimed|


### claimExitedAssets

Claims assets that were withdrawn by the Vault. It can be called only after the `enterExitQueue` call by the `receiver`.


```solidity
function claimExitedAssets(uint256 positionTicket, uint256 timestamp, uint256 exitQueueIndex) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The exit queue ticket received after the `enterExitQueue` call|
|`timestamp`|`uint256`|The timestamp when the assets entered the exit queue|
|`exitQueueIndex`|`uint256`|The exit queue index at which the shares were burned. It can be looked up by calling `getExitQueueIndex`.|


### _deposit

*Internal function that must be used to process user deposits*


```solidity
function _deposit(address to, uint256 assets, address referrer) internal virtual returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`to`|`address`|The address to mint shares to|
|`assets`|`uint256`|The number of assets deposited|
|`referrer`|`address`|The address of the referrer. Set to zero address if not used.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The total amount of shares minted|


### _enterExitQueue

*Internal function for sending user shares to the exit queue*


```solidity
function _enterExitQueue(address user, uint256 shares, address receiver)
    internal
    virtual
    returns (uint256 positionTicket);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`user`|`address`|The address of the user|
|`shares`|`uint256`|The number of shares to send to exit queue|
|`receiver`|`address`|The address that will receive the assets|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`positionTicket`|`uint256`|The position ticket in the exit queue. Returns max uint256 if no ticket is created.|


### _transferVaultAssets

*Internal function for transferring assets from the Vault to the receiver*

*IMPORTANT: because control is transferred to the receiver, care must be
taken to not create reentrancy vulnerabilities. The Vault must follow the checks-effects-interactions pattern:
https://docs.soliditylang.org/en/v0.8.22/security-considerations.html#use-the-checks-effects-interactions-pattern*


```solidity
function _transferVaultAssets(address receiver, uint256 assets) internal virtual;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the assets|
|`assets`|`uint256`|The number of assets to transfer|


