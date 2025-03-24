# GnoVaultFactory
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/vaults/gnosis/GnoVaultFactory.sol)

**Inherits:**
[IGnoVaultFactory](/contracts/interfaces/IGnoVaultFactory.sol/interface.IGnoVaultFactory.md)

**Author:**
StakeWise

Factory for deploying Gnosis staking Vaults


## State Variables
### _securityDeposit

```solidity
uint256 private constant _securityDeposit = 1e9;
```


### _vaultsRegistry

```solidity
IVaultsRegistry internal immutable _vaultsRegistry;
```


### _gnoToken

```solidity
IERC20 internal immutable _gnoToken;
```


### implementation
The address of the Vault implementation contract used for proxy creation


```solidity
address public immutable override implementation;
```


### ownMevEscrow
The address of the own MEV escrow contract used for Vault creation


```solidity
address public override ownMevEscrow;
```


### vaultAdmin
The address of the Vault admin used for Vault creation


```solidity
address public override vaultAdmin;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(address _implementation, IVaultsRegistry vaultsRegistry, address gnoToken);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_implementation`|`address`|The implementation address of Vault|
|`vaultsRegistry`|`IVaultsRegistry`|The address of the VaultsRegistry contract|
|`gnoToken`|`address`|The address of the GNO token|


### createVault

Create Vault. Must transfer security deposit together with a call.


```solidity
function createVault(bytes calldata params, bool isOwnMevEscrow) external override returns (address vault);
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


