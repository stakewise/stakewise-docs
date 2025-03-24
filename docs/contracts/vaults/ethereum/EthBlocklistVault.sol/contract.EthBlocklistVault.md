# EthBlocklistVault
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/ethereum/EthBlocklistVault.sol)

**Inherits:**
Initializable, [EthVault](/contracts/vaults/ethereum/EthVault.sol/contract.EthVault.md), [VaultBlocklist](/contracts/vaults/modules/VaultBlocklist.sol/abstract.VaultBlocklist.md), [IEthBlocklistVault](/contracts/interfaces/IEthBlocklistVault.sol/interface.IEthBlocklistVault.md)

**Author:**
StakeWise

Defines the Ethereum staking Vault with blocking addresses functionality


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
constructor(EthVaultConstructorArgs memory args) EthVault(args);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`args`|`EthVaultConstructorArgs`|The arguments for initializing the EthVault contract|


### initialize

Initializes or upgrades the EthVault contract. Must transfer security deposit during the deployment.


```solidity
function initialize(bytes calldata params)
    external
    payable
    virtual
    override(IEthVault, EthVault)
    reinitializer(_version);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`bytes`|The encoded parameters for initializing the EthVault contract|


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


### vaultId

Vault Unique Identifier


```solidity
function vaultId() public pure virtual override(IVaultVersion, EthVault) returns (bytes32);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|The unique identifier of the Vault|


### version

Version


```solidity
function version() public pure virtual override(IVaultVersion, EthVault) returns (uint8);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint8`|The version of the Vault implementation contract|


