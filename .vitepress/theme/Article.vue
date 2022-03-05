<script setup>
import Date from './Date.vue'
import Author from './Author.vue'
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { data as posts } from '../posts.data'

const { frontmatter: data } = useData()

const route = useRoute()

function findCurrentIndex() {
  return posts.findIndex((p) => p.href === route.path)
}

// use the customData date which contains pre-resolved date info
const date = computed(() => posts[findCurrentIndex()].date)
const nextPost = computed(() => posts[findCurrentIndex() - 1])
const prevPost = computed(() => posts[findCurrentIndex() + 1])
</script>

<template>
  <div class="antialiased">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a class="text-xl" href="/" aria-label="The Vue Point">
          <img class="inline-block mr-2" style="width: 36px; height: 31px" alt="logo" src="/logo.svg" />
        </a>
        <div class="text-sm text-gray-500 leading-5">
          <a class="hover:text-gray-700" href="https://github.com/vuejs/blog" target="_blank" rel="noopener"><span class="hidden sm:inline">GitHub </span>Source</a>
          <span class="mr-2 ml-2">·</span>
          <a class="hover:text-gray-700" href="/feed.rss">RSS<span class="hidden sm:inline"> Feed</span></a>
          <span class="mr-2 ml-2">·</span>
          <a class="hover:text-gray-700" href="https://vuejs.org" target="_blank" rel="noopener">Vuejs.org →</a>
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <article class="xl:divide-y xl:divide-gray-200">
        <header class="pt-6 xl:pb-10 space-y-1 text-center">
          <Date :date="date" />
          <h1 class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {{ data.title }}
          </h1>
        </header>

        <div class="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:gap-x-10 pb-16 xl:pb-20" style="grid-template-rows: auto 1fr">
          <Author />
          <div class="divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2">
            <Content class="prose max-w-none pt-10 pb-8" />
          </div>

          <footer class="text-sm font-medium leading-5 divide-y divide-gray-200 xl:col-start-1 xl:row-start-2">
            <div v-if="nextPost" class="py-8">
              <h2 class="text-xs tracking-wide uppercase text-gray-500">Next Article</h2>
              <div class="link">
                <a :href="nextPost.href">{{ nextPost.title }}</a>
              </div>
            </div>
            <div v-if="prevPost" class="py-8">
              <h2 class="text-xs tracking-wide uppercase text-gray-500">Previous Article</h2>
              <div class="link">
                <a :href="prevPost.href">{{ prevPost.title }}</a>
              </div>
            </div>
            <div class="pt-8">
              <a class="link" href="/">← Back to the blog</a>
            </div>
          </footer>
        </div>
      </article>
    </main>
  </div>
</template>
