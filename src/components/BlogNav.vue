<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 flex justify-center px-5 transition-all duration-500"
    :class="scrolled ? 'pt-3' : 'pt-5'"
  >
    <nav
      class="w-full max-w-3xl flex items-center gap-3 rounded-full px-3 py-2 transition-all duration-500"
      :class="[
        'bg-[#0b0c12]/85 backdrop-blur-2xl border shadow-[0_8px_48px_rgba(0,0,0,0.55)]',
        scrolled ? 'border-white/10' : 'border-white/6'
      ]"
    >

      <!-- ── LEFT: Logo ── -->
      <router-link
        to="/"
        class="flex items-center gap-2 shrink-0 pl-1 group"
        @click="dropdownOpen = false"
      >
        <!-- Astroblox mark: orbit ring + core dot -->
        <div class="relative w-6.5 h-6.5ex items-center justify-center shrink-0">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" class="absolute inset-0">
            <ellipse cx="13" cy="13" rx="11" ry="5.5"
              stroke="url(#orbitGrad)" stroke-width="1.4"
              transform="rotate(-30 13 13)"
              class="transition-all duration-300 group-hover:opacity-100 opacity-70"
            />
            <defs>
              <linearGradient id="orbitGrad" x1="2" y1="2" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#ff3e00"/>
                <stop offset="100%" stop-color="#ff9d6c"/>
              </linearGradient>
            </defs>
          </svg>
          <div class="w-1.75 h-1.75 rounded-full bg-linear-to-br from-[#ff3e00] to-[#ff7a45] shadow-[0_0_8px_rgba(255,62,0,0.8)]"/>
        </div>

        <div class="flex items-baseline gap-1 leading-none">
          <span class="font-bold text-white text-[15px] tracking-tight">Astroblox</span>
          <span class="text-white/20 text-xs">/</span>
          <span class="text-white/35 text-[13px] font-normal">Blog</span>
        </div>
      </router-link>

      <!-- ── CENTER: Search bar ── -->
      <div class="flex-1 min-w-0 relative">
        <div
          class="flex items-center gap-2 rounded-full border transition-all duration-300 px-3 cursor-text"
          :class="searchFocused
            ? 'bg-white/7 border-[#ff3e00]/40 shadow-[0_0_16px_rgba(255,62,0,0.12)]'
            : 'bg-white/4 border-white/7 hover:bg-white/6 hover:border-white/12'"
          @click="focusSearch"
        >
          <!-- search icon -->
          <svg width="13" height="13" viewBox="0 0 15 15" fill="none" class="shrink-0 transition-colors duration-200" :class="searchFocused ? 'text-[#ff6b35]' : 'text-white/25'">
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" stroke-width="1.5"/>
            <line x1="10" y1="10" x2="14" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>

          <input
            ref="searchInput"
            v-model="search"
            type="text"
            placeholder="Search posts…"
            class="w-full bg-transparent text-[13px] text-white/75 placeholder:text-white/22 outline-none py-1.5 font-normal"
            @focus="searchFocused = true"
            @blur="onSearchBlur"
            @input="$emit('search', search)"
            @keydown.escape="clearSearch"
          />

          <!-- clear -->
          <button
            v-if="search"
            @click.stop="clearSearch"
            class="shrink-0 w-4 h-4 flex items-center justify-center rounded-full bg-white/10 text-white/40 hover:text-white/70 hover:bg-white/18 transition-all text-[10px]"
          >✕</button>

          <!-- kbd hint -->
          <span v-if="!searchFocused && !search" class="shrink-0 text-[10px] text-white/15 font-mono hidden sm:block">⌘K</span>
        </div>

        <!-- Search results dropdown -->
        <Transition name="dropdown">
          <div
            v-if="searchFocused && search"
            class="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#10121a]/95 backdrop-blur-xl border border-white/8 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          >
            <div class="px-3 py-2 text-[11px] text-white/25 font-mono uppercase tracking-widest border-b border-white/5">Results</div>
            <div v-if="searchResults.length === 0" class="px-4 py-5 text-[13px] text-white/30 text-center">No posts found for "{{ search }}"</div>
            <div
              v-for="result in searchResults"
              :key="result.id"
              class="flex items-center gap-3 px-4 py-3 hover:bg-white/4 cursor-pointer transition-colors border-b border-white/4 last:border-0"
              @mousedown.prevent="selectResult(result)"
            >
              <div class="w-1.5 h-1.5 rounded-full bg-[#ff3e00] shrink-0 mt-px"/>
              <div>
                <div class="text-[13px] text-white/80 font-medium leading-snug">{{ result.title }}</div>
                <div class="text-[11px] text-white/30 mt-0.5">{{ result.category }}</div>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- ── RIGHT: Modes + Nav dropdown ── -->
      <div class="flex items-center gap-1.5 shrink-0">

        <!-- Mode toggle pill -->
        <div class="flex items-center gap-0.5 bg-white/4 border border-white/7 rounded-full p-0.5">
          <button
            v-for="mode in modes"
            :key="mode.key"
            @click="activeMode = mode.key"
            :title="mode.label"
            class="w-7 h-7 flex items-center justify-center rounded-full text-[13px] transition-all duration-200"
            :class="activeMode === mode.key
              ? 'bg-linear-to-br from-[#ff3e00] to-[#ff6b35] text-white shadow-[0_0_10px_rgba(255,62,0,0.4)]'
              : 'text-white/30 hover:text-white/60'"
          >{{ mode.icon }}</button>
        </div>

        <!-- Nav dropdown trigger -->
        <div class="relative">
          <button
            @click="dropdownOpen = !dropdownOpen"
            class="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[13px] font-medium transition-all duration-200"
            :class="dropdownOpen
              ? 'bg-white/8 border-white/15 text-white'
              : 'bg-white/4 border-white/7 text-white/45 hover:text-white/75 hover:bg-white/6 hover:border-white/12'"
          >
            <span>Menu</span>
            <svg
              width="10" height="10" viewBox="0 0 10 10" fill="none"
              class="transition-transform duration-300"
              :class="dropdownOpen ? 'rotate-180' : ''"
            >
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- Dropdown panel -->
          <Transition name="dropdown">
            <div
              v-if="dropdownOpen"
              v-click-outside="() => dropdownOpen = false"
              class="absolute top-[calc(100%+10px)] right-0 w-55 bg-[#0f1018]/95 backdrop-blur-xl border border-white/8 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.65)]"
            >
              <!-- section label -->
              <div class="px-4 pt-3 pb-1.5 text-[10px] text-white/20 font-mono uppercase tracking-widest">Navigate</div>

              <router-link
                v-for="item in navItems"
                :key="item.to"
                :to="item.to"
                @click="dropdownOpen = false"
                class="flex items-center gap-3 px-4 py-2.5 text-[13px] text-white/45 hover:text-white/85 hover:bg-white/5 transition-all group"
                active-class="text-white/90 bg-white/4"
              >
                <span class="text-[15px] w-5 text-center group-hover:scale-110 transition-transform">{{ item.icon }}</span>
                <span class="font-medium">{{ item.label }}</span>
                <span v-if="item.badge" class="ml-auto text-[10px] font-mono bg-[#ff3e00]/15 text-[#ff6b35] border border-[#ff3e00]/20 rounded-full px-1.5 py-0.5">{{ item.badge }}</span>
              </router-link>

              <div class="mx-4 my-2 border-t border-white/6"/>

              <!-- CTA inside dropdown -->
              <div class="px-3 pb-3">
                <a
                  href=""
                  target="_blank"
                  class="flex items-center justify-between gap-2 w-full bg-linear-to-r from-[#ff3e00] to-[#ff6b35] hover:shadow-[0_0_20px_rgba(255,62,0,0.4)] text-white text-[13px] font-semibold px-4 py-2 rounded-xl transition-all hover:-translate-y-px"
                  @click="dropdownOpen = false"
                >
                  <span>Open Astroblox</span>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </Transition>
        </div>
      </div>

    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// ─ Emits
