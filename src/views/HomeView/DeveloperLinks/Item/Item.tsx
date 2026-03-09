import React from 'react'


type ItemProps = {
  title: string
  href: string
}

const LinkIcon = require("@site/static/icon/link.svg").default

const Item: React.FC<ItemProps> = (props) => {
  const { title, href } = props

  return (
    <a
      className="flex-auto flex items-center justify-between crystal-bg-hovered rounded-8 p-16"
      target="_blank"
      href={href}
    >
      <div className="mr-16 text-t16m hover:text--no-decoration">
        {title}
      </div>
      <LinkIcon className="w-16 h-16 opacity-50" />
    </a>
  )
}


export default React.memo(Item)
