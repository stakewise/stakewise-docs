import React from 'react'
import Layout from '@theme/Layout'

import { DocsSections, FAQ, GitHub, Links, BrandAssets } from '@site/src/components'

import '@site/src/css/tailwind/config.css'


const Home: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <Layout>
      <div className="width-container">
        <DocsSections />
        <GitHub />
        <FAQ />
        <Links />
        <BrandAssets />
        <div className="mt-40 p-4 text-t14m text-moon/50 text-center">
          Copyright © {year} StakeWise Labs
        </div>
      </div>
    </Layout>
  )
}


export default Home
