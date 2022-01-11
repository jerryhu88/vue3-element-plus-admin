import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 公共样式
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/css/common.scss";'
      }
    }
  },
  // 服务
  server: {
    open: false,
    port: 8080,
    // 代理配置
    proxy: {
      '/api': 'http://192.168.20.105:9002'
    }
  },
  build: {
    // 打包后目录,默认dist
    outDir: 'dist'
  },
  // 引入第三方的配置
  optimizeDeps: {
    include: ['element-plus/lib/locale/lang/zh-cn', 'echarts', 'wangEditor', 'jquery']
  },
  // 生产环境路径，类似webpack的assetsPath
  base: './'
})
