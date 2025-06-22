import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/coptra-docs/blog',
    component: ComponentCreator('/coptra-docs/blog', 'dce'),
    exact: true
  },
  {
    path: '/coptra-docs/blog/archive',
    component: ComponentCreator('/coptra-docs/blog/archive', 'e82'),
    exact: true
  },
  {
    path: '/coptra-docs/blog/authors',
    component: ComponentCreator('/coptra-docs/blog/authors', '53b'),
    exact: true
  },
  {
    path: '/coptra-docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/coptra-docs/blog/authors/all-sebastien-lorber-articles', '723'),
    exact: true
  },
  {
    path: '/coptra-docs/blog/authors/yangshun',
    component: ComponentCreator('/coptra-docs/blog/authors/yangshun', '99c'),
    exact: true
  },
  {
    path: '/coptra-docs/blog/first-blog-post',
    component: ComponentCreator('/coptra-docs/blog/first-blog-post', '361'),
    exact: true
  },
  {
    path: '/coptra-docs/blog/long-blog-post',
    component: ComponentCreator('/coptra-docs/blog/long-blog-post', '24a'),
    exact: true
  },
  {
    path: '/coptra-docs/blog/mdx-blog-post',
    component: ComponentCreator('/coptra-docs/blog/mdx-blog-post', 'ff7'),
    exact: true
  },
  {
    path: '/coptra-docs/blog/tags',
    component: ComponentCreator('/coptra-docs/blog/tags', 'c74'),
    exact: true
  },
  {
    path: '/coptra-docs/blog/tags/docusaurus',
    component: ComponentCreator('/coptra-docs/blog/tags/docusaurus', '3bb'),
    exact: true
  },
  {
    path: '/coptra-docs/blog/tags/facebook',
    component: ComponentCreator('/coptra-docs/blog/tags/facebook', '2aa'),
    exact: true
  },
  {
    path: '/coptra-docs/blog/tags/hello',
    component: ComponentCreator('/coptra-docs/blog/tags/hello', '1d3'),
    exact: true
  },
  {
    path: '/coptra-docs/blog/tags/hola',
    component: ComponentCreator('/coptra-docs/blog/tags/hola', 'cf5'),
    exact: true
  },
  {
    path: '/coptra-docs/blog/welcome',
    component: ComponentCreator('/coptra-docs/blog/welcome', 'cb3'),
    exact: true
  },
  {
    path: '/coptra-docs/markdown-page',
    component: ComponentCreator('/coptra-docs/markdown-page', '32a'),
    exact: true
  },
  {
    path: '/coptra-docs/search',
    component: ComponentCreator('/coptra-docs/search', 'b2d'),
    exact: true
  },
  {
    path: '/coptra-docs/',
    component: ComponentCreator('/coptra-docs/', 'c2e'),
    routes: [
      {
        path: '/coptra-docs/',
        component: ComponentCreator('/coptra-docs/', 'e90'),
        routes: [
          {
            path: '/coptra-docs/',
            component: ComponentCreator('/coptra-docs/', 'bf4'),
            routes: [
              {
                path: '/coptra-docs/агродрон',
                component: ComponentCreator('/coptra-docs/агродрон', 'ab3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/база-знаний',
                component: ComponentCreator('/coptra-docs/база-знаний', '6ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/безопасность',
                component: ComponentCreator('/coptra-docs/безопасность', '795'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/загрузки',
                component: ComponentCreator('/coptra-docs/загрузки', '913'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/коптра-орлёнок',
                component: ComponentCreator('/coptra-docs/коптра-орлёнок', '3ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/методики-и-кейсы',
                component: ComponentCreator('/coptra-docs/методики-и-кейсы', '2d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/плата-подключения-дополнительных-модулей',
                component: ComponentCreator('/coptra-docs/плата-подключения-дополнительных-модулей', '94c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/пульт-управления',
                component: ComponentCreator('/coptra-docs/пульт-управления', '067'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/система-ик-навигации',
                component: ComponentCreator('/coptra-docs/система-ик-навигации', '3e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/система-оптической-навигации',
                component: ComponentCreator('/coptra-docs/система-оптической-навигации', '0f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/система-уз-навигации',
                component: ComponentCreator('/coptra-docs/система-уз-навигации', '9ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/cargo-light',
                component: ComponentCreator('/coptra-docs/cargo-light', '698'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/cargo-max',
                component: ComponentCreator('/coptra-docs/cargo-max', '777'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/cargo-pro',
                component: ComponentCreator('/coptra-docs/cargo-pro', 'a01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/coptra-drone-control-system',
                component: ComponentCreator('/coptra-docs/coptra-drone-control-system', '683'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/coptra-sim',
                component: ComponentCreator('/coptra-docs/coptra-sim', '090'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/fpv-freestyle',
                component: ComponentCreator('/coptra-docs/fpv-freestyle', '309'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/fpv-racer',
                component: ComponentCreator('/coptra-docs/fpv-racer', '314'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/lua',
                component: ComponentCreator('/coptra-docs/lua', 'b75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/python',
                component: ComponentCreator('/coptra-docs/python', '0a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/trik-studio',
                component: ComponentCreator('/coptra-docs/trik-studio', 'c62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/coptra-docs/',
                component: ComponentCreator('/coptra-docs/', '6f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
