<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-[#0c0d11]/90 backdrop-blur-xl border-b border-white/6 py-3' : 'py-5'"
  >
    <div class="max-w-6xl mx-auto px-8 flex items-center gap-8">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 shrink-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <polygon points="12,2 14.5,8.5 22,8.5 16,13 18.5,20 12,16 5.5,20 8,13 2,8.5 9.5,8.5" fill="#5865f2"/>
          <circle cx="12" cy="12" r="2" fill="white" opacity="0.8"/>
        </svg>
        <span class="font-['Syne'] font-bold text-white text-base">Astroblox</span>
        <span class="text-white/20 text-sm">/</span>
        <span class="text-white/40 text-sm">Blog</span>
      </router-link>

      <div class="flex-1" />

      <!-- Search -->
      <div class="relative hidden md:block">
        <input
          v-model="search"
          type="text"
          placeholder="Search posts..."
          class="bg-white/4 border border-white/8 rounded-xl px-4 py-2 pl-9 text-sm text-white/80 placeholder:text-white/25 outline-none focus:border-[#5865f2]/50 w-48 transition-all"
          @input="$emit('search', search)"
        />
        <svg class="absolute left-3 top-2.5 text-white/25" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6" cy="6" r="4" stroke="currentColor" stroke-width="1.4"/>
          <line x1="9.5" y1="9.5" x2="13" y2="13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
        </svg>
      </div>

      <!-- CTA -->
      <a
        href="/"
        target="_blank"
        class="flex items-center gap-1.5 bg-[#5865f2] hover:bg-[#6772f5] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:-translate-y-px shadow-[0_0_20px_rgba(88,101,242,0.3)]"
      >
        Open Astroblox
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineEmits<{ search: [value: string] }>()

const scrolled = ref(false)
const search   = ref('')

function onScroll() { scrolled.value = window.scrollY > 40 }
onMounted(()   => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>