import React, { useEffect } from 'react'
import { useLocation } from '@docusaurus/router'


type RootProps = {
  children: React.ReactNode
}


const Root: React.FC<RootProps> = (props) => {
  const { children } = props

  const { pathname } = useLocation()

  const isHomePage = pathname === '/'

  useEffect(() => {
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
