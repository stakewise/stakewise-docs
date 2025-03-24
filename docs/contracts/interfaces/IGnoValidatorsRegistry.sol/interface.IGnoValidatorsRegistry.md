# IGnoValidatorsRegistry
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IGnoValidatorsRegistry.sol)

**Inherits:**
[IValidatorsRegistry](/contracts/interfaces/IValidatorsRegistry.sol/interface.IValidatorsRegistry.md)

**Author:**
Gnosis

This is the Gnosis validators deposit contract interface.
See https://github.com/gnosischain/deposit-contract/blob/master/contracts/SBCDepositContract.sol.


## Functions
### withdrawableAmount

The amount of GNO that is withdrawable by the address


```solidity
function withdrawableAmount(address _address) external view returns (uint256);
```

### deposit

Submit a Phase 0 DepositData object.


```solidity
function deposit(
    bytes memory pubkey,
    bytes memory withdrawal_credentials,
    bytes memory signature,
    bytes32 deposit_data_root,
    uint256 stake_amount
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`pubkey`|`bytes`|A BLS12-381 public key.|
|`withdrawal_credentials`|`bytes`|Commitment to a public key for withdrawals.|
|`signature`|`bytes`|A BLS12-381 signature.|
|`deposit_data_root`|`bytes32`|The SHA-256 hash of the SSZ-encoded DepositData object.|
|`stake_amount`|`uint256`|The amount of GNO to stake. Used as a protection against malformed input.|


### batchDeposit

Submit multiple Phase 0 DepositData objects.


```solidity
function batchDeposit(
    bytes calldata pubkeys,
    bytes calldata withdrawal_credentials,
    bytes calldata signatures,
    bytes32[] calldata deposit_data_roots
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`pubkeys`|`bytes`|Concatenated array of BLS12-381 public keys.|
|`withdrawal_credentials`|`bytes`|Commitment to a public key for withdrawals.|
|`signatures`|`bytes`|Concatenated array of BLS12-381 signatures.|
|`deposit_data_roots`|`bytes32[]`|Array of SHA-256 hashes of the SSZ-encoded DepositData objects.|


### claimWithdrawal

Claim withdrawal amount for an address.


```solidity
function claimWithdrawal(address _address) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_address`|`address`|Address to transfer withdrawable tokens.|


