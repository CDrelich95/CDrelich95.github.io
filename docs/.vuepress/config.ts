import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/expbg-docs/',
  lang: 'en-US',
  title: 'ExpBG User Guide',
  description: 'Based on the original guide written by A.Melkho',
  theme: defaultTheme({
    logo: 'images/expbg-logo.png',
    navbar: [
      {
          text: 'User Guide',
          link: '/guide/'
      },
      {
        text: 'Repo List',
        link: '/repos/'
      },
      {
        text: 'Servers',
        link: '/servers/'
      },
      {
          text: 'Release Notes',
          link: '/release-notes/'
      },
      {
        text: 'ExpBG website',
        link: 'https://www.theexpeditionarybattlegroup.com'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: ['/guide/','/guide/configuration.md','/guide/daily-use.md','/guide/faq.md']
        }
      ],
      '/servers/': [
        {
          text: 'Servers',
          link: '/servers/'
        }
      ]
    }
  })
})