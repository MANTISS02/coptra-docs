// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Создаем структуру боковой панели вручную
  tutorialSidebar: [
    {
      type: 'category',
      label: 'ПРИСТУПАЯ К РАБОТЕ',
      items: [
        'index',
        'безопасность',
      ],
    },
    {
      type: 'category',
      label: 'РУКОВОДСТВА',
      items: [
        {
          type: 'category',
          label: 'Учебные дроны',
          items: [
            'коптра-орлёнок',
          ],
        },
        {
          type: 'category',
          label: 'Сельскохозяйственные дроны',
          items: [
            'агродрон',
          ],
        },
        {
          type: 'category',
          label: 'FPV дроны',
          items: [
            'fpv-racer',
            'fpv-freestyle',
          ],
        },
        {
          type: 'category',
          label: 'Грузовые дроны',
          items: [
            'cargo-light',
            'cargo-pro',
            'cargo-max',
          ],
        },
        'пульт-управления',
      ],
    },
    {
      type: 'category',
      label: 'СИСТЕМЫ НАВИГАЦИИ',
      items: [
        'система-ик-навигации',
        'система-уз-навигации',
        'система-оптической-навигации',
      ],
    },
    {
      type: 'category',
      label: 'ПОЛЕЗНАЯ НАГРУЗКА',
      items: [
        'плата-подключения-дополнительных-модулей',
      ],
    },
    {
      type: 'category',
      label: 'ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ',
      items: [
        'coptra-drone-control-system',
        'coptra-sim',
      ],
    },
    {
      type: 'category',
      label: 'ПРОГРАММИРОВАНИЕ',
      items: [
        'python',
        'trik-studio',
        'lua',
      ],
    },
    {
      type: 'category',
      label: 'ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ',
      items: [
        'база-знаний',
        'загрузки',
        'методики-и-кейсы',
      ],
    },
  ],
};

export default sidebars;
