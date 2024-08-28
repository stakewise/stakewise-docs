---
description: Learn about the osETH token in StakeWise V3
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

# osETH

Liquid staking in StakeWise V3 is powered by osETH - an overcollateralized staked ETH token that accrues staking rewards when held.&#x20;

osETH represents ETH staked in Vaults and earns ETH rewards that accrue from their validators. osETH can always be redeemed for ETH from Vaults, helping it maintain an accurate price on DEXs.

A unique feature of osETH is that it can be minted against any Ethereum node, making access to liquid staking as permissionless and non-custodial as possible. This enables users to stake ETH however they like, including solo, and be able to farm, borrow and restake staked ETH in DeFi.

Permissionless minting of osETH allows it to be backed by a wide network of pools, solo stakers, DAOs, and other organizations staking ETH in unique ways that do not lead to the centralization of Ethereum.

### Main characteristics

<details>

<summary>Exchange rate</summary>

osETH is an ERC-20 token that accrues ETH staking rewards when held. It captures the staking rewards being earned by the staked ETH that is backing the token.&#x20;

Mechanically, the accrual of rewards by validators is reflected in the constant increase in the amount of ETH that osETH can be redeemed for, known as the **fair osETH exchange rate**. The increase in redemption value to reflect the accrual of rewards makes osETH a repricing token.

At osETH launch, the exchange rate starts at 1.00 ETH per osETH and increases as more staking rewards are earned. The rate of increase is reflected in the osETH APY, which is always quoted net of the StakeWise DAO fees.&#x20;

_Example_: if the staked ETH that backs osETH earned 5% APY over the past year (after Vault fees), the osETH exchange rate would increase from 1 ETH per osETH to 1.0475 ETH per osETH.

</details>

<details>

<summary>In-built slashing protection</summary>

osETH can be minted against any Ethereum node, including those that perform poorly.&#x20;

To protect osETH holders against the risk of poor performance, slashing, and general failure of permissionless nodes, osETH has an excess backing of staked ETH that is used to cover for the shortfall in performance and absorb slashing losses. This gives osETH an in-built slashing protection feature.&#x20;

Stakers in Vaults benefit from this slashing protection because when they mint osETH, they are not affected by the performance or slashing of any nodes except the nodes that run validators for their Vault.

Stakers who buy osETH on DEXs don't have exposure to any particular Vault and hence are fully insulated against any slashing losses and poor performance that may occur.&#x20;

