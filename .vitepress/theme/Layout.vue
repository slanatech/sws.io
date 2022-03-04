<template>
  <Blog v-if="isIndex" />
  <PageLayout v-else />
</template>

<script>
import Home from './Home.vue'
import Blog from './Blog.vue'
import PageLayout from './PageLayout.vue'
import { useRoute, useData } from 'vitepress'
import { ref, watch, computed } from 'vue';
//const route = useRoute()
//const { site, page, theme, frontmatter } = useData()

export default {
  components: { Home, Blog, PageLayout },
  setup() {
    //const { site, page, theme } = useData();
    const route = useRoute();
    // TODO return component based on current route:
    //  Home
    //  Blog
    //  PageLayout
    //  BlogLayout
    return {
      isIndex: computed(() => route.data.relativePath  === 'index.md')
    };
  },
}
</script>
