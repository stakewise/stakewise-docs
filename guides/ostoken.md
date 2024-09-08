---
description: Get started with osTokens using our how-to guides
cover: ../.gitbook/assets/Frame 27513376 (1).png
coverY: 0
---

# osToken

osTokens is a generic name for liquid staking tokens of StakeWise - osETH on Ethereum and osGNO on Gnosis Chain. osETH represents staked ETH and osGNO represents staked GNO in StakeWise Vaults, enabling you to use staked capital in DeFi. Both osETH and osGNO are ERC-20 tokens.

No matter if you are staking in a Solo Vault or in a Vault Marketplace, you can mint osETH (on Ethereum) and osGNO (on Gnosis Chain) to make your stake liquid.

You can also convert ETH for osETH and GNO for osGNO to start staking with one click.

<table><thead><tr><th width="329">How to get osToken</th><th>Benefits</th></tr></thead><tbody><tr><td><strong>Convert ETH/GNO into osETH/osGNO</strong></td><td>Simplicity and protection from all slashing</td></tr><tr><td><strong>Mint osETH/osGNO for your stake in a Vault</strong></td><td>Custom staking terms, protection from slashing in other Vaults</td></tr></tbody></table>

Explore the guides for osToken minting, burning, and DeFi use below.&#x20;

### Converting your asset to osToken

{% tabs %}
{% tab title="osETH" %}
It is possible to simply convert ETH into osETH to start staking in seconds. You will accrue ETH staking rewards by holding osETH in a wallet or in a smart contract.&#x20;

osETH can be converted back into ETH at any time to receive the initial deposit and accumulated rewards.&#x20;

[<mark style="color:blue;">Read more about osETH -></mark>](../protocol-overview-in-depth/ostoken.md)

Conversion of osETH back to ETH will utilize either exchanges where osETH is being traded or the osETH redemption mechanism, whichever has the more accurate value of osETH.&#x20;

