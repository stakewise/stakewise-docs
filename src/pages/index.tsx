import React from 'react'
import Layout from '@theme/Layout'

import { DocsSections, FAQ, GitHub, BrandAssets, Footer } from '@site/src/components'

import '@site/src/css/tailwind/config.css'


const Home: React.FC = () => (
  <Layout>
    <div className="width-container">
      <DocsSections />
      <GitHub />
      <FAQ />
      <BrandAssets />
      <Footer />
    </div>
  </Layout>
)


export default Home
