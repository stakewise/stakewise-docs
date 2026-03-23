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

const IdealImage = ({ sources, ...props }: ThemedProps): ReactNode => {
  const { colorMode } = useColorMode()
  const img = sources
    ? (colorMode === 'dark' ? sources.dark : sources.light)
    : props.img

  return (
    <div className="ideal-image-wrapper">
      <OriginalIdealImage key={sources ? colorMode : undefined} {...props} img={img} />
    </div>
  )
}

export default IdealImage
