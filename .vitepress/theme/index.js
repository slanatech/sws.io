import './tailwind.css'
import './prism.css'
import './beams.css'
import Layout from './Layout.vue'
import Blog from './Blog.vue'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData` is a `ref` of current site-level metadata.
    //router.addRoutes({ path: '/blog', component: Blog })
  },
}
