<template>
  <div class="custom-footer">
    <div class="footer-social">
      <div v-for="(item, index) in list" :key="index" class="social-item">
        <span class="social-title">{{ item.title }}</span>
        <div class="social-link">
          <a v-for="(link, idx) in item.links" :key="idx" :href="link.url" target="_blank" class="social-link-item">
            <img v-if="link.img" :src="`/icons/${link.img}`" class="item-img" />
            <span>{{ link.title }}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-opa">
      <span>Made with ❤ by onlystar</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo">
        鄂ICP备17004871号-1
      </a>
    </div>
  </div>
</template>

<script setup>
const list = [
  {
    title: '资源',
    links: [
      { title: 'JS知识图谱', url: 'https://docs.onlystar.site/javascript-guidebook/' },
      { title: 'TS手册', url: 'https://docs.onlystar.site/typescript/' },
      { title: 'CSS Tricks', url: 'https://docs.onlystar.site/css_tricks/' },
      { title: 'Linux命令', url: 'https://docs.onlystar.site/linux-command/' },
      { title: '工作文档', url: 'https://docs.onlystar.site/custom-work-docs/' },
      { title: '编程导航', url: 'https://docs.onlystar.site/code-nav-doc/' },
      { title: '文档导航', url: 'https://docs.onlystar.site/nav-docs-cn/' },
      { title: 'Vite', url: 'https://docs.onlystar.site/vite-docs-cn/' },
      { title: 'Vue3', url: 'https://docs.onlystar.site/vue3-docs-cn/' }
    ] 
  },
  {
    title: '中文网',
    links: [
      { title: 'mdn', img: 'icon-mdn.png', url: 'https://developer.mozilla.org/zh-CN/docs/Web' },
      { title: 'w3c', img: 'icon-w3c.ico', url: 'https://www.w3cschool.cn/' },
      { title: 'lodash', img: 'icon-lodash.png', url: 'https://www.lodashrc.cn/' },
      { title: 'leetcode', img: 'icon-leetcode.png', url: 'https://leetcode.cn/' },
      { title: 'nest', img: 'icon-nest.ico', url: 'https://nest.nodejs.cn/' },
      { title: 'nuxt', img: 'icon-nuxt.png', url: 'https://nuxt.zhcndoc.com/' },
      { title: 'next', img: 'icon-next.ico', url: 'https://nextjs.frontendx.cn/' },
      { title: 'flutter', img: 'icon-flutter.png', url: 'https://flutter.cn/' },
      { title: 'uTools', img: 'icon-utools.png', url: 'https://www.u-tools.cn/' }
    ] 
  },
  {
    title: '帮助',
    links: [
      { title: 'taro', img: 'icon-taro.png', url: 'https://docs.taro.zone/docs/' },
      { title: 'uniapp', img: 'icon-uniapp.png', url: 'https://uniapp.dcloud.net.cn/' },
      { title: 'unibest', img: 'icon-unibest.ico', url: 'https://unibest.tech/' },
      { title: 'electron-vite', img: 'icon-electron-vite.svg', url: 'https://cn.electron-vite.org/' },
      { title: 'bootcdn', img: 'icon-bootcdn.ico', url: 'https://www.bootcdn.cn/' },
      { title: 'deepseek', img: 'icon-deepseek.png', url: 'https://chat.deepseek.com/' },
      { title: 'kimi', img: 'icon-kimi.ico', url: 'https://kimi.moonshot.cn/' },
      { title: '文心一言', img: 'icon-yiyan.ico', url: 'https://yiyan.baidu.com/' },
      { title: '腾讯元宝', img: 'icon-yuanbao.png', url: 'https://yuanbao.tencent.com/chat' },
      { title: '扣子', img: 'icon-coze.png', url: 'https://www.coze.cn/' }
    ] 
  },
  {
    title: '更多',
    links: [
      { title: 'Vue', img: 'icon-vuejs.svg', url: 'https://cn.vuejs.org/' },
      { title: 'React', img: 'icon-reactjs.png', url: 'https://zh-hans.react.dev/' },
      { title: 'webpack', img: 'icon-webpack.png', url: 'https://cn.vitejs.dev/' },
      { title: 'Vite', img: 'icon-vite.svg', url: 'https://webpack.js.org/' },
      { title: 'vitepress', img: 'icon-vitepress.svg', url: 'https://vitepress.dev/zh/' },
      { title: 'Antd', img: 'icon-antd.png', url: 'https://ant.design/index-cn' },
      { title: '在线编辑器', img: 'icon-stackblitz.svg', url: 'https://stackblitz.com/' },
      { title: 'tinypng', img: 'icon-tinypng.ico', url: 'https://tinypng.com/' },
      { title: '石墨文档', img: 'icon-smgv.ico', url: 'https://shimo.im/' },
      { title: '慕课网', img: 'icon-imooc.png', url: 'https://www.imooc.com/' },
      { title: '微信公众号', img: 'icon-wechat.ico', url: 'https://mp.weixin.qq.com/' }
    ] 
  }
]
</script>

<style>
.custom-footer {
  width: 100%;
  text-align: left;
}
.custom-footer .footer-social {
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  padding: 28px 120px;
  background-color: #404645;
}
.footer-social .social-item {
  display: flex;
  flex-direction: column;
  margin-right: 140px;
}
.footer-social .social-item:last-child {
  margin-right: 0;
}
.social-item .social-title {
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
}
.social-item .social-link {
  display: flex;
  flex-direction: column;
}
.social-link .social-link-item {
  display: flex;
  align-items: center;
  color: rgba(255,255,255,0.60);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  text-decoration: none;
}
.social-link .social-link-item:last-child {
  margin-bottom: 0;
}
.social-link .social-link-item .item-img {
  width: 14px;
  height: auto;
  margin-right: 6px;
}
.custom-footer .footer-opa {
  height: 37px;
  background: #313231;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 400;
  color: rgba(255,255,255,0.70);
}
.custom-footer .footer-opa img {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}
.custom-footer .footer-opa a {
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  color: rgba(255,255,255,0.70);
}

@media (max-width: 767px) {
  .custom-footer .footer-social {
    flex-direction: column;
  }

  .footer-social .social-item {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>