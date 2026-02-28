<template>
  <router-link
    :to="`/post/${post.slug}`"
    class="group relative block rounded-2xl overflow-hidden aspect-video bg-[#1a1c26] cursor-pointer"
  >
    <!-- Cover image -->
    <img
      v-if="post.cover"
      :src="post.cover"
      :alt="post.title"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <!-- Fallback gradient -->
    <div
      v-else
      class="absolute inset-0 bg-linear-to-br from-[#ff3e00]/30 to-[#ff6b35]/20 flex items-center justify-center"
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="white" opacity="0.2"/>
      </svg>
    </div>

    <!-- Bottom gradient overlay -->
    <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <!-- Title -->
    <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
      <span
        class="text-[10px] font-bold tracking-widest uppercase mb-1.5 block"
        :style="{ color: catColor }"
      >{{ post.category }}</span>
      <h3 class="font-bold text-white text-sm leading-snug line-clamp-2">
        {{ post.title }}
      </h3>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Post } from '../composables/usePosts.js'

const props = defineProps<{
  post: Post
}>()

const categoryColors: Record<string, string> = {
  Announcements: '#ff6b35',
  Engineering:   '#57f287',
  Design:        '#ff3e00',
  Features:      '#fee75c',
  Community:     '#a8b0ff',
  General:       '#ff3e00',
}

const catColor = categoryColors[props.post.category] ?? '#ff3e00'
</script>