import React from 'react'
import cx from 'classnames'

import Item from './Item/Item'

import s from './DeveloperLinks.module.scss'


const items = [
  {
    title: 'Vault interface',
    href: 'https://github.com/stakewise/vault-interface',
  },
  {
    title: 'Subgraph',
    href: 'https://github.com/stakewise/v3-subgraph',
  },
  {
    title: 'Operator',
    href: 'https://github.com/stakewise/v3-operator',
  },
  {
    title: 'Core',
    href: 'https://github.com/stakewise/v3-core',
  },
  {
    title: 'SDK',
    href: 'https://github.com/stakewise/v3-sdk',
  },
] as const

const DeveloperLinks: React.FC = () => (
  <div className="flex flex-col gap-32 mt-[100px]">
    <h2>Developer Links</h2>
    <div className={cx(s.items, 'flex items-center justify-between flex-wrap gap-20')}>
      {
        items.map((item) => (
          <Item key={item.title} {...item} />
        ))
      }
    </div>
  </div>
)


export default React.memo(DeveloperLinks)
