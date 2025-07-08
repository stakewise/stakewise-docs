import React from 'react'
import cx from 'classnames'

import s from './Item.module.css'


type ItemProps = {
  title: string
  href: string
}

const LinkIcon = require("@site/static/icon/link.svg").default

const Item: React.FC<ItemProps> = (props) => {
  const { title, href } = props

  return (
    <a
      className={cx(s.container, 'flex items-center justify-between crystal-button-block rounded-8 m-12 px-12 py-16')}
      target="_blank"
      href={href}
    >
      <div className="mr-16 text-t14m hover:text--no-decoration">
        {title}
      </div>
      <LinkIcon className="w-16 h-16 opacity-50" />
    </a>
  )
}


export default React.memo(Item)
