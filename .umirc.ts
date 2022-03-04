import { defineConfig } from 'dumi'

export default defineConfig({
  title: '随波逐流',
  favicon: 'https://yun.duiba.com.cn/80kziolo44.png',
  logo: 'https://yun.duiba.com.cn/80kziolo44.png',
  outputPath: 'docs-dist',
  mode: 'site',
  styles: [`.markdown a.beian { color: #b0b1ba; }`, `.markdown a.beian svg { display: none; }`]
  // more config: https://d.umijs.org/config
})
