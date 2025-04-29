import React from 'react'

import Block, { BlockProps } from './Block/Block'


const blocks: BlockProps[] = [
  {
    title: 'Docs',
    text: 'Everything you want to know about StakeWise at your fingertips',
    Svg: require("@site/static/icon/file.svg").default,
    href: '/docs/intro',
  },
  {
    title: 'SDK',
    text: 'Our JS library for working with api and contracts',
    Svg: require("@site/static/icon/code.svg").default,
    href: '/sdk/intro',
  },
  {
    title: 'Contracts',
    text: 'Details of all contracts that use the StakeWise protocol',
    Svg: require("@site/static/icon/gears.svg").default,
    href: '/contracts/intro',
  }
]

const Blocks: React.FC = () => (
  <div className="mt-40 flex justify-between items-center max-[960px]:flex-col">
    {
      blocks.map((item) => (
        <Block key={item.title} {...item} />
      ))
    }
  </div>
)


export default React.memo(Blocks)
