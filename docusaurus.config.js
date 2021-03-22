/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '飲む気スイッチ',
  tagline: '体のことを考えて楽しく飲もう',
  url: 'https://nomuki-switch-site.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'syuji-higa', // Usually your GitHub org/user name.
  projectName: 'nomuki-switch-site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '飲む気スイッチ',
      logo: {
        alt: '飲む気スイッチのロゴ',
        src: 'img/logo.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              label: 'プライバシーポリシー',
              to: 'docs/privacy-policy/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 飲む気スイッチ`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
