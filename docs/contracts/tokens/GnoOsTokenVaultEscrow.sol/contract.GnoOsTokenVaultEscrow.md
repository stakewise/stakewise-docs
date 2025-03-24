# GnoOsTokenVaultEscrow
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/tokens/GnoOsTokenVaultEscrow.sol)

**Inherits:**
[OsTokenVaultEscrow](/contracts/tokens/OsTokenVaultEscrow.sol/abstract.OsTokenVaultEscrow.md)

**Author:**
StakeWise

Used for initiating assets exits from the vault without burning osToken on Gnosis


## State Variables
### _gnoToken

```solidity
IERC20 private immutable _gnoToken;
```


## Functions
### constructor

*Constructor*


```solidity
constructor(
    address osTokenVaultController,
    address osTokenConfig,
    address initialOwner,
    address _authenticator,
    uint64 _liqThresholdPercent,
    uint256 _liqBonusPercent,
    address gnoToken
)
    OsTokenVaultEscrow(
        osTokenVaultController,
        osTokenConfig,
        initialOwner,
        _authenticator,
        _liqThresholdPercent,
        _liqBonusPercent
    );
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`osTokenVaultController`|`address`|The address of the OsTokenVaultController contract|
|`osTokenConfig`|`address`|The address of the OsTokenConfig contract|
|`initialOwner`|`address`|The address of the contract owner|
|`_authenticator`|`address`|The address of the OsTokenVaultEscrowAuth contract|
|`_liqThresholdPercent`|`uint64`|The liquidation threshold percent|
|`_liqBonusPercent`|`uint256`|The liquidation bonus percent|
|`gnoToken`|`address`|The address of the GNO token|


### _transferAssets

*Internal function for transferring assets from the Vault to the receiver*


```solidity
function _transferAssets(address receiver, uint256 assets) internal override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`receiver`|`address`|The address that will receive the assets|
|`assets`|`uint256`|The number of assets to transfer|


