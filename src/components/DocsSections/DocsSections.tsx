import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import Blocks from './Blocks/Blocks'


const DocsSections: React.FC = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <div className="pt-40 flex flex-col items-center w-full">
      <h1 className="text-lavender! text-center">{siteConfig.title}</h1>
      <h3 className="text-center">{siteConfig.tagline}</h3>
      <Blocks />
    </div>
  )
}


export default React.memo(DocsSections)
