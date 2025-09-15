import { themes as prismThemes } from 'prism-react-renderer'
import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


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
          path: 'docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          routeBasePath: '/',
          breadcrumbs: true,
          admonitions: {
            keywords: ['custom-info', 'custom-tips', 'custom-warning', 'custom-notes', 'custom-stakewise'],
            extendDefaults: true,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
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
          label: 'Concepts',
          to: 'docs/overview',
          type: "docSidebar",
          activeBaseRegex: `/docs/`,
          sidebarId: 'docsSidebar',
        },
        {
          label: 'Guides',
          to: '/docs/guides/running-a-vault',
          activeBaseRegex: `/docs/guides/`,
          sidebarId: 'guidesSidebar',
        },
        {
          label: 'Operator',
          to: '/operator/intro',
          activeBaseRegex: `/operator/`,
          sidebarId: 'operatorSidebar',
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
              class="bg-white"
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
