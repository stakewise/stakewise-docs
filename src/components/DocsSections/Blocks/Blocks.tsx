import React from 'react'

import Block, { BlockProps } from './Block/Block'


const blocks: BlockProps[] = [
  {
    title: 'Docs',
    text: 'Everything you want to know about StakeWise at your fingertips',
    Svg: require("@site/static/icon/file.svg").default,
    href: '/docs/overview',
  },
  {
    title: 'Operator',
    text: 'Documentation for running and managing StakeWise operators',
    Svg: require("@site/static/icon/code.svg").default,
    href: '/operator/intro',
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
