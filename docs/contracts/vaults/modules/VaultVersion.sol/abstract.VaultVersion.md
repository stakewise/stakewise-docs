# VaultVersion
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/modules/VaultVersion.sol)

**Inherits:**
[VaultImmutables](/contracts/vaults/modules/VaultImmutables.sol/abstract.VaultImmutables.md), Initializable, UUPSUpgradeable, [VaultAdmin](/contracts/vaults/modules/VaultAdmin.sol/abstract.VaultAdmin.md), [IVaultVersion](/contracts/interfaces/IVaultVersion.sol/interface.IVaultVersion.md)

**Author:**
StakeWise

Defines the versioning functionality for the Vault


## State Variables
### _initSelector

```solidity
bytes4 private constant _initSelector = bytes4(keccak256("initialize(bytes)"));
```


### __gap
*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


```solidity
uint256[50] private __gap;
```


## Functions
### implementation

Implementation


```solidity
function implementation() external view override returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the Vault implementation contract|


### upgradeToAndCall

*Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call
encoded in `data`.
Calls _authorizeUpgrade.
Emits an Upgraded event.*

**Note:**
oz-upgrades-unsafe-allow-reachable: delegatecall


```solidity
function upgradeToAndCall(address newImplementation, bytes memory data) public payable override onlyProxy;
```

### _authorizeUpgrade

*Function that should revert when `msg.sender` is not authorized to upgrade the contract. Called by
upgradeToAndCall.
Normally, this function will use an xref:access.adoc[access control] modifier such as Ownable-onlyOwner.
```solidity
function _authorizeUpgrade(address) internal onlyOwner {}
```*


```solidity
function _authorizeUpgrade(address newImplementation) internal view override;
```

### vaultId

Vault Unique Identifier


```solidity
function vaultId() public pure virtual override returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The unique identifier of the Vault|


### version

Version


```solidity
function version() public pure virtual override returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|


