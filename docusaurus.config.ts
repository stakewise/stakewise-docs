import { themes as prismThemes } from 'prism-react-renderer'
import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'


const config: Config = {
  title: 'Welcome to StakeWise Docs',
  tagline: 'Documentation and Guides',
  url: 'https://docs.stakewise.io',
  favicon: 'img/favicon.ico',
  baseUrl: '/',
  projectName: 'docs', // Usually your repo name.
  organizationName: 'stakewise', // Usually your GitHub org/user name.

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'throw',
  onDuplicateRoutes: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          routeBasePath: '/',
          breadcrumbs: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }
    ],
  ],

  plugins: [
    './src/plugins/tailwind-config.js',
  ],

  themeConfig: {
    respectPrefersColorScheme: true,
    image: 'img/og-image.png',
  
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },

    navbar: {
      title: 'StakeWise Docs',
      logo: {
        alt: 'StakeWise Logo',
        src: 'img/logo512.png',
        height: 32,
        width: 32,
        style: {
          marginRight: '12px',
        },
      },
      items: [
        {
          label: 'Docs',
          to: 'docs/intro',
          type: "docSidebar",
          activeBaseRegex: `/docs/`,
          sidebarId: 'docsSidebar',
        },
        {
          label: 'SDK',
          to: '/sdk/intro',
          activeBaseRegex: `/sdk/`,
          sidebarId: 'sdkSidebar',
        },
        {
          label: 'Contracs',
          to: '/contracts/intro',
          activeBaseRegex: `/contracts/`,
          sidebarId: 'contractsSidebar',
        },
        {
          label: 'X',
          href: 'https://x.com/stakewise_io',
          position: 'right',
        },
        {
          label: 'Discord',
          href: 'https://discord.com/invite/2BSdr2g',
          position: 'right',
        },
        {
          label: 'Telegram',
          href: 'https://t.me/stakewise_io',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value: `
            <button   
              class="bg-fancy-ocean" 
              onclick="window.open('https://app.stakewise.io', '_blank')"
              style="padding: 10px 20px; color: #00060f; border: none; border-radius: 5px; cursor: pointer;"  
            >  
              Open App 
            </button>
          `,
        }
      ],
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} StakeWise Labs`,
    },
  
    prism: {
      theme: prismThemes.github,
      defaultLanguage: 'typescript',
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
