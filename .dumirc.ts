import { defineConfig } from 'dumi';

import { description, keywords, author } from './package.json';

export default defineConfig({
  // disable mfsu for HMR
  mfsu: false,
  base: '/',
  publicPath: '/',
  locales: [
    { id: 'zh-CN', name: '中文' }
  ],
  devtool: 'cheap-module-source-map',
  sitemap: {
    hostname: 'https://docs.onlystar.site'
  },
  // all in one to fix ConfigProvider error
  codeSplitting: {
    jsStrategy: 'bigVendors'
  },
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts'
  },
  outputPath: 'docs-dist',
  alias: {
    example: require.resolve('./src/index.ts')
  },
  clickToComponent: {},
  // pass theme config
  themeConfig: {
    name: '随波逐流',
    logo: 'https://yun.duiba.com.cn/80kziolo44.png',
    helmetIcon: '🍺',
    settingPanelVisible: true,
    thumbBackground: true,
    description,
    keywords,
    author,
    social: {
      github: {
        name: '随波逐流',
        link: 'https://github.com/onlyxhb/onlyxhb.github.io'
      },
      discord: {
        name: 'maryoku-ui-discord',
        link: 'https://www.baidu.com'
      }
    },
    search: {
      type: 'docsearch',
      config: {
        appId: 'CQNSFVVYJA',
        apiKey: '2c50fefc041d570e018d5d9f569086b7',
        indexName: 'onlystar'
      }
    },
    hero: {
      showVersionBadge: true
    },
    footer: `Copyright © 2019-${new Date().getFullYear()} Powered by onlyxhb`
  }
});
