<template>
  <router-link
    :to="`/post/${post.slug}`"
    class="group relative flex flex-col bg-[#0f1018] border border-white/[0.07] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/15 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
  >

    <!-- ── THUMB ── -->
    <div class="relative w-full aspect-video overflow-hidden bg-[#13151f] shrink-0">

      <!-- Cover image -->
      <img
        v-if="post.cover"
        :src="post.cover"
        :alt="post.title"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
      />

      <!-- Fallback gradient (unique per category) -->
      <div
        v-else
        class="absolute inset-0 transition-opacity duration-300"
        :style="{ background: catGradient }"
      >
        <!-- Subtle noise texture -->
        <div class="absolute inset-0 opacity-20"
          style="background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E');background-size:160px"
        />
        <!-- Floating orb -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-2xl opacity-60 transition-all duration-500 group-hover:scale-150 group-hover:opacity-40"
          :style="{ background: catAccent }"
        />
        <!-- Orbit ring SVG -->
        <svg class="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" viewBox="0 0 160 90" fill="none">
          <ellipse cx="80" cy="45" rx="50" ry="22" stroke="white" stroke-width="0.6" transform="rotate(-20 80 45)"/>
          <circle cx="80" cy="45" r="3" fill="white" opacity="0.5"/>
        </svg>
      </div>

      <!-- Gradient fade into card body -->
      <div class="absolute bottom-0 left-0 right-0 h-14 bg-linear-to-t from-[#0f1018] to-transparent" />

      <!-- Category badge -->
      <div class="absolute top-3 left-3">
        <span
          class="inline-flex items-center gap-1 text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full border"
          :style="{ color: catColor, borderColor: `${catColor}30`, background: `${catColor}12` }"
        >
          <span class="w-1 h-1 rounded-full" :style="{ background: catColor }" />
          {{ post.category }}
        </span>
      </div>

      <!-- Read time badge -->
      <div class="absolute top-3 right-3">
        <span class="text-[10px] text-white/40 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full border border-white/8">
          {{ post.readTime }}
        </span>
      </div>
    </div>

    <!-- ── BODY ── -->
    <div class="flex flex-col flex-1 gap-3 p-4 pt-3">

      <!-- Title -->
      <h3 class="font-bold text-white/88 text-[14px] leading-snug tracking-[-0.01em] line-clamp-2 group-hover:text-white transition-colors duration-200">
        {{ post.title }}
      </h3>

      <!-- Excerpt -->
      <p class="text-[12px] text-white/30 leading-relaxed line-clamp-2 flex-1">
        {{ post.excerpt }}
      </p>

      <!-- ── FOOTER ROW ── -->
      <div class="flex items-center justify-between pt-2 mt-auto border-t border-white/6">
        <!-- Author + date -->
        <div class="flex items-center gap-2">
          <!-- Avatar placeholder -->
          <div class="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-black shrink-0"
            :style="{ background: catAccent }">
            {{ post.author?.charAt(0).toUpperCase() ?? 'A' }}
          </div>
          <div class="flex items-center gap-1.5 text-[11px] text-white/25">
            <span class="text-white/40 font-medium">{{ post.author }}</span>
            <span class="opacity-40">·</span>
            <span>{{ post.date }}</span>
          </div>
        </div>

        <!-- Arrow CTA -->
        <div class="flex items-center gap-1 text-[11px] font-semibold transition-all duration-200 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0"
          :style="{ color: catColor }">
          Read
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none" class="transition-transform duration-200 group-hover:translate-x-0.5">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

    </div>

    <!-- Hover accent line at bottom -->
    <div
      class="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"
      :style="{ background: `linear-gradient(90deg, ${catColor}, transparent)` }"
    />

  </router-link>
</template>

<script setup lang="ts">
import type { Post } from '../composables/usePosts.js'

const props = defineProps<{ post: Post }>()

interface CatTheme { color: string; gradient: string; accent: string }

const categoryThemes: Record<string, CatTheme> = {
  Announcements: {
    color:    '#ff6b35',
    gradient: 'linear-gradient(135deg,#1a0c00 0%,#2d1200 50%,#1a0800 100%)',
    accent:   '#ff6b35',
  },
  Engineering: {
    color:    '#4ade80',
    gradient: 'linear-gradient(135deg,#001a0a 0%,#002d12 50%,#001508 100%)',
    accent:   '#4ade80',
  },
  Design: {
    color:    '#ff3e00',
    gradient: 'linear-gradient(135deg,#1a0500 0%,#2d0a00 50%,#150300 100%)',
    accent:   '#ff3e00',
  },
  Features: {
    color:    '#fbbf24',
    gradient: 'linear-gradient(135deg,#1a1400 0%,#2d2200 50%,#150f00 100%)',
    accent:   '#fbbf24',
  },
  Community: {
    color:    '#a78bfa',
    gradient: 'linear-gradient(135deg,#0d0a1a 0%,#180f2d 50%,#0a0815 100%)',
    accent:   '#a78bfa',
  },
  General: {
    color:    '#ff3e00',
    gradient: 'linear-gradient(135deg,#0f1018 0%,#181a28 100%)',
    accent:   '#ff3e00',
  },
}

const FALLBACK: CatTheme = {
  color:    '#ff3e00',
  gradient: 'linear-gradient(135deg,#0f1018 0%,#181a28 100%)',
  accent:   '#ff3e00',
}

const theme: CatTheme    = categoryThemes[props.post.category] ?? FALLBACK
const catColor    = theme.color
const catGradient = theme.gradient
const catAccent   = theme.accent
</script>