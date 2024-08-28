---
cover: ../.gitbook/assets/Frame 27513376 (1).png
coverY: 0
layout:
  cover:
    visible: true
    size: full
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Oracles



<figure><img src="../.gitbook/assets/image (3).png" alt="" width="563"><figcaption><p>Oracles updating rewards</p></figcaption></figure>

Currently, there is no way to fetch the Beacon Chain state in the EVM. It is planned to make it available in [EIP-4788](https://eips.ethereum.org/EIPS/eip-4788). Until then, StakeWise uses Oracles to fetch rewards from the Beacon Chain and submit the updates to the contracts. The Oracles are listed [here](../protocol-overview-in-depth/oracles.md). The Oracles are selected and [approved](https://vote.stakewise.io/#/proposal/0x54ceedefd1060fbad17ab6181be5a90da4c686dc071d1f6121d24c0398700be6) by the StakeWise DAO. The Oracles run the [v3-oracle](https://github.com/stakewise/v3-oracle) nodes and have the following responsibilities:

### Rewards update

The Oracles periodically vote for the rewards/penalties accumulated by the Vaults in the Beacon Chain and execution rewards (MEV & priority fees) for the Vaults connected to the smoothing pool.

The voting process consists of the following steps:

1. Check whether 12 hours passed since the last rewards distribution
2. Calculate consensus rewards/penalties for all the Vaults based on their validator balances in the Beacon Chain.
3. Calculate execution rewards/penalties for the Vaults connected to the smoothing pool.&#x20;
4. Calculate the [Merkle tree](https://en.wikipedia.org/wiki/Merkle\_tree) based on consensus/execution rewards from the previous steps and upload it to IPFS. For example, [bafkreibqhdr6p5uh67ickt4dpppb525bwuofjocnpsx4dbl57llogfph2e](https://stakewise.infura-ipfs.io/ipfs/bafkreibqhdr6p5uh67ickt4dpppb525bwuofjocnpsx4dbl57llogfph2e).
5. Save the vote to the database and make it available through public API.

Anyone who runs [v3-keeper](https://github.com/stakewise/v3-keeper/) will fetch votes from Oracles endpoints, concatenate them and send them to the [Keeper contract](https://v3-docs.stakewise.io/deployments). Currently, 6 out of 11 votes are required to submit an update. Once the update has submitted, Vaults can pull the updates through the `updateState` call.

### Validator(s) registration

The operators ([v3-operator](https://github.com/stakewise/v3-operator)) periodically check whether their Vaults have accumulated enough ETH for registering new validator(s) and send a registration approval request to oracles. This is done to receive an exit signature for the validator so that it could be later exited in case the staker submits an exit request and to protect from the attack described [here](https://blog.lido.fi/vulnerability-response-update/). The operator must receive 8 out of 11 approvals from the oracles to register a validator for the Vault.

The validator registration process consists of the following steps:

1. The operator sends a registration request with a payload to the oracles.
2. Oracles validate operator request.
3. Oracles sign and return the registration approval to the operator if it is correct.
4. The operator submits the registration transaction to the Vault contract.
5. The Vault contract validates oracles' signatures and moves ETH from the Vault to the Beacon Chain contract.

## Vault state

Once oracles submit a new Merkle tree root to the Keeper contract, every Vault can pull these updates by calling `vault.updateState`. To check whether updates can be pulled from the Keeper contract, the `keeper.canHarvest` can be called. The state becomes outdated once the Vault hasn't pulled two consequent updates. To check whether the state is outdated, call a `keeper.isHarvestRequired`.

The Vault state can be updated in one of the following ways:

1. By the user during interaction with the Vault. This can be done by wrapping the call (e.g., redeem, osETH mint, etc.) with a `multicall` and adding a state update. For example,

```typescript
const balance = await vaultContract.balanceOf(staker.address)
let tx
if (await keeperContract.canHarvest(vaultContract.address)) {
  const calls = [
    vaultContract.interface.encodeFunctionData('updateState', [harvestParams]),
    vaultContract.interface.encodeFunctionData('redeem', [balance, staker.address]),
  ]
  tx = await vaultContract.connect(staker).multicall(calls)
} else {
  tx = await vaultContract.connect(staker).redeem(balance, staker.address)
}
```

{% hint style="info" %}
The **harvestParams** can be fetched from the [StakeWise subgraph](https://graph-testnet.stakewise.io/subgraphs/name/stakewise/stakewise/graphql?query=%7B%0A++vaults%28where%3A+%7Bid%3A+%220x8bfdd3b6c4102e2ba772968637f3172b73855ffa%22%7D%29+%7B%0A++++rewardsRoot%0A++++proofReward%0A++++proofUnlockedMevReward%0A++++proof%0A++%7D%0A%7D) or by fetching the last [RewardsUpdated](https://github.com/stakewise/v3-core/blob/main/contracts/interfaces/IKeeperRewards.sol#L22) event from the [Keeper contract](https://v3-docs.stakewise.io/deployments), extracting the `rewardsIpfsHash`, fetching the file, and getting the parameters for your Vault from it.
{% endhint %}

2. By the Vault operator by passing `--harvest-vault` to the `start` command in [v3-operator](https://github.com/stakewise/v3-operator).

