import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react'
import {
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
} from '@headlessui/react'
import cx from 'classnames'

import s from './Question.module.scss'


type QuestionProps = {
  text: string
  title: string
  isOpen: boolean
  isLast: boolean
  onToggle: () => void
}

const Question: React.FC<QuestionProps> = (props) => {
  const { title, text, isOpen, isLast, onToggle } = props

  const panelRef = useRef<HTMLDivElement>(null)

  const [ height, setHeight ] = useState<number>(0)

  const updateHeight = useCallback(() => {
    if (panelRef.current) {
      setHeight(panelRef.current.scrollHeight)
    }
  }, [])

  useEffect(() => {
    updateHeight()
  }, [ updateHeight, text, isOpen ])

  useEffect(() => {
    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [ updateHeight ])

  return (
    <div className={cx({ [s.bordered]: !isLast })}>
      <Disclosure defaultOpen={isOpen}>
        <DisclosureButton
          className="flex w-full justify-between items-center py-18 cursor-pointer bg-transparent border-none"
          onClick={onToggle}
        >
          <span className="text-start text-t18m text-moon">{title}</span>
          <svg
            className={cx('shrink-0 ml-16 text-moon transition-transform duration-500 ease-in-out', {
              'rotate-0': isOpen,
              'rotate-180': !isOpen,
            })}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 15.5L12 8.5L19 15.5"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DisclosureButton>
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? height : 0,
          }}
        >
          <DisclosurePanel
            static
            ref={panelRef}
          >
            <div className={cx(s.answer, 'text-t14 text-moon whitespace-pre-wrap pb-24')}>
              {text}
            </div>
          </DisclosurePanel>
        </div>
      </Disclosure>
    </div>
  )
}


export default React.memo(Question)
