import React from 'react'

import type { TooltipData } from '../Tooltip'
import s from './TooltipTrigger.module.css'


type TooltipTriggerProps = {
  children: React.ReactNode
  data: TooltipData
}

type ExtendedProps  =  React.HTMLAttributes<HTMLDivElement> & {
  'data-state'?: string;
}

const TooltipTrigger: React.FC<TooltipTriggerProps> = (props) => {
  const { children, data, ...otherProps } = props

  const ref = data.refs.setReference

  return React.createElement(
    'div',
    data.getReferenceProps({
      ref,
      ...otherProps,
      className: s.trigger,
      tabIndex: 0,
      role: 'button',
      'data-state': data.context.open ? 'open' : 'closed',
    } as ExtendedProps),
    children
  )
}


export default React.memo(TooltipTrigger)
