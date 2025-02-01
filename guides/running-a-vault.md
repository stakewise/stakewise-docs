---
description: Get started with Vaults using our how-to guides
cover: ../.gitbook/assets/Frame 27513376 (1).png
coverY: 0
---

# Running a Vault

StakeWise V3 enables you to launch your own staking environment, called Vault, and keep the stake in the Vault liquid with osToken, a liquid staking token of StakeWise.

Vaults architecture can be used by solo stakers to access liquid staking, and by individuals and organizations to stake on their terms and offer liquid staking to others.

<table><thead><tr><th width="283">Use case</th><th>Recommended settings</th></tr></thead><tbody><tr><td><strong>Liquid solo staking</strong></td><td>16K ETH / 1K GNO capacity, 0% fee, no Vault token, Private Vault, and Smoothing Pool enabled</td></tr><tr><td><strong>Community staking pool</strong> </td><td>Capacity and fee according to the business plan, no Vault token, Public Vault, Smoothing Pool enabled</td></tr><tr><td><strong>Liquid staking offered by a node operator</strong></td><td>Capacity and fee according to the business plan, no Vault token, Private Vault for each customer, Smoothing Pool enabled/disabled based on compliance needs</td></tr><tr><td><strong>Staking service with own LST</strong></td><td>Capacity and fee according to the business plan, Vault token, Public Vault, Smoothing Pool enabled/disabled based on compliance needs</td></tr><tr><td><strong>Staking service without LST</strong></td><td>Capacity and fee according to the business plan, no Vault token, Public Vault, Smoothing Pool enabled/disabled, osToken access disabled</td></tr></tbody></table>

If you didn't find your use case for a Vault above, please [reach out to the StakeWise team](mailto:info@stakewise.io) for a personal consultation.&#x20;

Below you can explore the guides for launching and running a Vault with StakeWise.&#x20;

### Creating your Vault

{% tabs %}
{% tab title="ETH" %}
A Vault is a customizable smart contract that can be deployed by anyone to stake their own capital and/or offer staking to others, all in a non-custodial way.&#x20;

Each Vault is isolated from others and relies on its own set of validators to produce rewards on the consensus layer. However, a Vault may participate in MEV smoothing to avoid volatility in the execution layer earnings.&#x20;

Staked ETH in any Vault can be made liquid by minting osETH, a liquid staking token.

[<mark style="color:blue;">Read more about Vaults -></mark>](../protocol-overview-in-depth/vaults.md)&#x20;

### How to create a Vault&#x20;

