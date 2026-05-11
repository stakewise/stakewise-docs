import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useColorMode, type ColorMode } from '@docusaurus/theme-common'
import IconSystemColorMode from '@theme/Icon/SystemColorMode'
import IconLightMode from '@theme/Icon/LightMode'
import IconDarkMode from '@theme/Icon/DarkMode'
import cx from 'classnames'

import s from './ColorModeToggle.module.scss'


type ColorModeChoice = ColorMode | null

type Option = {
  value: ColorModeChoice
  label: string
  Icon: React.ComponentType<{
    className?: string
    'aria-hidden'?: boolean
  }>
}

const options: Option[] = [
  { value: 'light', label: 'Light', Icon: IconLightMode },
  { value: 'dark', label: 'Dark', Icon: IconDarkMode },
  { value: null, label: 'System', Icon: IconSystemColorMode },
]

const ariaLabelByChoice: Record<'light' | 'dark' | 'system', string> = {
  system: 'Choose color mode, currently System',
  light: 'Choose color mode, currently Light',
  dark: 'Choose color mode, currently Dark',
}

const ColorModeToggle: React.FC = () => {
  const { colorModeChoice, setColorMode } = useColorMode()

  const ariaLabel = ariaLabelByChoice[colorModeChoice || 'system']

  return (
    <Menu as="div" className={s.root}>
      <MenuButton
        id="color-mode-toggle"
        className="btn-crystal"
        aria-label={ariaLabel}
        title="Choose color mode"
      >
        <IconLightMode aria-hidden className={s.lightIcon} />
        <IconDarkMode aria-hidden className={s.darkIcon} />
        <IconSystemColorMode aria-hidden className={s.systemIcon} />
      </MenuButton>
      <MenuItems anchor={{ to: 'bottom end', gap: 16 }} className={s.items}>
        {
          options.map(({ value, label, Icon }) => (
            <MenuItem
              key={label}
              as="button"
              className={cx(s.item, { [s.itemSelected]: colorModeChoice === value })}
              onClick={() => setColorMode(value)}
            >
              <Icon aria-hidden className={s.itemIcon} />
              <span>{label}</span>
            </MenuItem>
          ))
        }
      </MenuItems>
    </Menu>
  )
}


export default ColorModeToggle
