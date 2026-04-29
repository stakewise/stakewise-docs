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
    title: 'Staker',
    text: 'Stake any amount of ETH, stay liquid with osETH, and earn rewards.',
    image: require('@site/static/img/staker.png'),
    href: '/staker/introduction',
  },
  {
    title: 'Operator',
    text: 'Documentation for the full Vault operator journey',
    image: require('@site/static/img/operator.png'),
    href: '/operator/introduction',
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
