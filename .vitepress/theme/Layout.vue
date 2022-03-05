<template>
  <component v-bind:is="getComponent()"></component>
</template>

<script>
import Home from './Home.vue'
import Blog from './Blog.vue'
import Article from './Article.vue'
import PageLayout from './PageLayout.vue'
import { useRoute, useData } from 'vitepress'
import { ref, watch, computed } from 'vue'
//const route = useRoute()
//const { site, page, theme, frontmatter } = useData()

export default {
  components: { Home, Blog, PageLayout, Article },
  setup() {
    //const { site, page, theme } = useData();
    const route = useRoute()
    return {
      isIndex: computed(() => {
        console.log(
          `Layout: route.path=${route.path}, rel: ${route.data.relativePath}`
        )
        return route.data.relativePath === 'index.md'
      }),
      getComponent: () => {
        if (route.path === '/') {
          return 'Home'
        } else if (route.path === '/blog/' || route.path === '/blog.html') {
          return 'Blog'
        } else if (route.path.startsWith('/blog/')) {
          return 'Article'
        } else {
          return 'PageLayout'
        }
      },
    }
  },
}
</script>
