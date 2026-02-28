<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-4 transition-all duration-300" :class="scrolled ? 'pt-2' : 'pt-4'">
    <nav class="w-full max-w-4xl flex items-center gap-3 bg-[#0e0f16]/80 backdrop-blur-2xl border border-white/8 rounded-full px-4 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">

      <!-- Logo left -->
      <router-link to="/" class="flex items-center gap-2 shrink-0 pl-1">
        <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
          <path d="M 50 20 Q 70 20 70 35 Q 70 45 50 50 Q 30 55 30 65 Q 30 80 50 80 Q 70 80 70 70" 
                fill="none" 
                stroke="#ff3e00" 
                stroke-width="8" 
                stroke-linecap="round"/>
        </svg>
        <span class="font-bold text-white text-[15px] tracking-tight">Synoria</span>
        <span class="text-white/20 text-sm">/</span>
        <span class="text-white/35 text-sm">Blog</span>
      </router-link>

      <!-- Center links -->
      <div class="flex-1 flex items-center justify-center gap-1">
        <router-link to="/" class="text-[13px] font-medium text-white/40 hover:text-white/80 px-3 py-1.5 rounded-full hover:bg-white/6 transition-all">Latest</router-link>
        <a href="#" class="text-[13px] font-medium text-white/40 hover:text-white/80 px-3 py-1.5 rounded-full hover:bg-white/6 transition-all">Announcements</a>
        <a href="#" class="text-[13px] font-medium text-white/40 hover:text-white/80 px-3 py-1.5 rounded-full hover:bg-white/6 transition-all">Engineering</a>
        <a href="#" class="text-[13px] font-medium text-white/40 hover:text-white/80 px-3 py-1.5 rounded-full hover:bg-white/6 transition-all">Community</a>
      </div>

      <!-- Right: search + CTA -->
      <div class="flex items-center gap-2 shrink-0">
        <button
          @click="searchOpen = !searchOpen"
          class="w-8 h-8 flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/6 rounded-full transition-all"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" stroke-width="1.4"/>
            <line x1="10" y1="10" x2="14" y2="14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          </svg>
        </button>
        <a
          href="https://synoria.com"
          target="_blank"
          class="flex items-center gap-1.5 bg-linear-to-r from-[#ff3e00] to-[#ff6b35] hover:shadow-[0_0_20px_rgba(255,62,0,0.5)] text-white text-[13px] font-semibold px-4 py-1.5 rounded-full transition-all hover:-translate-y-px"
        >
          Open Synoria
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
        </a>
      </div>
    </nav>

    <!-- Search dropdown -->
    <div v-if="searchOpen" class="absolute top-16 w-full max-w-md bg-[#13151c] border border-white/8 rounded-2xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
      <input
        v-model="search"
        type="text"
        placeholder="Search posts..."
        autofocus
        class="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white/80 placeholder:text-white/25 outline-none focus:border-[#ff3e00]/50 transition-all"
        @input="$emit('search', search)"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineEmits<{ search: [value: string] }>()

const scrolled = ref(false)
const search = ref('')
const searchOpen = ref(false)

function onScroll() { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>