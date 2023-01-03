<template>
  <div class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden bg-slate-50 dark:bg-[#0B1120]">
    <header class="relative z-10 mx-auto">
      <page-header></page-header>
      <div class="absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] beams-8">
        <div
          class="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
          style="mask-image: linear-gradient(to bottom, transparent, black); -webkit-mask-image: linear-gradient(to bottom, transparent, black)"
        ></div>
      </div>
      <!--<div class="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">-->
      <div class="mb-14 sm:mb-20 xl:mb-8">
        <div class="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <h1 class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">AI Powered<br />CX Testing On a Massive Scale</h1>
          <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
            In today's digital world, <span class="font-medium text-teal-700 dark:text-teal-400">Customer Experience (CX), </span>is a crucial factor for businesses to succeed.
            <span class="font-medium text-teal-700 dark:text-teal-400">A Positive CX, </span>can lead to increased customer
            <span class="font-medium text-teal-700 dark:text-teal-400">Satisfaction, Loyalty, </span> and ultimately drive
            <span class="font-medium text-teal-700 dark:text-teal-400">Revenue Growth.</span>
          </p>
          <h2 class="mt-6 text-slate-900 font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center dark:text-white/80">Ensure your CX is up to the task</h2>
          <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
            <a
              class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
              href="/docs/installation"
              >Get started</a
            ><button
              type="button"
              class="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="flex-none text-slate-300 dark:text-slate-400"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5"></path>
                <circle cx="11" cy="11" r="6"></circle></svg
              ><span class="flex-auto">Quick search...</span
              ><kbd class="font-sans font-semibold dark:text-slate-500"><abbr title="Control" class="no-underline text-slate-300 dark:text-slate-500">Ctrl </abbr> K</kbd>
            </button>
          </div>
        </div>

        <!--<div class="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
          <a
            class="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
            href="/docs/"
          >
            Get started
          </a>

          <button
            class="w-full sm:w-auto flex-none bg-gray-50 text-gray-400 hover:text-gray-900 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200"
            @click="writeClipboard"
          >
            <span class="text-gray-900">
              <span class="hidden sm:inline text-gray-500" aria-hidden="true"> $ </span>
              npm install tailwindcss
            </span>
            <IconCopy />
          </button>
        </div>-->
      </div>
    </header>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox.vue'
import Logo from './components/Logo.vue'
import DarkModeSwitch from './components/DarkModeSwitch.vue'
import IconGitHub from './icons/IconGitHub.vue'
import IconCopy from './icons/IconCopy.vue'
import OutLink from './components/OutLink.vue'
import PageHeader from './PageHeader.vue'

import { useRoute, useData } from 'vitepress'
import { ref, watch, computed } from 'vue'

export default {
  components: { SearchBox, Logo, IconGitHub, IconCopy, OutLink, DarkModeSwitch, PageHeader },
  setup() {
    const { site, page, theme } = useData()
    const route = useRoute()
    return {
      themeConfig: computed(() => theme.value),
    }
  },
  methods: {
    writeClipboard() {
      navigator.clipboard.writeText('npm install tailwindcss')
    },
  },
}
</script>
