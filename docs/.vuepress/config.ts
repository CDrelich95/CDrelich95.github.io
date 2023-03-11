import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  title: 'ExpBG User Guide',
  description: 'Above statement does not take repo download times into consideration.',
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