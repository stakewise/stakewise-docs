export default [
  {
    question: 'How to stake with StakeWise?',
    answer: `Simply head to the Stake page in the StakeWise dApp, enter the amount of ETH or GNO you want to stake, and press the Stake button. You will receive osETH or osGNO tokens in return to keep your stake liquid.`,
  },
  {
    question: 'What are the advantages of staking on StakeWise?',
    answer: `StakeWise makes it very easy to earn rewards on your ETH or GNO and keep your assets safe. We serve a diverse group of customers, from ordinary stakers to whales,  DAOs, solo stakers, wallets, professional node operators, and institutions. StakeWise has been offering its services from 2021, and has invested ~$1M into security since inception.`,
  },
  {
    question: 'What is StakeWise, and what does it offer to users?',
    answer: `StakeWise is a liquid staking network that enables users to easily stake any amount of ETH or GNO. Users receive osTokens to represent their stake, which they can use to access liquidity or increase their yield. `,
  },
  {
    question: 'How does StakeWise Boost work?',
    answer: `StakeWise Boost uses osETH (on Ethereum) or osGNO (on Gnosis Chain) tokens to borrow more ETH or GNO on Aave, stake it, mint osETH or osGNO, and repeat the process enough times to maximize your yield. The extra yield comes from the difference between the cost to borrow extra ETH or GNO, and the staking rewards earned from staking the borrowed amount. `,
  },
  {
    question: 'Is StakeWise Boost safe to use?',
    answer: `StakeWise Boost is safe to use, and has been designed with safety in mind. The collateral supplied by Boost on Aave is near perfectly correlated with assets borrowed, allowing to maintain a stable Loan to Value in all circumstances. Boosted positions are not affected by osETH (on Ethereum) or osGNO (on Gnosis Chain) depegs, allowing to use leverage safely. Boost uses a sufficiently large buffer to the Liquidation Threshold to allow the strategy to remain deeply unprofitable (-10% to -25%) for over 1 year without triggering a liquidation. However, StakeWise doesn’t recommend using Boost when its APY is consistently negative, and will trigger forced exits for deeply unprofitable positions before they are liquidated.`,
  },
  {
    question: 'How does the redemption mechanism for osETH work?',
    answer: `osETH can be redeemed for ETH at its fair exchange rate. If there is enough unbonded ETH in the protocol, redemption is instant;  otherwise, validators will be exited to provide the ETH required for full redemption.`,
  },
  {
    question: 'What is the purpose of osTokens in the StakeWise ecosystem?',
    answer: ` osTokens are liquid representations of assets staked in StakeWise - osETH on Ethereum, and osGNO on Gnosis Chain. osTokens allow users to keep their stake liquid and accrue staking rewards. osTokens can be converted back to ETH or GNO to access your initial deposit and the accumulated rewards.`,
  },
] as const
