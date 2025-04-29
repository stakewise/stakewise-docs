import React from 'react'
import cx from 'classnames'

import s from './Block.module.css'


export type BlockProps = {
  title: string
  href: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
}

const LinkIcon = require("@site/static/icon/link.svg").default

const Block: React.FC<BlockProps> = (props) => {
  const { title, href, Svg } = props

  return (
    <a
      className={cx(s.container, 'rounded-8 mx-16 px-12 py-16 bg-moon/5 relative max-[960px]:mt-16')}
      target="_blank"
      href={href}
    >
      <div className="flex items-center justify-start">
        <Svg className={cx(s.icon, 'opacity-50')} />
        <div className="ml-8 text-t18m opacity-50">
          {title}
        </div>
      </div>
      <LinkIcon className="absolute right-12 top-12 opacity-50 w-16 h-16" />
    </a>
  )
}


export default React.memo(Block)
