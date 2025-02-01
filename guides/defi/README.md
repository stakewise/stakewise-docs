---
description: Guides and instructions for using StakeWise tokens in DeFi
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

# DeFi

{% content-ref url="swise-eth-liquidity-pool.md" %}
[swise-eth-liquidity-pool.md](swise-eth-liquidity-pool.md)
{% endcontent-ref %}

### Boost Feature Risk Profile

{% tabs %}
{% tab title="osETH" %}
#### **Boost feature and liquidation risks**

When using the **Boost feature** (looped staking with osETH as collateral), the max LTV for borrowing ETH on Aave is 93%, with a liquidation threshold of 95%, leaving a 2% safety buffer. If the LTV reaches 94.5%, anyone can trigger an unboosting transaction to prevent liquidation.

#### **osETH price and borrowing stability**

* The osETH APY follows the APY of the lowest-yielding 99.99% LTV Vault.
* osETH depegging on secondary markets does not impact these Vaults' borrow positions since Aave relies on StakeWise’s native price feed for osETH.

However, prolonged negative yield spread (where ETH borrow APY exceeds osETH staking APY) can erode collateral over time. osETH and ETH borrow APY historic time-series analysis indicates that ETH borrow APY exceeded osETH APY only 10.7% (39 days per year) of the time leading to a temporary rise in LTV. This means that on the rest of the days, your LTV is decreasing because the value of your collateral grows faster than your loan value.

Given historical data, osETH growth rate matching the APY of the lowest-yielding 99.99% LTV Vault, and Aave using the StakeWise native price feed for osETH, the probability of a Boost position reaching 94.5% LTV is low.

To prevent liquidation, the StakeWise core team actively monitors boosted positions and triggers exits when LTV reaches 94.5%.

**Further reading**

* [Maximize Your Rewards With StakeWise Boost](https://stakewise.medium.com/maximize-your-rewards-with-stakewise-boost-8799ae1e5731)
* [How StakeWise Boost Keeps Your Rewards Juicy & Your Stake Safe](https://x.com/stakewise_io/status/1883194716843348259)
{% endtab %}
{% endtabs %}



