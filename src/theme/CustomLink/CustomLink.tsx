import React from 'react'


const isExternalLink = (href: string) => href ? href.startsWith('http') : false

const isExternalStakeWiseLink = (href: string) => isExternalLink(href) && href.includes('stakewise.io')

const CustomLink = (props) => {
  const { href, children, ...rest } = props
  
  if (isExternalStakeWiseLink(href)) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener"
        {...rest}
      >
        {children}
      </a>
    )
  }

  if (isExternalLink(href)) {
    return (
      <a
        href={href}
        {...rest}
        target="_blank" 
        rel="noopener noreferrer nofollow" 
      >
        {children}
      </a>
    )
  }
  
  return (
    <a
      href={href}
      {...rest}
    >
      {children}
    </a>
  )
}


export default CustomLink
