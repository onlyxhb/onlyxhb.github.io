import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-Hans',
  title: "随波逐流",
  titleTemplate: ':title-以患者为中心，疗效为导向，赋能多方协作共赢的价值医疗平台',
  description: "对于个人，看病无忧，大病保障，帮助更多人获得可负担的更好治疗；对于医生，行医无忧，执业保障；对于保险，为客户提供可负担的、更优质的健康保障",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', {
      name: 'keywords',
      content: '随波逐流、17健康、品质医疗、管理计划、个案管理师、严选医生、第二诊疗意见、看病指南、看病监理、壹诊所、医师协会、健康旅程导航、健康保障'
    }]
  ],
  sitemap: {
    hostname: 'https://www.kkkf.cn'
  },
  appearance: false,
  themeConfig: {
    // logo: { src: '/logo.png', width: 120 },
    footer: false,
    nav: [
      { text: '首页', link: '/' },
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
  },
  srcDir: 'src',
  outDir: 'dist'
})
