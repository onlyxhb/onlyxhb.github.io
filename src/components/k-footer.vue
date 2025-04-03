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
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo">
        鄂ICP备17004871号-1
      </a>
      &nbsp;&nbsp;
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo">
        鄂ICP备17004871号-1
      </a>
    </div>
  </div>
</template>

<script setup>
const list = [
  {
    title: '相关资源',
    links: [
      { title: 'taro', url: 'https://docs.taro.zone/docs/' },
      { title: 'uniapp', url: 'https://uniapp.dcloud.net.cn/' },
      { title: 'unibest', url: 'https://unibest.tech/' },
      { title: 'electron-vite', url: 'https://cn.electron-vite.org/' },
      { title: '文心一言', url: 'https://yiyan.baidu.com/' },
      { title: '腾讯元宝', url: 'https://yuanbao.tencent.com/chat' },
      { title: '扣子', url: 'https://www.coze.cn/' }
    ] 
  },
  {
    title: '中文网',
    links: [
      { title: 'Vite', url: 'https://cn.vitejs.dev/' },
      { title: 'Vue3', url: 'https://cn.vuejs.org/' },
      { title: 'React', url: 'https://zh-hans.react.dev/' },
      { title: 'vitepress', url: 'https://vitepress.dev/zh/' },
      { title: 'flutter', url: 'https://flutter.cn/' },
      { title: 'nuxt3', url: 'https://nuxt.zhcndoc.com/' }
    ] 
  },
  {
    title: '帮助',
    links: [
      { title: 'JavaScript知识图谱', url: 'https://docs.onlystar.site/javascript-guidebook/' },
      { title: 'TypeScript手册', url: 'https://docs.onlystar.site/typescript/' },
      { title: 'CSS Tricks', url: 'https://docs.onlystar.site/css_tricks/' },
      { title: 'Linux命令', url: 'https://docs.onlystar.site/linux-command/' },
      { title: '编程导航', url: 'https://docs.onlystar.site/code-nav-doc/' },
      { title: '文档导航', url: 'https://docs.onlystar.site/nav-docs-cn/' }
    ] 
  },
  {
    title: '更多',
    links: [
      { title: 'Vite', img: 'https://docs.onlystar.site/vite-docs-cn/logo.svg', url: 'https://docs.onlystar.site/vite-docs-cn/' },
      { title: 'Vue3', img: 'http://docs.onlystar.site/vue3-docs-cn/logo.svg', url: 'https://docs.onlystar.site/vue3-docs-cn/' },
      { title: '工作文档', img: 'https://yun.duiba.com.cn/developer_new/images/new/icons/icon_jfsc.png', url: 'https://docs.onlystar.site/custom-work-docs/' },
      { title: 'Antd', img: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png', url: 'https://ant.design/index-cn' },
      { title: '编辑器', img: 'https://img.alicdn.com/tfs/TB1FFA1CFP7gK0jSZFjXXc5aXXa-214-200.png', url: 'https://ggeditor.com' },
      { title: '石墨', img: 'https://gw.alipayobjects.com/zos/antfincdn/0b4HzOcEJY/Graphin.svg', url: 'https://graphin.antv.vision/' }
    ] 
  }
]
</script>

<style>
.custom-footer {
  width: 100vw;
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
  margin-bottom: 10px;
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
</style>