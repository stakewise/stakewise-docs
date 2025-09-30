import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import IconLightMode from '@theme/Icon/LightMode'
import IconDarkMode from '@theme/Icon/DarkMode'

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
      { isDark ? <IconLightMode /> : <IconDarkMode /> }
    </button>
  )
}


export default ColorModeToggle
