export default [
  {
    question: 'How to stake with StakeWise?',
    answer: `Head to the Stake page in the StakeWise dApp, enter the amount of ETH or GNO you want to stake, and choose whether to receive osETH or osGNO alongside your stake. Press Stake and confirm the transaction — the liquid staking token keeps your stake usable across DeFi while it earns rewards.`,
  },
  {
    question: 'What are the advantages of staking on StakeWise?',
    answer: `StakeWise makes it very easy to earn rewards on your ETH or GNO and keep your assets safe. We serve a diverse group of customers, from ordinary stakers to whales, DAOs, solo stakers, wallets, professional node operators, and institutions. StakeWise has been offering its services from 2021, and has invested ~$1M into security since inception.`,
  },
  {
    question: 'What is StakeWise, and what does it offer to users?',
    answer: `StakeWise is a liquid staking network that enables users to easily stake any amount of ETH or GNO. Users receive osTokens to represent their stake, which they can use to access liquidity or increase their yield.`,
  },
  {
    question: 'How does StakeWise Boost work?',
    answer: `StakeWise Boost, available on Ethereum, uses osETH as collateral to borrow more ETH on Aave, stakes it, mints osETH, and repeats the process enough times to maximize your yield. The extra yield comes from the difference between the cost to borrow extra ETH and the staking rewards earned from staking the borrowed amount.`,
  },
  {
    question: 'Is StakeWise Boost safe to use?',
    answer: `StakeWise Boost is designed with safety in mind. Aave values osETH using StakeWise's own price feed rather than secondary-market prices, so boosted positions are not exposed to an osETH depeg. Aave's ETH-correlated market allows borrowing up to 93% LTV and liquidates at 95%, and that 2% buffer gives a position room to absorb a sustained negative spread. Above 94.5% LTV anyone can unboost a position on the holder's behalf, and StakeWise monitors positions to do so before they reach liquidation. StakeWise doesn't recommend using Boost while its APY is consistently negative.`,
  },
  {
    question: 'How does the redemption mechanism for osETH work?',
    answer: `osETH can be redeemed for ETH at its fair exchange rate. Redemptions run through a queue: you hand osETH to the redeemer contract and receive a ticket, the redemption is settled against minters' positions, and once the batch is checkpointed you claim your ETH. If a Vault has staked everything, validators are exited to provide the ETH required.`,
  },
  {
    question: 'What is the purpose of osTokens in the StakeWise ecosystem?',
    answer: `osTokens are liquid representations of assets staked in StakeWise — osETH on Ethereum, and osGNO on Gnosis Chain. osTokens allow users to keep their stake liquid and accrue staking rewards. osTokens can be converted back to ETH or GNO to access your initial deposit and the accumulated rewards.`,
  },
] as const