[<mark style="color:blue;">Read more about the excess backing of osETH -></mark>](oseth.md#overcollateralization)

</details>

<details>

<summary>Redeemable for ETH</summary>

osETH is backed by staked ETH in Vaults, and is redeemable for ETH in their validators.

Redemption of osETH for ETH always happens at the underlying exchange rate between the two tokens. The exchange rate is determined by StakeWise Oracles based on the performance of Vaults and outstanding supply of osETH.

Redemption of osETH for ETH is instant if there is enough unbonded ETH in the protocol. If the amount of unbonded ETH is not enough to meet the volume of redemption requests, the protocol will exit validators to withdraw a sufficient amount of ETH for full redemption.&#x20;

[<mark style="color:blue;">Read more about the osETH redemption mechanism -></mark>](oseth.md#redemption-mechanism)

</details>

<details>

<summary>APY formula</summary>

The formula used for calculating the APY of osETH:

{% code overflow="wrap" %}
```markup
osETH APY = weighted average net APY from Vaults with fee percent <= 15% and at least 1 registered validator 
```
{% endcode %}

where each APY is weighted by the relative size of principal assets held by a Vault, and where net Vault APY is:

{% code overflow="wrap" %}
```
Net Vault APY = sum of consensus and execution rewards minus Vault fee / product of the number of validators activated at least 6h ago and their effective balance
```
{% endcode %}

</details>

<details>

<summary>Staking fee</summary>

StakeWise DAO charges a 5% fee on the rewards accumulated by osETH, and continuously applies the fee to the balance of osETH a user has minted from the Vault. The fee is charged in osETH, meaning that the amount of osETH a user must return to the Vault constantly increases proportionately to the fee.

_Example_: a user's minted osETH has accumulated 1 ETH in rewards on their stake. StakeWise will apply a 0.05 ETH fee to the user's osETH balance using the current osETH exchange rate. If the rate is 1.05 ETH/osETH, the user's total balance of minted osETH will increase by 0.05/1.05 = 0.04761904761 osETH.&#x20;

</details>

### Minting and burning

<details>

<summary>Minting osETH</summary>

osETH is a liquid staking token that represents ETH staked in Vaults. It can be minted by any staker in Vaults to make their stake liquid.

Like every liquid staking token, osETH requires backing by actual staked ETH in validators.  Whenever users mint osETH for their stake in Vaults, new osETH is created with users' staked ETH as backing (i.e. collateral). This ensures that someone purchasing osETH on an exchange can redeem it for the underlying ETH at any time, giving the token value in DeFi.

The amount of osETH a user can mint depends on the value of their ETH stake in the Vault, osETH exchange rate, and the excess backing limit imposed by the StakeWise DAO. The formula is as follows:&#x20;

```
Max amount of osETH to be minted = amount of ETH staked * 90%
```

At any time, the value of osETH that can be minted by a staker will not exceed 90% of the value of their ETH stake in the Vault. This limit is defined by the **minting threshold**, which is a parameter set by the DAO.&#x20;

_Example_: a user staked 100 ETH in the Vault. At 1.05 ETH per osETH exchange rate and the 90% minting threshold, the maximum amount of osETH a staker can mint is 100 \* 90% / 1.05 = 85.71429 osETH. The maximum value of osETH minted in this case is 100 ETH \* 90% = 90 ETH, which fits the minting threshold requirement.&#x20;

[<mark style="color:blue;">Read our guide about minting osETH from a Vault -></mark>](../guides/oseth.md#minting-oseth-from-vaults-to-start-liquid-staking)

</details>

<details>

<summary>Overcollateralization</summary>

osETH minting always requires excess backing to protect osETH holders from bad performance and slashing risks associated with permissionless access to the token. This is called overcollateralization, and it is what the "o" in osETH stands for: **o**vercollateralized staked ETH token.&#x20;

In practice, overcollateralization means that stakers in Vaults can mint osETH for up to 90% of the value of their ETH stake, using their stake in the Vault as backing for the osETH token. Stakers continue to accumulate ETH rewards on 100% of their staked ETH, but only up to 90% of their total stake can be made liquid.

_Example_: staking 100 ETH into a Vault, a user can mint up to 90 ETH worth of their stake in osETH (according to the minting threshold of 90%). If the exchange rate is 1.05 ETH per osETH, then the user can mint a maximum of 90/1.05 = 85.71428 osETH tokens worth 90 ETH. This is the amount of stake they will have in liquid form.

Note that users who purchase osETH on an exchange and redeem the token for the underlying ETH will not claim the excess backing provided by stakers in Vaults. Instead, it belongs to the stakers who originally minted osETH.

**How excess backing is used**

The excess backing provided to osETH is used as a buffer against poor performance and potential slashing-related losses. It ensures that if the validators of a Vault get slashed or accrue penalties, the loss of ETH staked in that Vault does not cause osETH to become unbacked. Instead, any such losses are absorbed by the excess backing.&#x20;

_Example:_ a Vault is staking 1,000 ETH and minted 900 osETH at the exchange rate 1.00 ETH per osETH. Suppose the Vault got slashed and will lose \~34 ETH in slashing-related penalties. Because the Vault has 100 ETH of excess backing, the 34 ETH loss will be absorbed by this buffer, without impacting other osETH holders. Instead, the loss will be borne only by the stakers in the slashed Vault.

</details>

<details>

<summary>Position health</summary>

StakeWise continuously monitors the value of minted osETH tokens relative to the value of staked ETH backing them to ensure the tokens remain overcollateralized.&#x20;

The most effective way to maintain excess backing for osETH is to not allow individual stakers' osETH positions to grow larger than a certain percentage of their ETH stake in the Vault. If this happens, StakeWise must enable someone to forcibly burn the osETH that these stakers minted, removing poorly backed osETH tokens from the supply.&#x20;

StakeWise uses a parameter known as **position health** to track the value of osETH minted by stakers relative to the value of their ETH stake in the Vault.&#x20;

Here is how position health can change in response to changes in values of osETH minted and staked ETH value:

* Healthy: value of minted osETH does not does not exceed 90% of the staked ETH value a staker has in the Vault.
* Moderate: value of minted osETH exceeds 90% of the staked ETH value a staker has in the Vault but remains below 91%.
* Risky: value of minted osETH exceeds 91% of the staked ETH value a staker has in the Vault but remains below 92%.
* Unhealthy: value of minted osETH exceeds 92% of the staked ETH value a staker has in the Vault.

Some risky osETH positions will participate in the redemption mechanism for osETH, while unhealthy positions will be subject to forced burning known as liquidation.

**What affects position health**

Position health depends on the value of minted osETH relative to the value of ETH staked. Anything that affects these values will also impact position health, either abruptly or over time.&#x20;

The most frequent reason for a change in position health is the discrepancy between the Vault APY and osETH APY. If the value of minted osETH grows much faster than the value of staked ETH position in the Vault, staker's position health will deteriorate.&#x20;

Vault APY may underperform osETH APY due to:&#x20;

* Charging higher fees than the market average
* Inconsistent attestation performance
* Large amount of unbonded ETH relative to Vault TVL
* Growth in TVL during long validator activation queue in the Beacon Chain, and&#x20;
* MEV theft

Outperformance is related to charging lower than market fees, excellent attestation performance, and custom MEV strategies.&#x20;

A sudden deterioration in position health may signal a loss of ETH by the Vault due to slashing or MEV theft when using Smoothing Pool. In situations where a staker's position health in the Vault has suddenly deteriorated, StakeWise recommends burning any minted osETH and unstaking from the Vault.&#x20;

[<mark style="color:blue;">Read our guide about maintaining osETH position health -></mark>](../guides/oseth.md#maintaining-a-healthy-oseth-position)

</details>

<details>

<summary>Burning osETH</summary>

Users' staked ETH in Vaults is used as backing when they mint osETH. osETH relies on this backing to maintain value on the secondary market. To prevent users from minting unbacked osETH, StakeWise locks users' staked ETH until the osETH they minted is fully returned to the Vault. This is known as osETH burning.

The amount of osETH to be burned will equal the sum of the original amount minted and the StakeWise DAO commission, which is set to 5% of the rewards osETH accumulated.

[<mark style="color:blue;">Read more about the StakeWise DAO fee -></mark>](oseth.md#staking-fee)

Note that burning the full outstanding amount of osETH is necessary to fully unstake from the Vault. If less osETH is burned, user's ETH stake will be withdrawable only partially in order to maintain appropriate position health. The amount of ETH that can be unstaked immediately will be based on position health, where the osETH position must remain healthy (i.e. up to 90% of staked ETH value) after some ETH has been unstaked. This is calculated by the following formula:

{% code overflow="wrap" %}
```
Amount of ETH that can be unstaked = amount of ETH staked - (amount of osETH minted * osETH exchange rate / 0.9)
```
{% endcode %}

_Example:_ a user has 100 ETH staked in a Vault and 50 osETH minted. At an exchange rate of 1.05 ETH/osETH, the value of minted osETH is 52.5 ETH, so the user's minted osETH value is 52.5/100 = 52.5% of the staked ETH value, making their position healthy. The user must maintain position health at a healthy level, so the maximum amount of ETH that can be unstaked is 100 - (52.5 / 0.9) = 41.667 ETH. To confirm, the value of minted osETH relative to the value of staked ETH after unstaking will be 52.5 / (100-41.667) = 0.9, i.e. the required 90%.&#x20;

[<mark style="color:blue;">Read our guide about burning osETH in the Vault -></mark>](../guides/oseth.md#maintaining-a-healthy-oseth-position)

</details>

### Peg stability

<details>

<summary>Redemption mechanism</summary>

StakeWise makes its best efforts to ensure that the value of osETH on the exchanges corresponds to its fair exchange rate. The ability to receive ETH in exchange for osETH at the fair exchange rate is the key mechanism to ensure price stability, and relies on the redemption mechanism.

The osETH redemption mechanism allows anyone to redeem osETH natively via StakeWise for its underlying value (staked ETH backing the osETH tokens). Redemption works by users burning osETH they acquired on the exchanges and withdrawing ETH backing from Vaults at the fair osETH exchange rate.&#x20;

The process of redeeming osETH reduces the osETH positions of certain stakers in Vaults, allowing them to improve their position health without manual actions. If the value of a user's osETH position in the Vault reaches 91.5% of their staked ETH value, anyone can step in and burn a certain amount of osETH from their position in exchange for redeeming a fair amount of ETH backing from the Vault.&#x20;

The amount is determined by the osETH exchange rate and the amount of osETH burned using the following formula:

{% code overflow="wrap" %}
```
Amount of osETH to be redeemed = 10 * amount of osETH currently minted - 9 * amount of ETH staked / osETH exchange rate
```
{% endcode %}

The 91.5% level for initiating redemptions is known as the **redemption threshold** and is set by the StakeWise DAO.

Note that users always have the ability to improve their position health to avoid redemption.

[<mark style="color:blue;">Read our guide about maintaining a healthy osETH position -></mark>](../guides/oseth.md#maintaining-a-healthy-oseth-position)

There is a limit to how much osETH can be burned from any given osETH position. This amount is defined by the amount of osETH that must be redeemed in order to bring a user's osETH position health back to a healthy level (90%). Redemptions also don't incur any fees, have no economic impact on the users in Vaults, and don't expose those who redeem osETH to adverse Vault performance or slashing.

_Example:_ user has minted 87.238 osETH that is now worth 91.6 ETH against a staked ETH position that is currently worth 100 ETH. The user's position is open to redemption because the value of minted osETH relative to their ETH stake exceeds the redemption threshold, i.e. 91.5%. Users who bought osETH on exchanges will use a portion of the position to redeem their osETH, with the amount based on the osETH exchange rate. If the osETH exchange rate is currently 1.05 ETH/osETH, users would be able to redeem 10 \* 87.238 - 9 \* 100 / 1.05 = 15.238 osETH for 16 ETH, bringing the position back down to 90% of the staked ETH value.&#x20;

**Impact on users in Vaults**

osETH redemptions do not lead to stakers in Vaults losing their capital. When someone burns a portion of a staker's minted osETH on their behalf, the staker gets to keep the proportional amount of osETH, without the need to burn it to fully unstake from the Vault. It is equivalent to simply buying that portion of osETH on the exchange.&#x20;

Meanwhile, the health of users' osETH positions improves with redemptions.&#x20;

_Example_: a user starts off with 87.238095 osETH minted and 100 ETH staked in the Vault, which implies a 1.05 ETH/osETH exchange rate. Their osETH position is worth 91.6% of their staked ETH value, triggering a redemption. 15.238095 osETH is redeemed for 16 ETH, reducing the staker's outstanding minted osETH from 87.238095 to 72, and their stake in the Vault from 100 to 84. As a result, osETH position health improves to 90% of their staked ETH value. The user can claim 84 staked ETH from the Vault by burning 72 osETH, and gets to keep the 15.238095 osETH that someone burned on their behalf, for a total value of 100 ETH.

**Involvement in peg stability**

Availability of redemptions in the protocol depends on the levels of osETH position health relative to the redemption threshold, and the price of osETH on the exchanges. If the price on exchanges deviates from the fair exchange rate by more than **\[value TBC]**, StakeWise Oracles will automatically exit a number of validators from the Vaults where positions exceed the redemption threshold. Oracles will sort such Vaults based on the total amount of ETH that can be redeemed (based on positions above the redemption threshold) and exit the required number of validators to take these osETH positions to a healthy level. The exited validators will provide sufficient ETH for the volume of osETH redemption that is expected to return the price back to the fair exchange rate.

</details>

<details>

<summary>Liquidation mechanism</summary>

StakeWise must maintain excess backing for osETH to ensure that permissionless minting of the token is safe for all osETH holders. A mechanism responsible for this is called the liquidation mechanism, where osETH positions that threaten the excess backing of osETH are forcibly closed and a penalty is applied to a user's stake to discourage such malicious behaviour.&#x20;

The liquidation mechanism kicks in if a user's minted osETH value exceeds 92% of their staked ETH value in the Vault. At this moment, their osETH position will be unhealthy, and anyone will be able to step in to burn the entire amount of osETH a staker has previously minted, in exchange for the underlying ETH and a 1% reward on the value of ETH redeemed. The reward to the liquidator is taken from the user's stake, which can be considered a 1% penalty to the user's stake in the Vault if their osETH position is liquidated.&#x20;

The 92% threshold at which the osETH position enters a liquidation is set by the DAO and is called the **liquidation threshold**. The DAO also sets the 1% reward for liquidating an osETH position and is called the **liquidation premium**.&#x20;

Note that users always have the ability to improve their position health to avoid liquidation.

[<mark style="color:blue;">Read our guide about maintaining a healthy osETH position -></mark>](../guides/oseth.md#maintaining-a-healthy-oseth-position)

Liquidators who close others' osETH positions receive the underlying value of osETH they burned plus a 1% liquidation premium in ETH from the Vault. StakeWise Oracles automatically exit enough validators in the Vault to facilitate the liquidation of unhealthy positions. Exited ETH will be used for returning the underlying value of osETH burned by the liquidators and payment of the 1% liquidation premium. Mechanically, this means liquidators can liquidate a position as soon as there is unbonded ETH in the Vault.&#x20;

In case the liquidation is triggered by a slashing event, it will take 36 days from the initial violation to exit the slashed validators, at which step the liquidators can step in.&#x20;

_Example:_ user has minted osETH that is now worth 92.01 ETH against a staked ETH position that is currently worth 100 ETH. The user's position is open to liquidation because the value of minted osETH relative to their ETH stake exceeds the liquidation threshold, i.e. is >92%. Users who bought osETH on exchanges will liquidate the position by burning osETH and redeeming ETH based on the fair osETH exchange rate, plus the 1% liquidation premium. If the osETH exchange rate is currently 1.05 ETH/osETH, users would be able to liquidate 87.6285714286 osETH for 92.9301 ETH, which includes 0.9201 ETH as the liquidation premium.

**Impact on users in Vaults**

osETH liquidations lead to a 1% penalty applied to the stake of liquidated users.&#x20;

When someone burns a staker's minted osETH on their behalf, the staker gets to keep the proportional amount of osETH without the need to burn it to fully unstake from the Vault. It is equivalent to simply buying that portion of osETH on the exchange. However, the user's remaining stake in the Vault is reduced by the 1% liquidation penalty.&#x20;

_Example_: a user starts off with 87.62857 osETH minted and 100 ETH staked in the Vault, which implies a 1.05 ETH/osETH exchange rate. Their osETH position is worth 92.01% of their staked ETH value, triggering a liquidation. 87.62857 osETH is redeemed for 92.9301 ETH (includes 0.9201 ETH as the liquidation premium), reducing a staker's outstanding minted osETH to 0, and their stake in the Vault from 100 to 7.0699 ETH. The user can claim 7.0699 staked ETH from the Vault at any time, and get to keep the 87.62857 osETH they originally minted, for a total value of 99 ETH.

**Involvement in peg stability**

The liquidation mechanism ensures that osETH tokens always remain overcollateralized, helping to maintain the price of osETH on exchanges at par with the fair exchange rate. &#x20;

</details>
