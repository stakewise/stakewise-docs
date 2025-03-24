# GnoDaiDistributor
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/misc/GnoDaiDistributor.sol)

**Inherits:**
ReentrancyGuard, [IGnoDaiDistributor](/contracts/interfaces/IGnoDaiDistributor.sol/interface.IGnoDaiDistributor.md)

**Author:**
StakeWise

Converts xDAI to sDAI and distributes it to the users using Merkle Distributor on Gnosis chain


## State Variables
### _sDaiToken

```solidity
address private immutable _sDaiToken;
```


### _vaultsRegistry

```solidity
IVaultsRegistry private immutable _vaultsRegistry;
```


### _savingsXDaiAdapter

```solidity
ISavingsXDaiAdapter private immutable _savingsXDaiAdapter;
```


### _merkleDistributor

```solidity
IMerkleDistributor private immutable _merkleDistributor;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(address sDaiToken, address vaultsRegistry, address savingsXDaiAdapter, address merkleDistributor)
    ReentrancyGuard();
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sDaiToken`|`address`|The address of the sDaiToken contract|
|`vaultsRegistry`|`address`|The address of the VaultsRegistry contract|
|`savingsXDaiAdapter`|`address`|The address of the SavingsXDaiAdapter contract|
|`merkleDistributor`|`address`||


### distributeSDai

Distribute sDAI to the users. Can be called only by the vaults. Must transfer xDAI together with the call.


```solidity
function distributeSDai() external payable nonReentrant;
```

