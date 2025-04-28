import React from 'react'

import Item from './Item/Item'


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

const GitHub: React.FC = () => (
  <div className="mt-40 mx-auto  max-w-[966px] flex items-center justify-center bg-moon/5 rounded-12">
    <div className="text-center text-t18b w-[220px]">Developer Links</div>
    <div className="py-12 flex flex-1 items-center justify-between flex-wrap">
      {
        items.map((item) => (
          <Item key={item.title} {...item} />
        ))
      }
    </div>
  </div>
)


export default React.memo(GitHub)
