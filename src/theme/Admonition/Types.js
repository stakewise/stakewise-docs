import React from 'react'
import clsx from 'clsx'
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types'


function CustomAdmonition({ iconSrc, type, title, children, className }) {
  return (
    <div className={clsx('theme-admonition', `theme-admonition-${type}`, className)}>
      <div className="admonition-heading">
        <h5>
          <img src={iconSrc} alt="" className="admonition-icon" />
          {title}
        </h5>
      </div>
      <div className="admonition-content">
        {children}
      </div>
    </div>
  )
}

const custom = (type, iconSrc) => {
  const Admonition = (props) => (
    <CustomAdmonition {...props} type={type} iconSrc={iconSrc} />
  )

  Admonition.displayName = `Admonition(${type})`

  return Admonition
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  'custom-info': custom('info', '/icons/stakewise/info.png'),
  'custom-notes': custom('notes', '/icons/stakewise/notes.png'),
  'custom-tips': custom('tips', '/icons/stakewise/tips.png'),
  'custom-warning': custom('warning', '/icons/stakewise/warning.png'),
  'custom-stakewise': custom('stakewise', '/icons/stakewise/sw_logo.gif'),
}


export default AdmonitionTypes
