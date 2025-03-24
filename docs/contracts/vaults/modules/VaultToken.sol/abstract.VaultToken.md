# VaultToken
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/modules/VaultToken.sol)

**Inherits:**
Initializable, [ERC20Upgradeable](/contracts/base/ERC20Upgradeable.sol/abstract.ERC20Upgradeable.md), [VaultState](/contracts/vaults/modules/VaultState.sol/abstract.VaultState.md), [IVaultToken](/contracts/interfaces/IVaultToken.sol/interface.IVaultToken.md)

**Author:**
StakeWise

Defines the token functionality for the Vault


## State Variables
### __gap
*This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps*


```solidity
uint256[50] private __gap;
```


## Functions
### totalSupply

Returns the amount of tokens in existence.


```solidity
function totalSupply() external view override returns (uint256);
```

### balanceOf

Returns the amount of tokens owned by `account`.


```solidity
function balanceOf(address account) external view returns (uint256);
```

### _mintShares

*Internal function for minting shares*


```solidity
function _mintShares(address owner, uint256 shares) internal virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner to mint shares to|
|`shares`|`uint256`|The number of shares to mint|


### _burnShares

*Internal function for burning shares*


```solidity
function _burnShares(address owner, uint256 shares) internal virtual override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`owner`|`address`|The address of the owner to burn shares for|
|`shares`|`uint256`|The number of shares to burn|


### _updateExitQueue

*Internal function that must be used to process exit queue*


```solidity
function _updateExitQueue() internal virtual override returns (uint256 burnedShares);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`burnedShares`|`uint256`|The total amount of burned shares|


### _transfer

*Moves `amount` of tokens from `from` to `to`.
Emits a {Transfer} event.*


```solidity
function _transfer(address from, address to, uint256 amount) internal virtual override;
```

### __VaultToken_init

*Initializes the VaultToken contract*


```solidity
function __VaultToken_init(string memory _name, string memory _symbol) internal onlyInitializing;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_name`|`string`|The name of the ERC20 token|
|`_symbol`|`string`|The symbol of the ERC20 token|


