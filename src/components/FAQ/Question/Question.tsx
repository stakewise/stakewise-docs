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


type QuestionProps = {
  text: string
  title: string
  isOpen: boolean
  onToggle: () => void
}

const Question: React.FC<QuestionProps> = (props) => {
  const { title, text, isOpen, onToggle } = props

  const panelRef = useRef<HTMLDivElement>(null)

  const [ height, setHeight ] = useState<number>(0)

  const updateHeight = useCallback(() => {
    if (panelRef.current) {
      setHeight(panelRef.current.scrollHeight + 16)
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
    <Disclosure defaultOpen={isOpen}>
      <DisclosureButton
        className="my-8"
        onClick={onToggle}
      >
        <div className="text-center w-full text-moon text-t18m hover:underline">
          {title}
        </div>
      </DisclosureButton>
      <div
        className="flex p-8 mx-auto crystal-bg rounded-8"
        style={{
          overflow: 'hidden',
          maxWidth: '600px',
          opacity: isOpen ? 1 : 0,
          height: isOpen ? height : 0,
          transition: 'height .2s ease-in-out, opacity .2s ease-in-out',
        }}
      >
        <DisclosurePanel
          static
          ref={panelRef}
        >
          <div className="text-center w-full text-moon text-t14 whitespace-pre-wrap">
            {text}
          </div>
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}


export default React.memo(Question)
