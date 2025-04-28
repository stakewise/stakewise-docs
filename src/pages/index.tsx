import React, { useEffect } from 'react'
import Layout from '@theme/Layout'
import { useLocation } from '@docusaurus/router'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import { DocsSections, FAQ, GitHub, Links, BrandAssets } from '@site/src/components'

import '@site/src/css/tailwind/config.css'


const Home: React.FC = () => {
  const location = useLocation()
  const { siteConfig } = useDocusaurusContext()

  useEffect(() => {
    console.log('location.pathname', location.pathname)
  }, [ location.pathname ])

  return (
    <Layout title={siteConfig.title}>
      <div className="width-container">
        <DocsSections />
        <GitHub />
        <FAQ />
        <Links />
        <BrandAssets />
      </div>
    </Layout>
  )
}


export default Home
