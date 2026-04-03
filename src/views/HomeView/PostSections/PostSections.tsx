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
    text: 'Start your staking journey with StakeWise',
    image: require('@site/static/img/guides.png'),
    href: '/staker/introduction',
  },
  {
    title: 'Operator',
    text: 'Documentation for running and managing the StakeWise Operator Service',
    image: require('@site/static/img/operator.png'),
    href: '/operator/intro',
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
