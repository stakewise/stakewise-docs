import React, { useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import Button from '@theme/CodeBlock/Buttons/Button'
import IconCopy from '@theme/Icon/Copy'
import IconSuccess from '@theme/Icon/Success'

import s from './CommandSnippet.module.scss'


type CommandSnippetProps = {
  // Command template. Wrap editable parts in double braces, e.g.
  // "docker run -v {{./path_to_password}}:/password -it ssvlabs/ssv-node"
  template: string
}

type Segment =
  | { type: 'text'; value: string }
  | { type: 'field'; index: number }

// Splits the template into static text and {{editable}} segments.
const parseTemplate = (template: string): { segments: Segment[]; defaults: string[] } => {
  const segments: Segment[] = []
  const defaults: string[] = []
  const regex = /\{\{(.*?)\}\}/g

  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(template)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: 'text',
        value: template.slice(lastIndex, match.index),
      })
    }

    segments.push({
      type: 'field',
      index: defaults.length,
    })

    defaults.push(match[1])
    lastIndex = regex.lastIndex
  }

  if (lastIndex < template.length) {
    segments.push({
      type: 'text',
      value: template.slice(lastIndex),
    })
  }

  return { segments, defaults }
}

const CommandSnippet: React.FC<CommandSnippetProps> = ({ template }) => {
  const { segments, defaults } = useMemo(() => parseTemplate(template), [template])
  const [values, setValues] = useState<string[]>(defaults)
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleChange = (index: number, next: string) => {
    setValues((prev) => {
      const updated = [...prev]
      updated[index] = next
      return updated
    })
  }

  const assembled = useMemo(() => (
    segments
      .map((seg) => (seg.type === 'text' ? seg.value : values[seg.index]))
      .join('')
  ), [segments, values])

  const handleCopy = () => {
    if (!navigator.clipboard) {
      return
    }

    navigator.clipboard.writeText(assembled).then(() => {
      setCopied(true)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => setCopied(false), 1000)
    })
  }

  return (
    <div className={s.snippet}>
      <pre className={s.pre}>
        <code className={s.code}>
          {segments.map((seg, i) => {
            if (seg.type === 'text') {
              return <span key={i}>{seg.value}</span>
            }
            const value = values[seg.index] || ''
            return (
              <input
                key={i}
                className={s.field}
                autoCorrect="off"
                spellCheck={false}
                autoCapitalize="off"
                value={value}
                size={Math.max(value.length, 1)}
                aria-label="Editable command value"
                onChange={(e) => handleChange(seg.index, e.target.value)}
              />
            )
          })}
        </code>
      </pre>
      <div className={s.buttonGroup}>
        <Button
          aria-label={copied ? 'Copied' : 'Copy command to clipboard'}
          title="Copy"
          className={clsx(s.copyButton, copied && s.copyButtonCopied)}
          onClick={handleCopy}
        >
          <span className={s.copyButtonIcons} aria-hidden="true">
            <IconCopy className={s.copyButtonIcon} />
            <IconSuccess className={s.copyButtonSuccessIcon} />
          </span>
        </Button>
      </div>
    </div>
  )
}

export default CommandSnippet
