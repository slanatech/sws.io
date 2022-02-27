import DefaultTheme from 'vitepress/theme'
import './tailwind.css'
import './prism.css'
import Layout from './Layout.vue'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({app, router, siteData}) {
  }
}