1. Head to the [Operate](https://app.stakewise.io/operate) page in the StakeWise dApp and connect your wallet.
2. Press on the Create Vault button.
3. Configure your Vault by setting its parameters according to your needs and press Continue. _**These parameters cannot be changed in the future**_.
4. Choose whether you would like to join a Smoothing Pool or collect only Personal MEV earnings and press Continue. _**This choice cannot be changed in the future**_.
5. Add branding to your Vault by specifying the name, logo, and description of the Vault and press Continue.
6. Review your choices in the Summary section and press Create Vault to deploy your Vault.
{% endtab %}

{% tab title="GNO" %}
A Vault is a customizable smart contract that can be deployed by anyone to stake their own capital and/or offer staking to others, all in a non-custodial way.&#x20;

Each Vault is isolated from others and relies on its own set of validators to produce rewards on the consensus layer. However, a Vault may participate in MEV smoothing to avoid volatility in the execution layer earnings.&#x20;

Staked GNO in any Vault can be made liquid by minting osGNO, a liquid staking token.

[<mark style="color:blue;">Read more about Vaults -></mark>](../protocol-overview-in-depth/vaults.md)&#x20;

### How to create a Vault&#x20;

1. Head to the [Operate](https://app.stakewise.io/operate?networkId=gnosis) page in the StakeWise dApp and connect your wallet.
2. Press on the Create Vault button.
3. Configure your Vault by setting its parameters according to your needs and press Continue. _**These parameters cannot be changed in the future**_.
4. Choose whether you would like to join a Smoothing Pool or collect only Personal MEV earnings and press Continue. _**This choice cannot be changed in the future**_.
5. Add branding to your Vault by specifying the name, logo, and description of the Vault and press Continue.
6. Review your choices in the Summary section and press Create Vault to deploy your Vault.
{% endtab %}
{% endtabs %}

### Granular LTV threshold setting for Vaults

{% tabs %}
{% tab title="ETH" %}
StakeWise DAO has the capability to increase or decrease the osETH minting threshold based on any given Vault’s risk parameters. By default, Vaults can mint osETH for up to 90% of the value of their ETH stake, using their stake in the Vault as backing for the osETH token.&#x20;

Certain DAO-approved Vaults are eligible for a 99.99% minting threshold (also known as LTV) for osETH. These Vaults must meet strict requirements set by the StakeWise DAO to ensure the highest standard of performance. Criteria include:

* having at least 10k ETH staked,&#x20;
* charging a Vault fee of no more than 5%,&#x20;
* consistently ranking above the median performance for all stakers in the network,&#x20;
* using the latest version of Vaults,&#x20;
* and locking 5M SWISE in a DAO-controlled address as a bond that serves as collateral to cover any potential slashing losses.
{% endtab %}

{% tab title="GNO" %}
StakeWise DAO has the capability to increase or decrease the osGNO minting threshold based on any given Vault’s risk parameters. By default, Vaults can mint osGNO for up to 90% of the value of their ETH stake, using their stake in the Vault as backing for the osGNO token.&#x20;

Certain DAO-approved Vaults are eligible for a 99.95% minting threshold (also known as LTV) for osGNO. These Vaults must meet strict requirements set by the StakeWise DAO to ensure the highest standard of performance. Criteria include:

* having at least 5k GNO staked,&#x20;
* charging a Vault fee of no more than 15%,&#x20;
* consistently ranking above the median performance for all stakers in the network,&#x20;
* using the latest version of Vaults,&#x20;
* and locking 1M SWISE in a DAO-controlled address as a bond that serves as collateral to cover any potential slashing losses.
{% endtab %}
{% endtabs %}

### Configuring StakeWise Operator Service

{% tabs %}
{% tab title="ETH" %}
Each Vault requires a node operator, or a set of node operators, to stake the ETH deposited into the Vault, with each operator required to run StakeWise Operator Service. The service is designed to run seamlessly alongside any node setup, giving operators the freedom to run their preferred execution/consensus clients, MEV relay, and distributed validator technology. The Operator Service is responsible for the creation of validators and the distribution of validator exit messages to the Oracle Network, enabling the automatic exiting of validators when required.

Before validators can be created within a Vault, a deposit data file must be uploaded to the Vault. This file contains the pre-generated public validator keys from the operator(s), with the order of the validator keys in the file determining the order in which validators are created. A new deposit data file can be uploaded at any point in time to override any unused validator keys via the Vault settings, allowing new node operators to be easily added to the operator set.&#x20;

Check out the [full guide](https://docs.stakewise.io/for-operators/operator-service) to getting your node connected to your Vault with StakeWise Operator Service and the Vault deposit data file. For more information on the role of Operator Service within StakeWise V3, visit [here](../protocol-overview-in-depth/vaults.md#stakewise-operator-service).
{% endtab %}

{% tab title="GNO" %}
Each Vault requires a node operator, or a set of node operators, to stake the GNO deposited into the Vault, with each operator required to run StakeWise Operator Service. The service is designed to run seamlessly alongside any node setup, giving operators the freedom to run their preferred execution/consensus clients, MEV relay, and distributed validator technology. The Operator Service is responsible for the creation of validators and the distribution of validator exit messages to the Oracle Network, enabling the automatic exiting of validators when required.

Before validators can be created within a Vault, a deposit data file must be uploaded to the Vault. This file contains the pre-generated public validator keys from the operator(s), with the order of the validator keys in the file determining the order in which validators are created. A new deposit data file can be uploaded at any point to override any unused validator keys via the Vault settings, allowing new node operators to be easily added to the operator set.&#x20;

Check out the [full guide](https://docs.stakewise.io/for-operators/operator-service) to getting your node connected to your Vault with StakeWise Operator Service and the Vault deposit data file. For more information on the role of Operator Service within StakeWise V3, visit [here](../protocol-overview-in-depth/vaults.md#stakewise-operator-service).
{% endtab %}
{% endtabs %}

### Managing your Vault

Some parameters of your Vault, like branding and whitelist, are configurable even after the Vault was created.&#x20;

[<mark style="color:blue;">Read more about whitelist -></mark>](../protocol-overview-in-depth/vaults.md#whitelist)&#x20;

#### **How to change Vault branding**

1. Open your Vault's page and press the Settings button.
2. Edit the title, description, and logo of your Vault as desired.
3. Press Save to confirm changes.

#### How to manage whitelist

1. Open your Vault's page and press the Vault access button.
2. Press Add account, insert the wallet address you want to whitelist, and press on the checkmark icon.
3. Repeat step 2 for as many addresses as you need.
4. If you need to remove an address from the whitelist, click on the trash icon next to it. Press on the cross icon to undo removal.&#x20;
5. Press Save to confirm changes to the whitelist.
6. Confirm the transaction to change the whitelist in your wallet.&#x20;
7. Once the transaction is confirmed on the blockchain, your changes will come into effect.

### Verifying your Vault

Receiving a Verified status allows the Vault to demonstrate that its branding and description have been reviewed and approved by the StakeWise team. Verification is recommended for Public Vaults.

To verify your Vault, please reach out to the StakeWise team at info@stakewise.io with a request for verification using your corporate email.

When vault metadata (name, description, logo) is changed, the verification status is unset. You need to reapply for verification after editing vault metadata.
