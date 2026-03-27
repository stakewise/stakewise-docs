import React, { type ReactNode } from 'react'
import OriginalIdealImage from '@theme-original/IdealImage'
import type { Props } from '@theme/IdealImage'
import { useColorMode } from '@docusaurus/theme-common'

interface ThemedProps extends Props {
  sources?: {
    light: string
    dark: string
  }
}

const IdealImage = (props: ThemedProps): ReactNode => {
  const { sources, img } = props

  const { colorMode } = useColorMode()
  const themeImg = sources
    ? (colorMode === 'dark' ? sources.dark : sources.light)
    : img

  return (
    <div className="ideal-image-wrapper">
      <OriginalIdealImage key={sources ? colorMode : undefined} {...props} img={themeImg} />
    </div>
  )
}

export default IdealImage
