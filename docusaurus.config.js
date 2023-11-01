const { themes } = require('prism-react-renderer');

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
        locales: ['en'],
        localeConfigs: {
            en: {
                htmlLang: 'en-US',
            },
        },
    },
    plugins: [
        'docusaurus-plugin-sass',
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
        async function tailwind() {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/ambushjs/ambushjs.github.io/tree/main',
                    remarkPlugins: [
                        [
                            require('@docusaurus/remark-plugin-npm2yarn'),
                            {
                                sync: true,
                                converters: [
                                    'yarn',
                                    'pnpm',
                                ],
                            },
                        ],
                    ],
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
                    label: 'Docs',
                    to: '/docs/category/getting-started',
                    className: 'docs-navbar',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'playground',
                    position: 'left',
                    label: 'Playground',
                },
                {
                    href: 'https://github.com/ambushjs/ambushjs.github.io',
                    position: 'right',
                    className: 'header-github-link',
                },
            ],
        },
        footer: {
            links: [
                {
                    title: 'Documentation',
                    items: [
                        {
                            label: 'Getting Started',
                            to: '/docs/category/getting-started',
                        },
                        {
                            label: 'Functions',
                            to: '/docs/category/functions',
                        },
                        {
                            label: 'Playground',
                            to: '/docs/category/playground',
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
                    title: 'Statistics',
                    items: [
                        {
                            label: 'Socket',
                            href: 'https://socket.dev/npm/package/ambush',
                        },
                        {
                            label: 'CodeQL',
                            href: 'https://github.com/ambushjs/ambush/actions/workflows/codeql.yml',
                        },
                        {
                            label: 'Size',
                            href: 'https://bundlephobia.com/package/ambush@1.1.0',
                        }
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
            theme: themes.github,
            darkTheme: themes.vsDark,
            additionalLanguages: ['bash', 'json'],
        },
    }),
};

module.exports = config;
