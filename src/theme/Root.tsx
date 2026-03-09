import React, { useLayoutEffect } from 'react'
import { useLocation } from '@docusaurus/router'


type RootProps = {
  children: React.ReactNode
}


const Root: React.FC<RootProps> = (props) => {
  const { children } = props

  const { pathname } = useLocation()

  const isHomePage = pathname === '/'

  // This only handles client-side SPA navigation (see headTags in docusaurus.config.ts)
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-page', isHomePage ? 'home' : 'inner')
  }, [isHomePage])

  return (
    <>
      <div id="tooltips" />
      {children}
    </>
  )
}


export default Root
