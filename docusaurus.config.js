// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Коптра',
  tagline: 'Полное руководство по использованию',
  favicon: 'img/coptra-icon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mantiss02.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/coptra-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MANTISS02', // Usually your GitHub org/user name.
  projectName: 'coptra-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/', // Устанавливаем документацию как корневой маршрут
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Добавляем плагин локального поиска
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // Опции плагина
        hashed: true,
        language: ['en', 'ru'],
        indexDocs: true,
        indexBlog: true,
        docsRouteBasePath: '/',
        blogRouteBasePath: '/blog',
        searchBarPosition: 'right',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Логотип Коптра',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/',
            label: 'Главная',
            position: 'left',
            activeBaseRegex: '^/$',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Документация',
          },
          {
            to: '#',
            label: 'Продукты',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Блог',
            position: 'left',
          },
          {
            href: '#',
            label: 'Контакты',
            position: 'left',
          },
          {
            type: 'html',
            position: 'right',
            value: '<button class="button button--secondary button--sm">Войти</button>',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Информация',
            items: [
              {
                label: 'Блог',
                to: '/blog',
              },
              {
                label: 'Контакты',
                to: '#',
              },
              {
                label: 'Документация',
                to: '/',
              },
            ],
          },
          {
            title: 'Продукты',
            items: [
              {
                label: 'Сельское хозяйство',
                to: '#',
              },
              {
                label: 'Образование',
                to: '#',
              },
              {
                label: 'FPV Дроны',
                to: '#',
              },
              {
                label: 'Грузоперевозки',
                to: '#',
              },
              {
                label: 'Компоненты',
                to: '#',
              },
            ],
          },
          {
            title: 'Конфигуратор',
            items: [
              {
                label: 'Скачать для Windows',
                href: '#',
              },
              {
                label: 'Скачать для Linux',
                href: '#',
              },
            ],
          },
          {
            title: 'Свяжитесь с нами',
            items: [
              {
                label: 'info@coptra.ru',
                href: 'mailto:info@coptra.ru',
              },
              {
                label: '+7 (123) 456-78-90',
                href: 'tel:+71234567890',
              },
              {
                html: `
                  <div class="social-icons">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="VK" class="social-icon">
                      <img src="/img/vk.svg" alt="VK" width="16" height="16" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Telegram" class="social-icon">
                      <img src="/img/telegram.svg" alt="Telegram" width="16" height="16" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="social-icon">
                      <img src="/img/youtube.svg" alt="YouTube" width="16" height="16" />
                    </a>
                  </div>
                `,
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Coptra. Все права защищены.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
