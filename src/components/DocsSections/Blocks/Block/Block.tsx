import React from 'react'
import cx from 'classnames'
import Link from '@docusaurus/Link'

import s from './Block.module.css'


export type BlockProps = {
  title: string
  text: string
  href: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
}

const LinkIcon = require("@site/static/icon/link.svg").default

const Block: React.FC<BlockProps> = (props) => {
  const { title, text, href, Svg } = props

  return (
    <Link
      className={cx(s.container, 'rounded-8 mx-16 px-12 py-16 crystal-button-block relative max-[960px]:mt-16')}
      to={href}
    >
      <div className="flex items-center justify-start">
        <Svg className={s.icon} />
        <div className="ml-8 text-t18m">
          {title}
        </div>
      </div>
      <div className="mt-8 text-t14m opacity-50">
        {text}
      </div>
      <LinkIcon className="absolute right-12 top-12 opacity-50 w-16 h-16" />
    </Link>
  )
}


export default React.memo(Block)
