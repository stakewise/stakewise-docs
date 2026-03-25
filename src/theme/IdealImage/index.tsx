import React, { type ReactNode } from 'react'
import OriginalIdealImage from '@theme-original/IdealImage'
import type { Props } from '@theme/IdealImage'


const IdealImage = (props: Props): ReactNode => (
  <div className="ideal-image-wrapper">
    <OriginalIdealImage {...props} />
  </div>
)


export default IdealImage
