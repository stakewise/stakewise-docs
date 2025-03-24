# IMerkleDistributor
[Git Source](https://github.com/stakewise/v3-core/blob/c4059a64871829ca60ea58f054baf8eb13d3572a/contracts/interfaces/IMerkleDistributor.sol)

**Author:**
StakeWise

Defines the interface for the MerkleDistributor contract


## Functions
### distributeOneTime

Distribute tokens one time


```solidity
function distributeOneTime(address token, uint256 amount, string calldata rewardsIpfsHash, bytes calldata extraData)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|The address of the token|
|`amount`|`uint256`|The amount of tokens to distribute|
|`rewardsIpfsHash`|`string`|The IPFS hash of the rewards|
|`extraData`|`bytes`|The extra data for the distribution|


### setDistributor

Add or remove a distributor. Can only be called by the owner.


```solidity
function setDistributor(address distributor, bool isEnabled) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`distributor`|`address`|The address of the distributor|
|`isEnabled`|`bool`|The status of the distributor, true for adding distributor, false for removing distributor|


### owner

*Returns the address of the current owner.*


```solidity
function owner() external view returns (address);
```

