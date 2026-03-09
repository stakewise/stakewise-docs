import { themes as prismThemes } from 'prism-react-renderer'
import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import path from 'path'


const config: Config = {
  title: 'StakeWise Docs',
  tagline: 'Documentation and Guides',
  url: 'https://docs.stakewise.io',
  favicon: 'icon/favicon.ico',
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
          remarkPlugins: [ remarkMath ],
          rehypePlugins: [ rehypeKatex ],
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          routeBasePath: '/',
          breadcrumbs: true,
          admonitions: {
            keywords: [
              'custom-info',
              'custom-tips',
              'custom-notes',
              'custom-warning',
              'custom-stakewise',
            ],
            extendDefaults: true,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
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
    [
      'docusaurus-plugin-sass',
      {
        sassOptions: {
          loadPaths: [path.resolve(__dirname, 'src/css')],
        },
      },
    ],
    './src/plugins/tailwind-config.js',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'operator',
        path: 'operator',
        routeBasePath: 'operator',
        sidebarPath: './sidebarsOperator.ts',
        remarkPlugins: [ remarkMath ],
        rehypePlugins: [ rehypeKatex ],
        showLastUpdateTime: true,
        breadcrumbs: true,
        admonitions: {
          keywords: [
            'custom-info',
            'custom-tips',
            'custom-notes',
            'custom-warning',
            'custom-stakewise'
          ],
          extendDefaults: true,
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'operator-v3',
        path: 'operator-v3',
        routeBasePath: 'operator/v3',
        sidebarPath: './sidebarsOperatorV3.ts',
        remarkPlugins: [ remarkMath ],
        rehypePlugins: [ rehypeKatex ],
        showLastUpdateTime: true,
        breadcrumbs: true,
        admonitions: {
          keywords: [
            'custom-info',
            'custom-tips',
            'custom-notes',
            'custom-warning',
            'custom-stakewise'
          ],
          extendDefaults: true,
        },
      },
    ],
  ],

  themeConfig: {
    respectPrefersColorScheme: true,
    image: 'img/opengraph.png',

    algolia: {
      appId: '413SNHUF5R',
      apiKey: '934a7ad553024345ec22b5f10a2afb89',
      indexName: 'StakeWise Docs',
      contextualSearch: true,
      searchPagePath: 'search',
    },

    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },

    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'StakeWise Logo',
        src: 'img/stakewise/logo.png',
        height: 32,
        width: 32,
      },
      items: [
        {
          label: 'Concepts',
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
        },
        {
          label: 'Guides',
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
        },
        {
          label: 'Operator',
          type: 'dropdown',
          items: [
            {
              label: 'v4 (Current)',
              type: 'docSidebar',
              sidebarId: 'operatorSidebar',
              docsPluginId: 'operator',
            },
            {
              label: 'v3',
              type: 'docSidebar',
              sidebarId: 'operatorV3Sidebar',
              docsPluginId: 'operator-v3',
            },
          ],
        },
        {
          label: 'Contracts',
          type: 'docSidebar',
          sidebarId: 'contractsSidebar',
        },
        {
          label: 'SDK',
          type: 'docSidebar',
          sidebarId: 'sdkSidebar',
        },
        {
          type: 'html',
          position: 'right',
          value: `
            <a
              class="btn-primary"
              href="https://app.stakewise.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch App
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0824 5L21 11.9176L14.0824 18.8353" stroke="#1C1C25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 11.9177H3" stroke="#1C1C25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          `,
        },
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
      additionalLanguages: ['json', 'bash', 'javascript', 'python', 'solidity'],
    },
  } satisfies Preset.ThemeConfig,
}


export default config
