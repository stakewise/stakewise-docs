import React, { useEffect } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import Blocks from './Blocks/Blocks'


const DocsSections: React.FC = () => {
  const { siteConfig } = useDocusaurusContext()

  useEffect(() => {
    // Something prevents adding a class, apparently a little later
    // calls for another modification of the element
    setTimeout(() => {
      document.body.classList.add('bg-gradient')
    })

    return () => {
      document.body.classList.remove('bg-gradient')
    }
  }, [])

  return (
    <div className="pt-40 flex flex-col items-center w-full">
      <h1 className="text-lilac! text-center">{siteConfig.title}</h1>
      <h3 className="text-center">{siteConfig.tagline}</h3>
      <Blocks />
    </div>
  )
}


export default React.memo(DocsSections)
