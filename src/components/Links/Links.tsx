import React from 'react'

import Block, { BlockProps } from './Block/Block'


const links: BlockProps[] = [
  {
    title: 'Discord',
    Svg: require("@site/static/icon/discord.svg").default,
    href: 'https://discord.com/invite/2BSdr2g',
  },
  {
    title: 'Telegram',
    Svg: require("@site/static/icon/telegram.svg").default,
    href: 'https://t.me/stakewise_io',
  },
  {
    title: 'Twitter',
    Svg: require("@site/static/icon/twitter.svg").default,
    href: 'https://x.com/stakewise_io',
  },
  {
    title: 'Forum',
    Svg: require("@site/static/icon/forum.svg").default,
    href: 'https://forum.stakewise.io/',
  },
  {
    title: 'Vote',
    Svg: require("@site/static/icon/vote.svg").default,
    href: 'https://vote.stakewise.io/',
  }
]

const Links: React.FC = () => (
  <div className="mt-40 flex justify-center items-center">
    {
      links.map((item) => (
        <Block key={item.title} {...item} />
      ))
    }
  </div>
)


export default React.memo(Links)
