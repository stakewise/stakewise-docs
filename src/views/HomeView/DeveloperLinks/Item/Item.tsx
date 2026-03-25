import React from 'react'


type ItemProps = {
  title: string
  href: string
  icon: string
}

const LinkIcon = require("@site/static/icons/link.svg").default

const Item: React.FC<ItemProps> = (props) => {
  const { title, href, icon } = props

  return (
    <a
      className="flex-auto flex items-center gap-8 crystal-bg-hovered rounded-8 p-16"
      target="_blank"
      rel="noopener noreferrer nofollow"
      href={href}
    >
      <img src={icon} alt="" className="w-20 h-20" />
      <div className="mr-auto text-t16m hover:no-underline">
        {title}
      </div>
      <LinkIcon className="w-16 h-16 opacity-50" />
    </a>
  )
}


export default React.memo(Item)
