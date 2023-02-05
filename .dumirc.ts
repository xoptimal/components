import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  title: 'wishingjs-components',
  themeConfig: {
    name: '',
    logo: '/logo.png',
    socialLinks: {
      github: 'https://github.com/wishingjs/components',
    },
    nav: [
      {
        title: 'Guide',
        link: '/guide',
      },
      {
        title: 'Components',
        link: '/components/popup-window',
      }
    ],
    footer: 'Powered by wishingjs',
  },
});
