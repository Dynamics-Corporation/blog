<template>
  <!-- Floating pill navbar centered on page -->
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-4 transition-all duration-300" :class="scrolled ? 'pt-2' : 'pt-4'">
    <nav class="w-full max-w-4xl flex items-center gap-3 bg-[#0e0f16]/80 backdrop-blur-2xl border border-white/8 rounded-full px-4 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.5)]">

      <!-- Logo left -->
      <router-link to="/" class="flex items-center gap-2 shrink-0 pl-1">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <polygon points="12,2 14.5,8.5 22,8.5 16,13 18.5,20 12,16 5.5,20 8,13 2,8.5 9.5,8.5" fill="#5865f2"/>
          <circle cx="12" cy="12" r="2" fill="white" opacity="0.8"/>
        </svg>
        <span class="font-['Syne'] font-bold text-white text-[15px] tracking-tight">Astroblox</span>
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
          href="https://astroblox.com"
          target="_blank"
          class="flex items-center gap-1.5 bg-[#5865f2] hover:bg-[#6772f5] text-white text-[13px] font-semibold px-4 py-1.5 rounded-full transition-all hover:-translate-y-px shadow-[0_0_16px_rgba(88,101,242,0.4)]"
        >
          Open Astroblox
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
        class="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-2.5 text-sm text-white/80 placeholder:text-white/25 outline-none focus:border-[#5865f2]/50 transition-all"
        @input="$emit('search', search)"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineEmits<{ search: [value: string] }>()

const scrolled    = ref(false)
const search      = ref('')
const searchOpen  = ref(false)

function onScroll() { scrolled.value = window.scrollY > 40 }
onMounted(()   => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>