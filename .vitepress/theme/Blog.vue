<script setup>
import Date from './Date.vue'
import { data as posts } from '../posts.data'
</script>

<template>
  <div class="antialiased">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a class="text-xl" href="/" aria-label="The Vue Point">
          <!--<img class="inline-block mr-2" style="width: 36px; height: 31px" alt="logo" src="/logo.svg" />-->
          <span class="hidden md:inline">The Vue Point</span>
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
      <div class="divide-y divide-gray-200">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 class="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Blog Posts</h1>
        </div>
        <ul class="divide-y divide-gray-200">
          <li class="py-12" v-for="{ title, href, date, excerpt } of posts">
            <article class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
              <Date :date="date" />
              <div class="space-y-5 xl:col-span-3">
                <div class="space-y-6">
                  <h2 class="text-2xl leading-8 font-bold tracking-tight">
                    <a class="text-gray-900" :href="href">{{ title }}</a>
                  </h2>
                  <div v-if="excerpt" class="prose max-w-none text-gray-500" v-html="excerpt"></div>
                </div>
                <div class="text-base leading-6 font-medium">
                  <a class="link" aria-label="read more" :href="href">Read more →</a>
                </div>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
