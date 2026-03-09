import React, { useState } from 'react'
import cx from 'classnames'

import { Question } from '@site/src/components'

import data from './questions'


type CommonQuestionsProps = {
  className?: string
}

const CommonQuestions: React.FC<CommonQuestionsProps> = (props) => {
  const { className } = props

  const [ openIndex, setOpenIndex ] = useState<number | null>(null)

  return (
    <div className={cx(className, 'flex flex-col gap-32 mt-[100px]')}>
      <h2>Common questions</h2>
      <div className="crystal-bg rounded-[12px] px-24">
        {
          data.map((question, index) => (
            <Question
              key={index}
              text={question.answer}
              title={question.question}
              isOpen={openIndex === index}
              isLast={index === data.length - 1}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))
        }
      </div>
    </div>
  )
}


export default React.memo(CommonQuestions)
