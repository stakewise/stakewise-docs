import { useState, useMemo, useRef } from 'react'
import {
  flip,
  shift,
  offset,
  arrow,
  useRole,
  useFocus,
  useHover,
  useDismiss,
  autoUpdate,
  useFloating,
  useInteractions,
  useTransitionStyles,
  safePolygon
} from '@floating-ui/react'

import type { Placement } from '@floating-ui/react'


type Input = {
  placement?: Placement
};

const useTooltip = (values: Input) => {
  const { placement = 'top' } = values

  const [ open, setOpen ] = useState(false)
  const arrowRef = useRef(null)

  const data = useFloating({
    open,
    placement,
    middleware: [
      offset(6),
      flip({
        fallbackAxisSideDirection: 'start',
        padding: 0,
      }),
      shift({
        padding: 0,
      }),
      arrow({
        element: arrowRef,
      }),
    ],
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
  })

  const context = data.context

  const hover = useHover(context, {
    move: false,
    handleClose: safePolygon({
      requireIntent: false,
    }),
  })

  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'tooltip' })

  const { styles } = useTransitionStyles(context, {
    initial: {
      opacity: 0,
      transform: 'scale(0)',
    },
    open: {
      opacity: 1,
      transform: 'scale(1)',
    },
  })

  const interactions = useInteractions([ hover, focus, dismiss, role ])

  return useMemo(() => ({
      open,
      styles,
      arrowRef,
      ...interactions,
      ...data,
      setOpen,
    }),[ open, interactions, data, styles, setOpen ])
}


export default useTooltip
