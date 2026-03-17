import React, { useLayoutEffect, useEffect, useMemo, useState } from 'react'
import { useLocation } from '@docusaurus/router'
import Head from '@docusaurus/Head'


type RootProps = {
  children: React.ReactNode
}

const scrollThreshold = 50

const guidePaths = [
  '/operator/',
  '/docs/guides/',
  '/docs/guides/defi/',
  '/docs/guides/staking/',
  '/docs/guides/running-a-vault/',
]

const siteUrl = 'https://docs.stakewise.io'

const Root: React.FC<RootProps> = (props) => {
  const { children } = props

  const { pathname } = useLocation()

  const isHomePage = pathname === '/'
  const isGuidePage = guidePaths.some((path) => pathname.startsWith(path)) && pathname !== '/docs/guides/intro'

  const [ pageTitle, setPageTitle ] = useState('')
  const [ pageDescription, setPageDescription ] = useState('')

  useEffect(() => {
    setPageTitle(document.title?.replace(/ \|.*$/, '') || '')
    setPageDescription(document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content || '')
  }, [ pathname ])

  const articleSchema = useMemo(() => {
    if (isHomePage) return null

    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': isGuidePage ? 'TechArticle' : 'Article',
      url: `${siteUrl}${pathname}`,
      publisher: {
        '@type': 'Organization',
        name: 'StakeWise',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/icons/stakewise/logo.png`,
        },
      },
      author: {
        '@type': 'Organization',
        name: 'StakeWise',
      },
    }

    if (pageTitle) {
      schema.headline = pageTitle
    }

    if (pageDescription) {
      schema.description = pageDescription
    }

    if (isGuidePage) {
      schema.proficiencyLevel = 'Beginner'
    }

    return schema
  }, [ pathname, isHomePage, isGuidePage, pageTitle, pageDescription ])

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
      {
        articleSchema && (
          <Head>
            <script type="application/ld+json">
              {JSON.stringify(articleSchema)}
            </script>
          </Head>
        )
      }
      {children}
    </>
  )
}


export default Root
