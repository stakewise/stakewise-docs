---
cover: ../.gitbook/assets/Frame 27513376 (1).png
coverY: 0
---

# Create a Vault

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption><p>Vault creation</p></figcaption></figure>

Vaults are created through the `EthVaultFactory` contracts. The factory deploys and initializes the `ERC-1967` proxy and registers the vault to the `VaultsRegistry` so that other contracts can verify the validity of the Vault by checking whether it's in the registry.

{% hint style="info" %}
You can find the addresses of the factories for all the vault types [here](https://github.com/stakewise/v3-core/blob/main/deployments/mainnet.json).
{% endhint %}

The vault can be deployed by calling the `createVault` function of the `EthVaultFactory` contract:

<pre class="language-solidity"><code class="lang-solidity"><strong>function createVault(bytes params, bool isOwnMevEscrow) external payable returns (address vault)
</strong></code></pre>

### **Parameters**

<table><thead><tr><th>Name</th><th width="187.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td>params</td><td>bytes</td><td>The encoded parameters for initializing the Vault contract</td></tr><tr><td>isOwnMevEscrow</td><td>bool</td><td>Whether to deploy own escrow contract or connect to a smoothing pool for priority fees and MEV rewards</td></tr></tbody></table>

{% hint style="info" %}
The **security deposit** **of 1 gwei** must be transferred with the call. This protects the Vault stakers from the inflation attack described [here](https://github.com/OpenZeppelin/openzeppelin-contracts/issues/3706).
{% endhint %}

You must encode the `params` argument differently based on whether you create vault with the ERC-20 token or without.

#### Vault without ERC-20 token

To encode the parameters for the vault without an ERC-20 token, you have to provide the following:

* `capacity` - defines at what TVL in Wei the vault stops accepting new deposits. To make it unlimited, provide the max `uint256` value of 2^256 - 1.
* `feePercent` - defines the percent that you want to charge from the stakes rewards. Must be provided in BPS. For example, if you want to charge 5% from the stakers rewards, you must provide 500. The max value is 10000 (100%).
* `metadataIpfsHash` - The IPFS hash to the file that contains the name, description, and icon for the vault branding (e.g., [bafkreictxn323g4ad3rumxkykqayl5kluozhcet45paen2dnvetdu4ptoe](https://stakewise.infura-ipfs.io/ipfs/bafkreictxn323g4ad3rumxkykqayl5kluozhcet45paen2dnvetdu4ptoe)). It's an optional value; you can skip it by specifying an empty string (`""`).

You must encode the parameters to the byte string. You can use the following function for that:

```typescript
import { BigNumber } from '@ethersproject/bignumber'
import { defaultAbiCoder } from '@ethersproject/abi'

// encode params for vault without ERC-20 token
function encodeEthVaultInitParams(
  capacity: BigNumber,
  feePercent: number,
  metadataIpfsHash: string
): string {
  return defaultAbiCoder.encode(
    ['tuple(uint256 capacity, uint16 feePercent, string metadataIpfsHash)'],
    [[capacity, feePercent, metadataIpfsHash]]
  )
}
```

#### Vault with ERC-20 token

In addition to the parameters provided for the vault without an ERC-20 token, you have to provide the following:

* `name` - the name of the ERC-20 token. It cannot exceed 30 characters. For example, Vitalik Staked ETH.
* `symbol` - the symbol of the ERC-20 token. It cannot exceed ten characters. For example, vstETH.

You must encode the parameters to the byte string. You can use the following function for that:

```typescript
import { BigNumber } from '@ethersproject/bignumber'
import { defaultAbiCoder } from '@ethersproject/abi'

function encodeEthErc20VaultInitParams(
  capacity: BigNumber,
  feePercent: number,
  name: string,
  symbol: string,
  metadataIpfsHash: string
): string {
  return defaultAbiCoder.encode(
    [
      'tuple(uint256 capacity, uint16 feePercent, string name, string symbol, string metadataIpfsHash)',
    ],
    [[capacity, feePercent, name, symbol, metadataIpfsHash]]
  )
}
```

### **Return Values**

| Name  | Type    | Description                      |
| ----- | ------- | -------------------------------- |
| vault | address | The address of the created Vault |
