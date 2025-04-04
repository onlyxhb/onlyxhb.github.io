import { defineConfig } from 'vitepress'

// 搜索框
const search = () => {
  return {
    provider: 'local',
    options: {
      translations: {
        button: {
          buttonText: '搜索',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          displayDetails: '展示列表详情',
          resetButtonTitle: '清除查询条件',
          backButtonTitle: '关闭搜索',
          noResultsText: '无法找到相关结果',
          footer: {
            selectText: '选择',
            selectKeyAriaLabel: '确认',
            navigateText: '切换',
            navigateUpKeyAriaLabel: '向上',
            navigateDownKeyAriaLabel: '向下',
            closeText: '关闭',
            closeKeyAriaLabel: '关闭'
          }
        }
      }
    }
  }
}

// 导航栏
const nav = () => {
  return [
    { text: '首页', link: '/home' },
    { text: '博客', link: '/blog/started', activeMatch: '/blog/'  },
    { text: '为患者', link: '/patient' },
    {
      text: '医疗服务方',
      items: [
        { text: '医生', link: '/doctor' }, 
        { text: '医院', link: '/hospital' },
        { text: '创新医药器械', link: '/tool' }
      ] 
    },
    { text: '支付方', link: '/payment' },
    { text: '关于我们', link: '/about' }
  ]
}

// 博客侧边栏
const sidebarBlog = () => {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '开始', link: 'started' },
        { text: '路由', link: 'routing' },
        { text: '部署', link: 'deploy' }
      ]
    },
    { text: '配置', link: 'sitemap' }
  ]
}

export default defineConfig({
  lang: 'zh-Hans',
  title: "随波逐流",
  titleTemplate: ':title-以患者为中心，疗效为导向，赋能多方协作共赢的价值医疗平台',
  description: "对于个人，看病无忧，大病保障，帮助更多人获得可负担的更好治疗；对于医生，行医无忧，执业保障；对于保险，为客户提供可负担的、更优质的健康保障",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#03b588' }],
    ['meta', {
      name: 'keywords',
      content: '随波逐流、17健康、品质医疗、管理计划、个案管理师、严选医生、第二诊疗意见、看病指南、看病监理、壹诊所、医师协会、健康旅程导航、健康保障'
    }]
  ],
  sitemap: {
    hostname: 'https://www.kkkf.cn'
  },
  appearance: true,
  themeConfig: {
    logo: { src: '/favicon.png', width: 24 },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/onlyxhb/onlyxhb.github.io' },
      { icon: 'juejin', link: 'https://juejin.cn/user/3421335915860221' }
    ],
    footer: {
      message: '鄂ICP备17004871号-1',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 随波逐流`
    },
    search: search(),
    nav: nav(),
    sidebar: {
      '/blog/': { base: '/blog/', items: sidebarBlog() }
    },
    editLink: {
      pattern: 'https://github.com/onlyxhb/onlyxhb.github.io/edit/onlyxhb/src/:path',
      text: '在 GitHub 上编辑此页面'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'
  },
  srcDir: 'src',
  outDir: 'dist'
})
