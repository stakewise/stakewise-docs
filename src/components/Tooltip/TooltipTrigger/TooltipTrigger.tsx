import React from 'react'

import type { TooltipData } from '../Tooltip'
import s from './TooltipTrigger.module.scss'


type TooltipTriggerProps = {
  children: React.ReactNode
  data: TooltipData
}

type ExtendedProps = React.HTMLAttributes<HTMLSpanElement> & {
  'data-state'?: string
}

const TooltipTrigger: React.FC<TooltipTriggerProps> = (props) => {
  const { children, data, ...otherProps } = props

  const ref = data.refs.setReference

  // A span, not a div: triggers are used inline inside paragraphs, and a block
  // element there closes the <p> early and breaks hydration.
  return React.createElement(
    'span',
    data.getReferenceProps({
      ref,
      ...otherProps,
      className: s.trigger,
      tabIndex: 0,
      'data-state': data.context.open ? 'open' : 'closed',
    } as ExtendedProps),
    children
  )
}


export default React.memo(TooltipTrigger)
