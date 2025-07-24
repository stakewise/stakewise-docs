import React from 'react'
import { FloatingPortal } from '@floating-ui/react'

import type { TooltipData } from '../Tooltip'

import s from './TooltipContent.module.css'


type TooltipContentProps = {
  children: React.ReactNode
  data: TooltipData
}

const TooltipContent: React.FC<TooltipContentProps> = (props) => {
  const { children, data } = props

  if (!data.open) return null

  const tooltipsContainer = document.getElementById('tooltips') as HTMLElement

  const { x: arrowX, y: arrowY } = data.middlewareData.arrow || {}
  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[data.placement.split('-')[0]]

  return (
    <FloatingPortal root={tooltipsContainer}>
      <div
        className="z-999"
        ref={data.refs.setFloating}
        style={data.floatingStyles}
        {...data.getFloatingProps()}
      >
        <div
          className={s.tooltip}
          style={data.styles}
        >
          {children}
          <div
            ref={data.arrowRef}
            className={s.arrow}
            style={{
              left: arrowX != null ? `${arrowX}px` : '',
              top: arrowY != null ? `${arrowY}px` : '',
              right: '',
              bottom: '',
              [staticSide!]: '-4px',
            }}
          />
        </div>
      </div>
    </FloatingPortal>
  )
}


export default React.memo(TooltipContent)
