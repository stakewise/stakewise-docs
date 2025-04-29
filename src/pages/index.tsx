import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import { DocsSections, FAQ, GitHub, Links, BrandAssets } from '@site/src/components'

import '@site/src/css/tailwind/config.css'


const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext()

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
