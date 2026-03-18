import React from 'react'

import { BrandAssets, Footer } from '@site/src/components'

import PostSections from './PostSections/PostSections'
import DeveloperLinks from './DeveloperLinks/DeveloperLinks'
import CommonQuestions from './CommonQuestions/CommonQuestions'


const HomeView: React.FC = () => (
  <div className="width-container">
    <div className="mt-60 text-center">
      <h1>StakeWise Documentation</h1>
      <div className="mt-8 text-center">
        Complete technical documentation for the StakeWise liquid staking protocol — concepts, guides, Vault operator setup, and developer resources.
      </div>
    </div>
    <PostSections />
    <DeveloperLinks />
    <CommonQuestions />
    <BrandAssets />
    <Footer />
  </div>
)


export default React.memo(HomeView)
