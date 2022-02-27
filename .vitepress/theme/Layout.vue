<template>
  <Home v-if="isIndex" />
  <PageLayout v-else />
</template>

<script>
import Home from './Home.vue'
import PageLayout from './PageLayout.vue'
import { useRoute, useData } from 'vitepress'

//const route = useRoute()
//const { site, page, theme, frontmatter } = useData()

export default {
  components: { Home, PageLayout },
  computed: {
    isIndex() {
      //return route.data.relativePath === 'index.md'
      return false;
    },
  },
}
</script>
