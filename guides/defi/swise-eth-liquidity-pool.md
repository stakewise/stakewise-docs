---
description: Adding liquidity to the new SWISE-ETH pool
cover: ../../.gitbook/assets/Frame 27513376 (1).png
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

# SWISE-ETH Liquidity Pool

This guide will walk you through the process of adding liquidity to the SWISE-ETH pool on Uniswap V3. Follow the simple steps below to proceed.

{% hint style="info" %}
If you are a liquidity provider in the SWISE-sETH2 pool and are looking to migrate liquidity to the SWISE-ETH pool, we have included the instructions for removing liquidity and swapping sETH2 for ETH [here](swise-eth-liquidity-pool.md#migrating-liquidity-from-the-swise-seth2-pool).&#x20;
{% endhint %}

### **Add Liquidity to the new ETH-SWISE pool**

**Step 1:** Head to the [UniSwap Pools](https://app.uniswap.org/pools) page and select New Position. Click the drop-down to select SWISE to pair vs ETH.

<figure><img src="https://i.gyazo.com/1309ca5e3c1fde52847f7d815b88f4bd.gif" alt=""><figcaption></figcaption></figure>

**Step 2:** Edit the Fee Tier, selecting 0.3% and select Full Range.

<figure><img src="https://i.gyazo.com/29203f004a14d201aaed1fc810efa674.gif" alt=""><figcaption></figcaption></figure>

**IMPORTANT** — Double check that the correct pool is selected (0.3% fee tier) and that the price range shows 0 to infinity as per the below. Failure to do so will mean you might not receive incentives.

<figure><img src="../../.gitbook/assets/1 AzvWQWioyJAitxgMdBUa_w (1).webp" alt=""><figcaption></figcaption></figure>

**Step 3:** Once you are happy with the pool settings, enter the amount of ETH and SWISE tokens you wish to deploy (must be 50/50 if Full Range). Once again, you may need to provide UniSwap with approval to access your SWISE tokens. Once the approval has been granted, you can finally Preview and accept the transaction to deploy your liquidity.

<figure><img src="https://i.gyazo.com/5be8dfd033bfd6a2b0eeaa4c52b01d15.gif" alt=""><figcaption></figcaption></figure>

{% hint style="success" %}
Congratulations — you are now an LP in the new SWISE-ETH pool 🥳
{% endhint %}

## Migrating liquidity from the SWISE-sETH2 pool

### **Remove SWISE-sETH2 liquidity**

**Step 1:** Head to the [UniSwap Pools](https://app.uniswap.org/pools) page, select your SWISE-sETH2 position and click Remove Liquidity.

<figure><img src="https://i.gyazo.com/56c4c6349640c7679801c0ecef5dc632.gif" alt=""><figcaption></figcaption></figure>

**Step 2:** Click Max and then Remove to initiate the transaction to remove your entire liquidity position, including previously unclaimed fees. Confirm the transaction in your wallet.

<figure><img src="https://i.gyazo.com/6db807d858a3b8d05e65bc333a2b5402.gif" alt=""><figcaption></figcaption></figure>



{% hint style="success" %}
Congratulations - you successfully removed liquidity from the SWISE-sETH2 pool 🥳
{% endhint %}

### **Swap sETH2 to ETH**

**Step 1:** Head to the [UniSwap Swap](https://app.uniswap.org/swap?chain=mainnet) page and select sETH2 to ETH. Enter the amount of sETH2 you wish to exchange and confirm the swap. Note, you may need to enable spending of sETH2 on UniSwap prior to executing the swap. This will be an on-chain transaction.

<figure><img src="https://i.gyazo.com/ebe55d497f0dfbeb680a19c295de0f72.gif" alt=""><figcaption></figcaption></figure>

**Step 2:** Once the transaction enabling sETH2 spending is completed, you then need to allow sETH2 for swapping (simply signing a message rather than an on-chain transaction).

<figure><img src="https://i.gyazo.com/48c384441f2eb77b1e7858954e2e6535.png" alt=""><figcaption></figcaption></figure>

**Step 3:** Finally, confirm the swap transaction in your wallet.

{% hint style="success" %}
Congratulations - you successfully swapped sETH2 for ETH 🥳
{% endhint %}
