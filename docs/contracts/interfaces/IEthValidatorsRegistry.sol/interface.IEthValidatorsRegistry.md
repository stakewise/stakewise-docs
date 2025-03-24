# IEthValidatorsRegistry
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IEthValidatorsRegistry.sol)

**Inherits:**
[IValidatorsRegistry](/contracts/interfaces/IValidatorsRegistry.sol/interface.IValidatorsRegistry.md)

**Author:**
Ethereum Foundation

This is the Ethereum validators deposit contract interface.
See https://github.com/ethereum/consensus-specs/blob/v1.2.0/solidity_deposit_contract/deposit_contract.sol.
For more information see the Phase 0 specification under https://github.com/ethereum/consensus-specs.


## Functions
### deposit

Submit a Phase 0 DepositData object.


```solidity
function deposit(
    bytes calldata pubkey,
    bytes calldata withdrawal_credentials,
    bytes calldata signature,
    bytes32 deposit_data_root
) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`pubkey`|`bytes`|A BLS12-381 public key.|
|`withdrawal_credentials`|`bytes`|Commitment to a public key for withdrawals.|
|`signature`|`bytes`|A BLS12-381 signature.|
|`deposit_data_root`|`bytes32`|The SHA-256 hash of the SSZ-encoded DepositData object. Used as a protection against malformed input.|


