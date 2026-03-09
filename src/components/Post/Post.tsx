import React from 'react'
import cx from 'classnames'
import Link from '@docusaurus/Link'

import s from './Post.module.scss'


export type PostProps = {
  className?: string
  title: string
  text: string
  href: string
  image: string
}

const Post: React.FC<PostProps> = (props) => {
  const { className, title, text, href, image } = props

  return (
    <Link
      className={cx(className, s.card, 'flex flex-col p-20 rounded-12 crystal-bg-hovered')}
      to={href}
    >
      <div className={cx(s.imageWrapper, 'relative overflow-hidden rounded-8')}>
        <img
          className="w-full h-full object-cover pointer-events-none"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col flex-1 gap-8 mt-16">
        <div className="text-t18m text-moon">{title}</div>
        <div className="text-t14 text-moon opacity-70">{text}</div>
      </div>
    </Link>
  )
}


export default React.memo(Post)
