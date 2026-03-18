import React from 'react'
import cx from 'classnames'

import s from './Footer.module.scss'


const socials = [
  { Icon: require('@site/static/icons/socials/discord.svg').default, href: 'https://discord.com/invite/2BSdr2g', title: 'Discord' },
  { Icon: require('@site/static/icons/socials/telegram.svg').default, href: 'https://t.me/stakewise_io', title: 'Telegram' },
  { Icon: require('@site/static/icons/socials/twitter.svg').default, href: 'https://x.com/stakewise_io', title: 'Twitter' },
  { Icon: require('@site/static/icons/forum.svg').default, href: 'https://forum.stakewise.io/', title: 'Forum' },
  { Icon: require('@site/static/icons/vote.svg').default, href: 'https://vote.stakewise.io/', title: 'Vote' },
]

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-40 pb-24">
      <div className="h-px bg-moon opacity-15" />
      <div className={cx(s.grid, 'items-center pt-24')}>
        <img
          className="w-32 h-32"
          alt="StakeWise"
          src="/icons/stakewise/logo.png"
        />
        <span className="text-t14m opacity-50">
          Copyright &copy; {year} StakeWise
        </span>
        <nav className={cx(s.socials, 'flex items-center gap-16')}>
          {
            socials.map(({ Icon, href, title }) => (
              <a
                key={title}
                className={s.socialLink}
                href={href}
                title={title}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Icon />
              </a>
            ))
          }
        </nav>
      </div>
    </footer>
  )
}


export default React.memo(Footer)
