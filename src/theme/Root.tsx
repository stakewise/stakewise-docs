import React, { useLayoutEffect, useEffect } from 'react'
import { useLocation } from '@docusaurus/router'


type RootProps = {
  children: React.ReactNode
}

const scrollThreshold = 50


const Root: React.FC<RootProps> = (props) => {
  const { children } = props

  const { pathname } = useLocation()

  const isHomePage = pathname === '/'

  // This only handles client-side SPA navigation (see headTags in docusaurus.config.ts)
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-page', isHomePage ? 'home' : 'inner')
  }, [isHomePage])

  useEffect(() => {
    if (!isHomePage) {
      document.documentElement.removeAttribute('data-scrolled')

      return
    }

    const handleScroll = () => {
      const scrolled = window.scrollY > scrollThreshold
      const hasAttr = document.documentElement.hasAttribute('data-scrolled')

      if (scrolled && !hasAttr) {
        document.documentElement.setAttribute('data-scrolled', '')
      }
      else if (!scrolled && hasAttr) {
        document.documentElement.removeAttribute('data-scrolled')
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.documentElement.removeAttribute('data-scrolled')
    }
  }, [isHomePage])

  return (
    <>
      <div id="tooltips" />
      {children}
    </>
  )
}


export default Root
