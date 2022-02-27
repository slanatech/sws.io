<template>
  <a
    :href="pages[fileName].href"
    class="px-3 py-2 transition-colors duration-200 relative block rounded-md"
    :class="[
      isActive
        ? 'text-cyan-700 bg-cyan-50'
        : 'hover:text-gray-900 text-gray-500',
    ]"
  >
    <span>{{ pages[fileName].title }}</span>
  </a>
  <!--<a
      href="http://github.com"
      class="px-3 py-2 transition-colors duration-200 relative block rounded-md"
      :class="[
      isActive
        ? 'text-cyan-700 bg-cyan-50'
        : 'hover:text-gray-900 text-gray-500',
    ]"
  >
    <span>{{ fileName }}</span>
  </a>-->
</template>

<script>
import { getNameFromPath } from '../utils.js'
import { ref, watch, computed } from 'vue';
import { useData } from 'vitepress'

export default {
  props: {
    fileName: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { site, page, theme, frontmatter } = useData();
    //const currentRoute = ref();
    return {
      theme,
      page,
      collections: computed(() => theme.value.collections),
      pages: computed(() => theme.value.pages),
    };
  },
  computed: {
    isActive() {
      return false; //getNameFromPath(this.$page.relativePath) == this.fileName
    },
  },
}
</script>
