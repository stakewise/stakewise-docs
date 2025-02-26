---
description: >-
  This guide will walk you through the process of allocating incentives directly
  to your StakeWise vault.
---

# Vault incentives

If you would like to add any of the incentives, you can either reach out to the StakeWise development team (e.g., [info@stakewise.io](mailto:info@stakewise.io), [Telegram](https://t.me/stakewise_io), or [Discord](https://discord.gg/2BSdr2g)) and they will submit the allocation for you, or you can write to the [StakeWise Forum](https://forum.stakewise.io/) to request being listed as a distributor for the [Merkle Distributor](https://etherscan.io/address/0xa9dc250df4ee9273d09cfa455da41fb1cac78d34) contract. Once approved by the DAO, you will be able to allocate extra incentives to your vault directly, without an intermediary.

{% hint style="warning" %}
The following tokens are currently supported for distribution: SWISE, osETH, SSV, Obol, WETH, and USDC. If you would like to distribute a different token, feel free to reach out.&#x20;
{% endhint %}

### Periodic distribution to the vault

You can distribute token for any period of time to all the vault stakers. Use periodic distributions when you want to provide consistent and scheduled incentives to all vault stakers over a defined period. For example, you can distribute SSV/Obol tokens to your vault stakers.

Incentives will be allocated every hour to all vault users based on their staked balance, with merkle root    updates by Oracles DAO. Users can claim their incentives at any time through the StakeWise App:

<figure><img src="../.gitbook/assets/ScreenRecording2025-02-26at01.25.31-ezgif.com-video-to-gif-converter.gif" alt=""><figcaption><p>Claiming rewards</p></figcaption></figure>

The extra incentives will be added to both the base APY and the boost APY of the vault. They will also be included in the user's reward statistics.

If your address is approved by the DAO as a distributor, you will be able to allocate periodic incentives to your vault by following these steps:

* Go to the [Merkle Distributor](https://etherscan.io/address/0xa9dc250df4ee9273d09cfa455da41fb1cac78d34) contract.
* Click **Contract** → **Write Contract**.
* Click **Connect to Web3** and connect with the address that the DAO has approved as a distributor.
* Click d**istributePeriodically** and enter the following:
  1. `token` – token address. Currently, only SWISE, osETH, SSV, WETH, and USDC are supported.
  2. `amount` – amount in Wei. **Note**: You must approve the transfer of the specified amount to the Merkle Distributor contract address.
  3. `delayInSeconds` – the delay before starting the distribution.
  4. `durationInSeconds` – the duration of the distribution in seconds.
  5. `extraData` – the address of the vault.

### One time distribution to the vault

You can distribute tokens to the vault stakers as a one-time allocation. The one-time distribution feature is ideal for scenarios where a specific, lump-sum allocation of tokens is needed, ensuring that all stakers receive their share instantly. This method is particularly advantageous for distributing rewards quickly without requiring ongoing management of allocations.

Incentives will be allocated to all vault users based on their staked balance at the time of the transaction. The StakeWise Oracles DAO will then submit an update to the [Merkle Distributor](https://etherscan.io/address/0xa9dc250df4ee9273d09cfa455da41fb1cac78d34) contract, and users will be able to claim the extra tokens from the UI. The distributed tokens will be included in the user's reward statistics.

If your address is approved by the DAO as a distributor, you will be able to allocate one-time incentives to your vault by following these steps:

* Go to the [Merkle Distributor](https://etherscan.io/address/0xa9dc250df4ee9273d09cfa455da41fb1cac78d34) contract.
* Click **Contract** → **Write Contract**.
* Click **Connect to Web3** and connect with the address that the DAO has approved as a distributor.
* Click d**istributeOneTime** and enter the following:
  1. `token` – token address. Currently, only SWISE, osETH, SSV, WETH, and USDC are supported.
  2. `amount` – amount in Wei. **Note**: You must approve the transfer of the specified amount to the Merkle Distributor contract address.
  3. `rewardsIpfsHash`- not used here, pass empty string `""`.
  4. `extraData` – the address of the vault.

### One time distribution from the IPFS file

With this option, you can distribute tokens to vault stakers based on an allocation file uploaded to IPFS. This method is suitable when managing complex distributions involving large numbers of recipients or when the distribution details are pre-determined and stored externally.

To proceed with an IPFS-based distribution:

1. Prepare your distribution file and upload it to IPFS. The file should be JSON formatted and include addresses and corresponding amounts as follows:

```json
[
  {
    "address": "0x6280431e7D155073B51197d0C487f4385ed1b5b7",
    "amount": "1200000000000000000"
  },
  {
    "address": "0x5471C1A73FcbA6357A617779cDdA8B1F2952Be54",
    "amount": "1800000000000000000"
  }
]
```

1. Upload file to IPFS and obtain hash for it. For example, `bafkreig3c7venh7xlbqap2r5idlva73gooflgadilxnmav24bnyvltvouq`
2. Go to [Merkle Distributor](https://etherscan.io/address/0xa9dc250df4ee9273d09cfa455da41fb1cac78d34) contract.
3. Click **Contract** → **Write Contract**.
4. **Connect to Web3** with your approved distributor address.
5. Use the d**istributeOneTime** function and input:
   1. `token` - token address. Currently, only SWISE, osETH, SSV, WETH, and USDC are supported.
   2. `amount`- amount in Wei. **Note**: You must approve the transfer of the specified amount to the Merkle Distributor contract address.
   3. `rewardsIpfsHash` - the hash of the file uploaded to IPFS
   4. `extraData` - empty bytes `0x`
