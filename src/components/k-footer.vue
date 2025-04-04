<template>
  <div class="custom-footer">
    <div class="footer-social">
      <div v-for="(item, index) in list" :key="index" class="social-item">
        <span class="social-title">{{ item.title }}</span>
        <div class="social-link">
          <a v-for="(link, idx) in item.links" :key="idx" :href="link.url" target="_blank" class="social-link-item">
            <img v-if="link.img" :src="link.img" class="item-img" />
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
      { title: 'mdn', img: 'https://developer.mozilla.org/favicon-48x48.bc390275e955dacb2e65.png', url: 'https://developer.mozilla.org/zh-CN/docs/Web' },
      { title: 'w3c', img: 'https://7n.w3cschool.cn/statics/images/favicon.ico', url: 'https://www.w3cschool.cn/' },
      { title: 'lodash', img: 'https://www.lodashrc.cn/img/favicon.png', url: 'https://www.lodashrc.cn/' },
      { title: 'leetcode', img: 'http://assets.leetcode.cn/aliyun-lc-upload/users/leetcode-solution/avatar_1582018938.png', url: 'https://leetcode.cn/' },
      { title: 'nest', img: 'https://docs.nestjs.com/favicon.ico', url: 'https://nest.nodejs.cn/' },
      { title: 'nuxt', img: 'https://nuxt.zhcndoc.com/icon.png', url: 'https://nuxt.zhcndoc.com/' },
      { title: 'next', img: 'https://nextjs.frontendx.cn/static/favicon/favicon.ico', url: 'https://nextjs.frontendx.cn/' },
      { title: 'flutter', img: 'https://docs.flutter.cn/assets/images/cn/flutter-icon.png', url: 'https://flutter.cn/' },
      { title: 'uTools', img: 'https://res.u-tools.cn/website5/static/assets/favicon.png', url: 'https://www.u-tools.cn/' }
    ] 
  },
  {
    title: '帮助',
    links: [
      { title: 'taro', img: 'https://docs.taro.zone/img/taro-logo_180.png', url: 'https://docs.taro.zone/docs/' },
      { title: 'uniapp', img: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/icon.png', url: 'https://uniapp.dcloud.net.cn/' },
      { title: 'unibest', img: 'https://unibest.tech/favicon.ico', url: 'https://unibest.tech/' },
      { title: 'electron-vite', img: 'https://cn.electron-vite.org/favicon.svg', url: 'https://cn.electron-vite.org/' },
      { title: 'bootcdn', img: 'https://www.bootcdn.cn/assets/ico/favicon.ico', url: 'https://www.bootcdn.cn/' },
      { title: 'deepseek', img: 'https://cdn.deepseek.com/chat/icon.png', url: 'https://chat.deepseek.com/' },
      { title: 'kimi', img: 'https://statics.moonshot.cn/kimi-chat/favicon.ico', url: 'https://kimi.moonshot.cn/' },
      { title: '文心一言', img: 'https://nlp-eb.cdn.bcebos.com/logo/favicon.ico', url: 'https://yiyan.baidu.com/' },
      { title: '腾讯元宝', img: 'https://cdn-bot.hunyuan.tencent.com/logo.png', url: 'https://yuanbao.tencent.com/chat' },
      { title: '扣子', img: 'https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png', url: 'https://www.coze.cn/' }
    ] 
  },
  {
    title: '更多',
    links: [
      { title: 'Vue', img: 'https://cn.vuejs.org/logo.svg', url: 'https://cn.vuejs.org/' },
      { title: 'React', img: 'https://zh-hans.react.dev/favicon-32x32.png', url: 'https://zh-hans.react.dev/' },
      { title: 'webpack', img: 'https://webpack.js.org/icon_512x512.png', url: 'https://cn.vitejs.dev/' },
      { title: 'Vite', img: 'https://cn.vitejs.dev/logo.svg', url: 'https://webpack.js.org/' },
      { title: 'vitepress', img: 'https://vitepress.dev/vitepress-logo-mini.svg', url: 'https://vitepress.dev/zh/' },
      { title: 'Antd', img: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png', url: 'https://ant.design/index-cn' },
      { title: '在线编辑器', img: 'https://c.staticblitz.com/assets/favicon_sb-861fe1b85c0dc928750c62de15fed96fc75e57ee366bd937bad17a3938917b3f.svg', url: 'https://stackblitz.com/' },
      { title: 'tinypng', img: 'https://tinypng.com/images/favicon.ico', url: 'https://tinypng.com/' },
      { title: '石墨文档', img: 'https://as.smgv.cn/from_qbox/favicon.ico', url: 'https://shimo.im/' },
      { title: '慕课网', img: 'https://www.imooc.com/static/img/index-v3/icon/icon-hot.png', url: 'https://www.imooc.com/' },
      { title: '微信公众号', img: 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico', url: 'https://mp.weixin.qq.com/' }
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