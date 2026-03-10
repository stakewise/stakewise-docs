import React from 'react'
import Layout from '@theme/Layout'

import HomeView from '@site/src/views/HomeView/HomeView'

import '@site/src/css/tailwind/config.css'


const Home: React.FC = () => (
  <Layout>
    <HomeView />
  </Layout>
)


export default Home
