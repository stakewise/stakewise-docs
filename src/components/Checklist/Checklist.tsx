import React, { useState, useEffect } from 'react'

import s from './Checklist.module.scss'


type CheckItemProps = {
  id: string
  label: React.ReactNode
}

const CheckItem: React.FC<CheckItemProps> = ({ id, label }) => {
  const storageKey = `check_${id}`
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(storageKey) === 'true') setChecked(true)
    } catch {}
  }, [storageKey])

  const toggle = () => {
    setChecked((prev) => {
      const next = !prev
      try { localStorage.setItem(storageKey, String(next)) } catch {}
      return next
    })
  }

  return (
    <label className={s.item}>
      <input type="checkbox" checked={checked} onChange={toggle} className={s.checkbox} />
      <span className={s.label}>{label}</span>
    </label>
  )
}

export default React.memo(CheckItem)
