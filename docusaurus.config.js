// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// Ref: https://github.com/infinum/eightshift-docs/blob/develop/website/docusaurus.config.js

const math = require('remark-math');
const katex = require('rehype-katex');
// const oembed = require('@agentofuser/remark-oembed')
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AIKB',
  tagline: 'AI Knowledge Base',
  url: 'https://kb.recohut.com',
  baseUrl: '/ai-kb/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'sparsh-ai',
  projectName: 'ai-kb',
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
          docs: {
              sidebarPath: require.resolve('./sidebars.js'),
              editUrl: 'https://github.com/sparsh-ai/ai-kb',
              remarkPlugins: [math],
              rehypePlugins: [katex],
            //   lastVersion: 'current',
            //   versions: {
            //       current: {
            //       label: '1.0.0',
            //       path: '1.0.0',
            //       },
            //   },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
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
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AIKB',
        logo: {
          alt: 'aikb Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/sparsh-ai/ai-kb',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} AIKB Docs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;