[<mark style="color:blue;">Read more about the osETH redemption mechanism -></mark>](../protocol-overview-in-depth/ostoken.md#redemption-mechanism)

### How to convert ETH into osETH

1. Head to the [<mark style="color:blue;">Stake</mark>](https://app.stakewise.io) page in the StakeWise dApp and connect your wallet.
2. Enter the amount of ETH you would like to stake. The interface will show the amount of osETH tokens you will receive in return.&#x20;
3. Note that the conversion ratio between osETH and ETH is >1 because osETH continuously accumulates staking rewards.&#x20;
4. Press Stake and confirm the transaction in your wallet.
5. Once the transaction is confirmed on the blockchain, you will receive osETH in your wallet and begin staking.&#x20;
{% endtab %}

{% tab title="osGNO" %}
It is possible to simply convert GNO into osGNO to start staking in seconds. You will accrue GNO staking rewards by holding osGNO in a wallet or in a smart contract.&#x20;

osGNO can be converted back into GNO at any time to receive the initial deposit and accumulated rewards.&#x20;

[<mark style="color:blue;">Read more about osGNO -></mark>](../protocol-overview-in-depth/ostoken.md)

Conversion of osGNO back to GNO will utilize either exchanges where osGNO is being traded or the osGNO redemption mechanism, whichever has the more accurate value of osGNO.&#x20;

[<mark style="color:blue;">Read more about the osGNO redemption mechanism -></mark>](../protocol-overview-in-depth/ostoken.md#redemption-mechanism)

### How to convert GNO into osGNO

1. Head to the [<mark style="color:blue;">Stake</mark>](https://app.stakewise.io/?networkId=gnosis) page in the StakeWise dApp and connect your wallet.
2. Enter the amount of GNO you would like to stake. The interface will show the amount of osGNO tokens you will receive in return.&#x20;
3. Note that the conversion ratio between osGNO and GNO is >1 because osGNO continuously accumulates staking rewards.&#x20;
4. Press Stake and confirm the transaction in your wallet.
5. Once the transaction is confirmed on the blockchain, you will receive osGNO in your wallet and begin staking.&#x20;
{% endtab %}
{% endtabs %}

### Minting osToken from Vaults to start liquid staking

{% tabs %}
{% tab title="osETH" %}
Your stake in a Solo Vault or in a Vault Marketplace can be made liquid by minting osETH, a liquid staking token.&#x20;

No matter how much osETH you mint, you will continue to earn the full ETH rewards on your stake in the Vault.&#x20;

[<mark style="color:blue;">Learn more about osETH -></mark>](../protocol-overview-in-depth/ostoken.md)

### How to mint osETH for your stake

1. Head to the Vault page and connect your wallet.
2. Press the Mint button.
3. Enter the amount of osETH you want to mint or use the slider to choose the proportion of your stake that will be made liquid.
4. Note that the maximum value of osETH you can mint is set to 90% of your stake in the Vault. The profitability of your stake in the Vault is not reduced to the proportion you choose and remains fully intact.
5. Press the Mint button and confirm the transaction in your wallet.&#x20;
6. Once the transaction is confirmed on the blockchain, you will start liquid staking.
{% endtab %}

{% tab title="osGNO" %}
Your stake in a Solo Vault or in a Vault Marketplace can be made liquid by minting osGNO, a liquid staking token.&#x20;

No matter how much osGNO you mint, you will continue to earn the full GNO rewards on your stake in the Vault.&#x20;

[<mark style="color:blue;">Learn more about osGNO -></mark>](../protocol-overview-in-depth/ostoken.md)

### How to mint osGNO for your stake

1. Head to the Vault page and connect your wallet.
2. Press the Mint button.
3. Enter the amount of osGNO you want to mint or use the slider to choose the proportion of your stake that will be made liquid.
4. Note that the maximum value of osGNO you can mint is set to 90% of your stake in the Vault. The profitability of your stake in the Vault is not reduced to the proportion you choose and remains fully intact.
5. Press the Mint button and confirm the transaction in your wallet.&#x20;
6. Once the transaction is confirmed on the blockchain, you will start liquid staking.
{% endtab %}
{% endtabs %}

### Maintaining a healthy osToken position

{% tabs %}
{% tab title="osETH" %}
Your stake in any Vault can be made liquid by minting osETH for up to 90% of your stake.&#x20;

This limit is set to ensure that penalties or slashing in your Vault do not affect other osETH holders. Conversely, you will not be affected by the penalties and slashing in other Vaults.&#x20;

If your liquid stake does not exceed 90% of the staked ETH value, your position is **Healthy**.&#x20;

At times, your liquid stake value may exceed the 90% limit and reach up to 92% due to the difference between your Vault's APY and osETH APY. Exceeding 90% but remaining below 91% is considered **Moderate**, and exceeding 91% but remaining below 92% is **Risky**.&#x20;

Exceeding 92% of your stake value in osETH is considered **Unhealthy**, and will lead to a forced return of your osETH position to a level below 90% through a process called liquidation. Liquidation incurs a 1% penalty on your stake.

[<mark style="color:blue;">Read more about osETH position health -></mark>](../protocol-overview-in-depth/ostoken.md#position-health)

Note that osETH not acquired by minting from a Vault does not require any maintenance and does not impact osETH position health.

### How to maintain your osETH position

1. Head to the Vault page and connect your wallet.
2. Check the position status in the Mint osETH section: it should be either Healthy, Moderate, Risky, or Unhealthy. Unhealthy positions are subject to liquidation.
3. It is recommended to keep a Healthy or Moderate position status.&#x20;
4. You should consider switching to a different Vault if your position status becomes Risky because it indicates significant underperformance of the Vault relative to the average and puts you at risk of liquidation.
5. To improve your osETH position health, burn some osETH or stake more ETH into the Vault. However, it is not recommended to stake more ETH in a Vault where your position status deteriorated from Healthy to Risky.&#x20;
6. The impact of burning osETH and staking more ETH will be reflected in the position status change in the left-hand side menu.
7. Press the Burn or Stake button and confirm the transaction in your wallet.&#x20;
8. Once the transaction is confirmed on the blockchain, your position status will change.
{% endtab %}

{% tab title="osGNO" %}
Your stake in any Vault can be made liquid by minting osGNO for up to 90% of your stake.&#x20;

This limit is set to ensure that penalties or slashing in your Vault do not affect other osGNO holders. Conversely, you will not be affected by the penalties and slashing in other Vaults.&#x20;

If your liquid stake does not exceed 90% of the staked GNO value, your position is **Healthy**.&#x20;

At times, your liquid stake value may exceed the 90% limit and reach up to 92% due to the difference between your Vault's APY and osGNO APY. Exceeding 90% but remaining below 91% is considered **Moderate**, and exceeding 91% but remaining below 92% is **Risky**.&#x20;

Exceeding 92% of your stake value in osGNO is considered **Unhealthy**, and will lead to a forced return of your osGNO position to a level below 90% through a process called liquidation. Liquidation incurs a 1% penalty on your stake.

[<mark style="color:blue;">Read more about osGNO position health -></mark>](../protocol-overview-in-depth/ostoken.md#position-health)

Note that osGNO not acquired by minting from a Vault does not require any maintenance and does not impact osGNO position health.

### How to maintain your osGNO position

1. Head to the Vault page and connect your wallet.
2. Check the position status in the Mint osGNO section: it should be either Healthy, Moderate, Risky, or Unhealthy. Unhealthy positions are subject to liquidation.
3. It is recommended to keep a Healthy or Moderate position status.&#x20;
4. You should consider switching to a different Vault if your position status becomes Risky because it indicates significant underperformance of the Vault relative to the average and puts you at risk of liquidation.
5. To improve your osGNO position health, burn some osGNO or stake more GNO into the Vault. However, it is not recommended to stake more GNO in a Vault where your position status deteriorated from Healthy to Risky.&#x20;
6. The impact of burning osGNO and staking more GNO will be reflected in the position status change in the left-hand side menu.
7. Press the Burn or Stake button and confirm the transaction in your wallet.&#x20;
8. Once the transaction is confirmed on the blockchain, your position status will change.
{% endtab %}
{% endtabs %}

### Burning osToken to stop liquid staking

{% tabs %}
{% tab title="osETH" %}
All your minted osETH must be burned before you can fully unstake ETH from a Vault.

[<mark style="color:blue;">Learn more about burning osETH -></mark>](../protocol-overview-in-depth/ostoken.md#burning-oseth)

The StakeWise DAO staking fee is included in the balance of osETH that must be burned before you can unstake.&#x20;

[<mark style="color:blue;">Learn more about the osETH fee -></mark>](../protocol-overview-in-depth/ostoken.md#staking-fee)

### How to burn osETH

1. Head to the Vault page and connect your wallet.
2. Press the Burn button.
3. Enter the amount of osETH you want to burn or use the slider to choose the proportion of osETH that will be burned. The profitability of your stake in the Vault is not reduced to the proportion you choose and remains fully intact.&#x20;
4. Press the Burn button and confirm the transaction in your wallet.&#x20;
5. Once the transaction is confirmed on the blockchain, you will have burned osETH.
{% endtab %}

{% tab title="osGNO" %}
All your minted osGNO must be burned before you can fully unstake GNO from a Vault.

[<mark style="color:blue;">Learn more about burning osGNO -></mark>](../protocol-overview-in-depth/ostoken.md#burning-oseth)

The StakeWise DAO staking fee is included in the balance of osGNO that must be burned before you can unstake.&#x20;

[<mark style="color:blue;">Learn more about the osGNO fee -></mark>](../protocol-overview-in-depth/ostoken.md#staking-fee)

### How to burn osGNO

1. Head to the Vault page and connect your wallet.
2. Press the Burn button.
3. Enter the amount of osGNO you want to burn or use the slider to choose the proportion of osGNO that will be burned. The profitability of your stake in the Vault is not reduced to the proportion you choose and remains fully intact.&#x20;
4. Press the Burn button and confirm the transaction in your wallet.&#x20;
5. Once the transaction is confirmed on the blockchain, you will have burned osGNO.
{% endtab %}
{% endtabs %}
