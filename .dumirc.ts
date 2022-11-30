import { defineConfig } from 'dumi'

export default defineConfig({
  favicons: ['https://yun.duiba.com.cn/80kziolo44.png'],
  autoAlias: false,
  outputPath: 'docs-dist',
  themeConfig: {
    rtl: true,
    name: '随波逐流',
    logo: 'https://yun.duiba.com.cn/80kziolo44.png',
    footer: `Open-source MIT Licensed | Copyright © 2019-present<br />Powered by onlyxhb`
  },
  sitemap: { hostname: 'https://docs.onlystar.site' }
})
