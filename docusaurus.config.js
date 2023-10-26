const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Ambush',
    tagline: 'Start using Ambush in your project!',
    favicon: 'img/favicon.ico',
    url: 'https://ambush.js.org',
    trailingSlash: false,
    baseUrl: '/',
    organizationName: 'ambushjs',
    projectName: 'ambushjs.github.io',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ko'],
        localeConfigs: {
            en: {
                htmlLang: 'en-US',
            },
        },
    },
    plugins: [
        [
            '@docusaurus/plugin-pwa',
            {
                pwaHead: [
                    {
                        tagName: 'link',
                        rel: 'icon',
                        href: '/img/logo.svg',
                    },
                    {
                        tagName: 'link',
                        rel: 'manifest',
                        href: '/site.webmanifest',
                        crossorigin: 'use-credentials',
                    },
                    {
                        tagName: 'meta',
                        name: 'theme-color',
                        content: '#25c2a0',
                    },
                ],
            },
        ],
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/ambushjs/ambushjs.github.io/tree/main',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig: ({
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        algolia: {
            appId: 'CMR81X324T',
            apiKey: '903138f39c0e2b801feff5f3c3473b08',
            indexName: 'ambush-js',
            contextualSearch: true,
            searchPagePath: 'search',
        },
        image: 'img/social-card.svg',
        navbar: {
            title: 'Ambush',
            logo: {
                alt: 'Ambush Logo',
                src: 'img/logo.svg',
            },
            hideOnScroll: true,
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docs',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'playground',
                    position: 'left',
                    label: 'Playground',
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                {
                    href: 'https://github.com/ambushjs/ambushjs.github.io',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub Repo',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {
                            label: 'Getting Started',
                            to: '/docs/getting-started/intro',
                        },
                    ],
                },
                {
                    title: 'Links',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/ambushjs',
                        },
                        {
                            label: 'Package',
                            href: 'https://npmjs.com/package/ambush',
                        },
                        {
                            label: 'Docs',
                            href: 'https://ambush.js.org',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            logo: {
                alt: 'Ambush Banner',
                src: 'img/ambush.svg',
                href: 'https://npmjs.com/package/ambush',
                width: 400,
            },
            copyright: `Copyright © ${new Date().getFullYear()} Ambush, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;
