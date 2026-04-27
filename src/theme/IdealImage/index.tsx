import React, { type ReactNode } from 'react'
import ReactIdealImage from '@theme/IdealImageLegacy'
import { useColorMode } from '@docusaurus/theme-common'
import type { Props, SrcImage } from '@theme/IdealImage'


type ThemedProps = Props & {
  sources?: {
    light: string
    dark: string
  }
}

type PluginImage = {
  src: SrcImage & {
    width: number
    height: number
  }
  preSrc: string
}

const IdealImage = (props: ThemedProps): ReactNode => {
  const { sources, img, alt } = props
  const { colorMode } = useColorMode()
  const themeImg = sources
    ? colorMode === 'dark' ? sources.dark : sources.light
    : img

  const pluginImg = themeImg as PluginImage

  return (
    <div className="ideal-image-wrapper">
      <ReactIdealImage
        key={sources ? colorMode : undefined}
        alt={alt}
        src={pluginImg.src.src}
        width={pluginImg.src.width}
        height={pluginImg.src.height}
        placeholder={{ lqip: pluginImg.preSrc }}
        srcSet={pluginImg.src.images.map((image) => ({
          ...image,
          src: image.path || '',
        }))}
        shouldAutoDownload={() => true}
      />
    </div>
  )
}


export default IdealImage
