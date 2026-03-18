import React from 'react'


const isExternalLink = (href) => {
  if (!href) {
    return false
  }

  return href.startsWith('http') && !href.includes('stakewise.io')
}

const CustomLink = (props) => {
  const { href, children, ...rest } = props
  
  if (isExternalLink(href)) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer nofollow" 
        {...rest}
      >
        {children}
      </a>
    )
  }
  
  return (
    <a
      href={href}
      {...rest}
      target="_blank" 
      rel="noopener" 
    >
      {children}
    </a>
  )
}


export default CustomLink
