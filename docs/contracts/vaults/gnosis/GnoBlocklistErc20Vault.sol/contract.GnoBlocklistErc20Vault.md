# GnoBlocklistErc20Vault
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/gnosis/GnoBlocklistErc20Vault.sol)

**Inherits:**
Initializable, [GnoErc20Vault](/contracts/vaults/gnosis/GnoErc20Vault.sol/contract.GnoErc20Vault.md), [VaultBlocklist](/contracts/vaults/modules/VaultBlocklist.sol/abstract.VaultBlocklist.md), [IGnoBlocklistErc20Vault](/contracts/interfaces/IGnoBlocklistErc20Vault.sol/interface.IGnoBlocklistErc20Vault.md)

**Author:**
StakeWise

Defines the Gnosis staking Vault with blocking and ERC-20 functionality


## State Variables
### _version

```solidity
uint8 private constant _version = 3;
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
constructor(GnoErc20VaultConstructorArgs memory args) GnoErc20Vault(args);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`args`|`GnoErc20VaultConstructorArgs`|The arguments for initializing the GnoErc20Vault contract|


### initialize

Initializes or upgrades the GnoErc20Vault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata params)
    external
    virtual
    override(IGnoErc20Vault, GnoErc20Vault)
    reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the GnoErc20Vault contract|


### deposit

Deposit GNO to the Vault


```solidity
function deposit(uint256 assets, address receiver, address referrer)
    public
    virtual
    override(IVaultGnoStaking, VaultGnoStaking)
    returns (uint256 shares);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The amount of GNO to deposit|
|`receiver`|`address`|The address that will receive Vault's shares|
|`referrer`|`address`|The address of the referrer. Set to zero address if not used.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`shares`|`uint256`|The number of shares minted|


### mintOsToken

Mints OsToken shares


```solidity
function mintOsToken(address receiver, uint256 osTokenShares, address referrer)
    public
    virtual
    override(IVaultOsToken, VaultOsToken)
    returns (uint256 assets);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the minted OsToken shares|
|`osTokenShares`|`uint256`|The number of OsToken shares to mint to the receiver. To mint the maximum amount of shares, use 2^256 - 1.|
|`referrer`|`address`|The address of the referrer|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`assets`|`uint256`|The number of assets minted to the receiver|


### vaultId

Vault Unique Identifier


```solidity
function vaultId() public pure virtual override(IVaultVersion, GnoErc20Vault) returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The unique identifier of the Vault|


### version

Version


```solidity
function version() public pure virtual override(IVaultVersion, GnoErc20Vault) returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|


### _transfer

*Moves `amount` of tokens from `from` to `to`.
Emits a {Transfer} event.*


```solidity
function _transfer(address from, address to, uint256 amount) internal virtual override;
```

