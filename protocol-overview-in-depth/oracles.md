---
description: Learn about the StakeWise V3 oracles
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

StakeWise V3 relies on an off-chain component called Oracles to fetch information about staking rewards from the Beacon Chain and trigger validator registration and exit processes.&#x20;

Oracles are a crucial part of the protocol, and must remain sufficiently decentralized and maintain high uptime in order for StakeWise V3 to work seamlessly.

StakeWise DAO has elected 11 Oracles to form an Oracle Network and ensure seamless functioning of the protocol.&#x20;

<details>

<summary>Oracle duties</summary>

An Oracle is an entity responsible for fetching validator rewards data for all the Vaults from the Beacon Chain and pushing it on-chain. An Oracle is also responsible for approving validator registration for all the Vaults, and exiting validators in response to withdrawal and redemption requests.&#x20;

Correct and timely fulfillment of Oracle duties is necessary for a seamless staking and unstaking experience for both users and operators in StakeWise. These duties are performed automatically using Oracle software developed by the StakeWise team, with no manual actions involved.

Because an Oracle has the power to influence the amount of rewards paid out to stakers and the effectiveness of validator registration and exit, it has a very important role in the whole system.

</details>

<details>

<summary>Oracle Network explained</summary>

To minimize concerns about the manipulation of outcomes and reduce the susceptibility of the Oracle Network to regulatory capture, as well as to maximize the longevity of the protocol, StakeWise DAO follows an approach where a network of Oracles is working via a consensus mechanism to determine the outcomes.&#x20;

Instead of an Oracle being a single entity with centralized power over the protocol’s outcomes, using a network of Oracles is the gold standard for ensuring that the protocol does not have overpowered centralized components.

A large number of participants is a must for the Oracle Network to remain decentralized. Meanwhile a high threshold for consensus is necessary to prevent centralization concerns and reduce the risk of malicious capture of the Oracle Network.&#x20;

Hence, the StakeWise DAO [has elected](https://vote.stakewise.io/#/proposal/0x54ceedefd1060fbad17ab6181be5a90da4c686dc071d1f6121d24c0398700be6) 11 participants with a 7/11 threshold for updating rewards and processing validator registrations/exits.

</details>

<details>

<summary>Oracle Network participants</summary>

1. [Chorus One](https://chorus.one/)
2. [Stake.fish](https://stake.fish/)
3. [Telekom (formally T-Systems MMS)](https://www.telekom-mms.com/)
4. [Finoa Consensus Services](https://www.finoa.io/)
5. [Bitfly](https://gobitfly.com/) (operators of the [Beaconchain](https://beaconcha.in/) explorer)
6. [SenseiNode](https://www.senseinode.com/)
7. [Gateway.fm](https://gateway.fm/)
8. [Gnosis Chain](https://www.gnosis.io/) team
9. [P2P](https://p2p.org/)
10. [DSRV](https://www.dsrvlabs.com/)
11. StakeWise development team

</details>
