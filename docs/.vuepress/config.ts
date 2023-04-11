import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  title: 'ExpBG User Guide',
  description: 'Based on the original guide written by A.Melkho',
  theme: defaultTheme({
    navbar: [
      {
          text: 'User Guide',
          link: '/guide/'
      },
      {
          text: 'ExpBG website',
          link: 'https://www.theexpeditionarybattlegroup.com'
      },
      {
          text: 'FAQ',
          link: '/faq/'
      }
    ]
  })
})