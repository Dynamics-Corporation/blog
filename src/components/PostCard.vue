<template>
  <router-link
    :to="`/post/${post.slug}`"
    class="group flex flex-col bg-[#13151c] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.14] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer"
    :class="featured ? 'md:flex-row' : ''"
  >
    <!-- Cover -->
    <div
      class="relative overflow-hidden shrink-0"
      :class="featured ? 'md:w-1/2 aspect-video md:aspect-auto' : 'aspect-video'"
    >
      <img
        v-if="post.cover"
        :src="post.cover"
        :alt="post.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div
        v-else
        class="w-full h-full bg-gradient-to-br from-[#5865f2]/20 to-[#eb459e]/20 flex items-center justify-center"
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <polygon points="18,3 21,12 31,12 23,18 26,28 18,22 10,28 13,18 5,12 15,12" fill="#5865f2" opacity="0.4"/>
        </svg>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#13151c]/70 to-transparent" />
      <span
        class="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border"
        :style="{ color: catColor, borderColor: catColor + '50', background: catColor + '18' }"
      >{{ post.category }}</span>
    </div>

    <!-- Body -->
    <div class="flex flex-col flex-1 p-5 gap-3">
      <div class="flex items-center gap-2 text-xs text-white/30">
        <span>{{ post.author }}</span>
        <span>·</span>
        <span>{{ post.date }}</span>
        <span>·</span>
        <span>{{ post.readTime }}</span>
      </div>

      <h2
        class="font-['Syne'] font-bold text-white/90 group-hover:text-white leading-snug tracking-tight transition-colors"
        :class="featured ? 'text-2xl' : 'text-lg'"
      >{{ post.title }}</h2>

      <p class="text-sm text-white/35 leading-relaxed line-clamp-3 flex-1">{{ post.excerpt }}</p>

      <span class="flex items-center gap-2 text-[#5865f2] text-sm font-semibold group-hover:gap-3 transition-all mt-auto">
        Read post
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Post } from '../composables/usePosts.js'

const props = defineProps<{
  post:     Post
  featured?: boolean
}>()

const categoryColors: Record<string, string> = {
  Announcements: '#5865f2',
  Engineering:   '#57f287',
  Design:        '#eb459e',
  Features:      '#fee75c',
  Community:     '#9b8ef8',
  General:       '#a8b0ff',
}

const catColor = categoryColors[props.post.category] ?? '#a8b0ff'
</script>