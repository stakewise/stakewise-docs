# EthPrivErc20Vault
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/ethereum/EthPrivErc20Vault.sol)

**Inherits:**
Initializable, [EthErc20Vault](/contracts/vaults/ethereum/EthErc20Vault.sol/contract.EthErc20Vault.md), [VaultWhitelist](/contracts/vaults/modules/VaultWhitelist.sol/abstract.VaultWhitelist.md), [IEthPrivErc20Vault](/contracts/interfaces/IEthPrivErc20Vault.sol/interface.IEthPrivErc20Vault.md)

**Author:**
StakeWise

Defines the Ethereum staking Vault with whitelist and ERC-20 token


## State Variables
### _version

```solidity
uint8 private constant _version = 5;
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
constructor(EthErc20VaultConstructorArgs memory args) EthErc20Vault(args);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`args`|`EthErc20VaultConstructorArgs`|The arguments for initializing the EthErc20Vault contract|


### initialize

Initializes or upgrades the EthErc20Vault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata params)
    external
    payable
    virtual
    override(IEthErc20Vault, EthErc20Vault)
    reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the EthErc20Vault contract|


### vaultId

Vault Unique Identifier


```solidity
function vaultId() public pure virtual override(IVaultVersion, EthErc20Vault) returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The unique identifier of the Vault|


### version

Version


```solidity
function version() public pure virtual override(IVaultVersion, EthErc20Vault) returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|


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


### receive

*Function for depositing using fallback function*


```solidity
receive() external payable virtual override;
```

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


### _transfer

*Moves `amount` of tokens from `from` to `to`.
Emits a Transfer event.*


```solidity
function _transfer(address from, address to, uint256 amount) internal virtual override;
```

