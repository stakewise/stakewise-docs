import React from 'react'

import { BrandAssets, Footer } from '@site/src/components'

import PostSections from './PostSections/PostSections'
import DeveloperLinks from './DeveloperLinks/DeveloperLinks'
import CommonQuestions from './CommonQuestions/CommonQuestions'


const HomeView: React.FC = () => (
  <div className="width-container">
    <PostSections />
    <DeveloperLinks />
    <CommonQuestions />
    <BrandAssets />
    <Footer />
  </div>
)


export default React.memo(HomeView)
