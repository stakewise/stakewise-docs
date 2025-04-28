import React, { useState } from 'react'
import cx from 'classnames'

import data from './questions'
import Question from './Question/Question'

import s from './FAQ.module.css'


type FAQProps = {
  className?: string
}

const FAQ: React.FC<FAQProps> = (props) => {
  const { className } = props

  const [ openIndex, setOpenIndex ] = useState<number | null>(null)

  return (
    <div className={cx(className, s.container, 'mt-40 p-16 overflow-hidden mx-auto')}>
      <h2 className='text-t18m text-center'>FAQ</h2>
      <div className="overflow-y-auto flex flex-col">
        {
          data.map((question, index) => (
            <Question
              key={index}
              text={question.answer}
              title={question.question}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))
        }
      </div>
    </div>
  )
}


export default React.memo(FAQ)
