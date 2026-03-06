import React from 'react'

import s from './Footer.module.scss'


const socials = [
  { Icon: require('@site/static/icon/socials/discord.svg').default, href: 'https://discord.com/invite/2BSdr2g', title: 'Discord' },
  { Icon: require('@site/static/icon/socials/telegram.svg').default, href: 'https://t.me/stakewise_io', title: 'Telegram' },
  { Icon: require('@site/static/icon/socials/twitter.svg').default, href: 'https://x.com/stakewise_io', title: 'Twitter' },
  { Icon: require('@site/static/icon/forum.svg').default, href: 'https://forum.stakewise.io/', title: 'Forum' },
  { Icon: require('@site/static/icon/vote.svg').default, href: 'https://vote.stakewise.io/', title: 'Vote' },
]

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={s.container}>
      <div className={s.divider} />
      <div className={s.inner}>
        <img src="/img/stakewise/logo.png" alt="StakeWise" className={s.logo} />
        <span className={s.copyright}>
          Copyright &copy; {year} StakeWise
        </span>
        <nav className={s.socials}>
          {
            socials.map(({ Icon, href, title }) => (
              <a
                key={title}
                className={s.socialLink}
                href={href}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
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
