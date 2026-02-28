<template>
  <router-link
    :to="`/post/${post.slug}`"
    class="group relative block rounded-2xl overflow-hidden aspect-video bg-[#1a1c26] cursor-pointer"
  >
    <!-- Cover image — fills entire card -->
    <img
      v-if="post.cover"
      :src="post.cover"
      :alt="post.title"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <!-- Fallback gradient -->
    <div
      v-else
      class="absolute inset-0 bg-linear-to-br from-[#5865f2]/30 to-[#eb459e]/20 flex items-center justify-center"
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 14.5,8.5 22,8.5 16,13 18.5,20 12,16 5.5,20 8,13 2,8.5 9.5,8.5" fill="white" opacity="0.2"/>
      </svg>
    </div>

    <!-- Bottom gradient overlay — reveals on hover -->
    <div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <!-- Title — slides up on hover -->
    <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
      <span
        class="text-[10px] font-bold tracking-widest uppercase mb-1.5 block"
        :style="{ color: catColor }"
      >{{ post.category }}</span>
      <h3 class="font-['Syne'] font-bold text-white text-sm leading-snug line-clamp-2">
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
  Announcements: '#a8b0ff',
  Engineering:   '#57f287',
  Design:        '#eb459e',
  Features:      '#fee75c',
  Community:     '#9b8ef8',
  General:       '#a8b0ff',
}

const catColor = categoryColors[props.post.category] ?? '#a8b0ff'
</script>