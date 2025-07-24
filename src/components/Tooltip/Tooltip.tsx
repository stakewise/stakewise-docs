import React from 'react'
import type { Placement } from '@floating-ui/react'

import { useTooltip } from './util'
import TooltipContent from './TooltipContent/TooltipContent'
import TooltipTrigger from './TooltipTrigger/TooltipTrigger'


export type TooltipData = ReturnType<typeof useTooltip>

export type TooltipProps = {
  children: React.ReactNode
  content?: React.ReactNode | string
  placement?: Placement
}

const Tooltip: React.FC<TooltipProps> = props => {
  const {
    children,
    placement,
    content,
  } = props

  const tooltip = useTooltip({ placement })

  if (!content) {
    return children
  }

  return (
    <>
      <TooltipTrigger
        data={tooltip}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent
        data={tooltip}
      >
        <div>
          {content}
        </div>
      </TooltipContent>
    </>
  )
}


export default React.memo(Tooltip)
