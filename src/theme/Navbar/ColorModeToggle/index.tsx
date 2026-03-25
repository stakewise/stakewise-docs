import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import IconLightMode from '@theme/Icon/LightMode'
import IconDarkMode from '@theme/Icon/DarkMode'

import s from './ColorModeToggle.module.scss'

const ColorModeToggle: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <button
      id="color-mode-toggle"
      className='btn-crystal'
      aria-label='Toggle color mode'
      title='Toggle color mode'
      onClick={() => setColorMode(isDark ? 'light' : 'dark')}
    >
      <IconLightMode className={s.lightIcon} />
      <IconDarkMode className={s.darkIcon} />
    </button>
  )
}


export default ColorModeToggle
