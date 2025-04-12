// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import '../../src/styles/custom.css'

import KImage from '../../src/components/k-image.vue'
import KFooter from '../../src/components/k-footer.vue'
import KGap from '../../src/components/k-gap.vue'
import KSlide from '../../src/components/k-slide.vue'
import KService from '../../src/components/k-service.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册自定义全局组件
    app.component('KImage', KImage)
    app.component('KFooter', KFooter)
    app.component('KGap', KGap)
    app.component('KSlide', KSlide)
    app.component('KService', KService)
  }
}
