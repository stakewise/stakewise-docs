import React from 'react'
import cx from 'classnames'

import { Post } from '@site/src/components'

import s from './PostSections.module.scss'


const posts = [
  {
    title: 'Concepts',
    text: 'Everything you want to know about StakeWise at your fingertips',
    image: require('@site/static/img/concepts.png'),
    href: '/docs/overview',
  },
  {
    title: 'Guides',
    text: 'Step-by-step tutorials for staking, running a Vault, and DeFi strategies',
    image: require('@site/static/img/guides.png'),
    href: '/docs/guides/intro',
  },
  {
    title: 'Operator',
    text: 'Documentation for the full Vault operator journey',
    image: require('@site/static/img/operator.png'),
    href: '/operator/becoming-a-vault-operator',
  },
]

const PostSections: React.FC = () => (
  <div className={cx(s.container, 'flex gap-20 mt-60')}>
    {
      posts.map((item) => (
        <Post key={item.title} {...item} />
      ))
    }
  </div>
)


export default React.memo(PostSections)