const emit = defineEmits<{
  search: [value: string]
  modeChange: [mode: string]
  resultSelect: [result: NavSearchResult]
}>()

// ─ Props
interface NavSearchResult {
  id: string | number
  title: string
  category?: string
}

interface Props {
  searchResults?: NavSearchResult[]
}

const props = withDefaults(defineProps<Props>(), {
  searchResults: () => [],
})

// State 
const scrolled    = ref(false)
const search      = ref('')
const searchFocused = ref(false)
const searchInput = ref<HTMLInputElement | null>(null)
const dropdownOpen = ref(false)
const activeMode  = ref<string>('dark')

// ─ Config 
const modes = [
  { key: 'dark',  icon: '◑', label: 'Dark'  },
  { key: 'light', icon: '◐', label: 'Light' },
]

const navItems = [
  { to: '/',               icon: '◈', label: 'Latest',        badge: null   },
  { to: '/announcements',  icon: '⬡', label: 'Announcements', badge: 'New'  },
  { to: '/updates',    icon: '⚙', label: 'Updates',   badge: null   },
  { to: '/community',      icon: '◉', label: 'Community',     badge: null   },
]

// - Method
function focusSearch() {
  searchInput.value?.focus()
}

function clearSearch() {
  search.value = ''
  searchFocused.value = false
  searchInput.value?.blur()
  emit('search', '')
}

function onSearchBlur() {
  // small delay so mousedown on result fires first
  setTimeout(() => { searchFocused.value = false }, 150)
}

function selectResult(result: NavSearchResult) {
  search.value = result.title
  searchFocused.value = false
  emit('resultSelect', result)
}

// keyboard shortcut ⌘K / Ctrl+K
function onKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    focusSearch()
  }
  if (e.key === 'Escape') {
    dropdownOpen.value = false
    clearSearch()
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 40
}

// click-outside directive (inline)
const vClickOutside = {
  mounted(el: HTMLElement, binding: { value: () => void }) {
    (el as any)._clickOutside = (e: Event) => {
      if (!el.contains(e.target as Node)) binding.value()
    }
    document.addEventListener('pointerdown', (el as any)._clickOutside)
  },
  unmounted(el: HTMLElement) {
    document.removeEventListener('pointerdown', (el as any)._clickOutside)
  },
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
/* Dropdown enter/leave */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}
</style>