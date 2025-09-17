import React from 'react'

import Block, { BlockProps } from './Block/Block'


const blocks: BlockProps[] = [
  {
    title: 'Concepts',
    text: 'Everything you want to know about StakeWise at your fingertips',
    Svg: require("@site/static/icon/file.svg").default,
    href: '/docs/overview',
  },
  {
    title: 'Guides',
    text: 'Step-by-step tutorials for staking, running a Vault, and DeFi strategies',
    Svg: require("@site/static/icon/file.svg").default,
    href: '/docs/guides/staking',
  },
  {
    title: 'Operator',
    text: 'Documentation for running and managing the StakeWise Operator Service',
    Svg: require("@site/static/icon/code.svg").default,
    href: '/operator/intro',
  },
  {
    title: 'Contracts',
    text: 'Learn about the architecture of the StakeWise Protocol smart contracts through guided examples',
    Svg: require("@site/static/icon/code.svg").default,
    href: '/contracts/networks',
  }
]

const Blocks: React.FC = () => (
  <div className="mt-40 flex justify-center items-stretch gap-8 max-[960px]:flex-col max-[960px]:items-center">
    {
      blocks.map((item) => (
        <Block key={item.title} {...item} />
      ))
    }
  </div>
)


export default React.memo(Blocks)
