import React, { type ComponentType, type ReactNode } from 'react'
import OriginalIdealImage from '@theme-original/IdealImage'
import { useColorMode } from '@docusaurus/theme-common'
import type { Props } from '@theme/IdealImage'


type ThemedProps = Props & {
  sources?: {
    light: string
    dark: string
  }
}

type ExtendedProps = Props & {
  shouldAutoDownload?: () => boolean
}

const ExtendedIdealImage = OriginalIdealImage as ComponentType<ExtendedProps>

const IdealImage = (props: ThemedProps): ReactNode => {
  const { sources, img } = props
  const { colorMode } = useColorMode()
  const themeImg = sources
    ? colorMode === 'dark' ? sources.dark : sources.light
    : img

  return (
    <div className="ideal-image-wrapper">
      <ExtendedIdealImage
        key={sources ? colorMode : undefined}
        {...props}
        img={themeImg}
        shouldAutoDownload={() => true}
      />
    </div>
  )
}


export default IdealImage
