import React from 'react'
import Layout from '@theme/Layout'

import HomeView from '@site/src/views/HomeView/HomeView'

import '@site/src/css/tailwind/config.css'


const Home: React.FC = () => (
  <Layout
    title="StakeWise Docs — Liquid Staking on Ethereum & Gnosis Chain"
    description="Official StakeWise documentation. Learn how to stake ETH, run Vaults, use osToken, and integrate with the StakeWise SDK and smart contracts."
  >
    <HomeView />
  </Layout>
)


export default Home
