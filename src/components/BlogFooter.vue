<template>
  <footer class="relative mt-auto overflow-hidden bg-[#07080d] border-t border-white/6">

    <!-- Subtle radial glow top-center -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-50 rounded-full blur-[80px] pointer-events-none"
      style="background:radial-gradient(ellipse,rgba(255,62,0,0.07),transparent 70%)"
    />

    <!-- Grid texture overlay -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.025]"
      style="background-image:linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px);background-size:40px 40px"
    />

    <div class="relative max-w-5xl mx-auto px-6 pt-14 pb-8 flex flex-col gap-12">

      <!-- ── TOP: Brand + Links + Newsletter ── -->
      <div class="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-10 md:gap-12 items-start">

        <!-- Brand block -->
        <div class="flex flex-col gap-5 max-w-65">
          <!-- Logo -->
          <router-link to="/" class="group flex items-center gap-2.5 w-fit">
            <div class="relative w-7 h-7 flex items-center justify-center shrink-0">
              <svg width="28" height="28" viewBox="0 0 26 26" fill="none" class="absolute inset-0">
                <ellipse cx="13" cy="13" rx="11" ry="5.5"
                  stroke="url(#footerOrbit)" stroke-width="1.3"
                  transform="rotate(-30 13 13)"
                  class="opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <defs>
                  <linearGradient id="footerOrbit" x1="2" y1="2" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stop-color="#ff3e00"/>
                    <stop offset="100%" stop-color="#ff9d6c"/>
                  </linearGradient>
                </defs>
              </svg>
              <div class="w-1.75 h-1.75 rounded-full bg-linear-to-br from-[#ff3e00] to-[#ff7a45] shadow-[0_0_8px_rgba(255,62,0,0.8)]" />
            </div>
            <span class="font-bold text-white text-[15px] tracking-tight">Astroblox</span>
            <span class="text-white/20 text-sm">/</span>
            <span class="text-white/35 text-sm font-normal">Blog</span>
          </router-link>

          <p class="text-[13px] text-white/28 leading-[1.75]">
            Stories, engineering deep-dives, and updates from the team building Astroblox.
          </p>

          <!-- Status indicator -->
          <div class="flex items-center gap-2 bg-white/4 border border-white/[0.07] rounded-full px-3 py-1.5 w-fit">
            <span class="relative flex h-1.5 w-1.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-60" />
              <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4ade80]" />
            </span>
            <span class="text-[11px] font-medium text-[#4ade80] tracking-wide">All systems operational</span>
          </div>
        </div>

        <!-- Product links -->
        <div class="flex flex-col gap-3">
          <p class="text-[10px] font-bold text-white/20 uppercase tracking-[0.18em] mb-1">Product</p>
          <a href="https://astroblox.com" target="_blank"
            class="text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200 flex items-center gap-1.5 group/link">
            <span class="w-0 group-hover/link:w-1.5 h-px bg-[#ff3e00] transition-all duration-200 rounded-full" />
            Platform
          </a>
          <router-link to="/"
            class="text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200 flex items-center gap-1.5 group/link">
            <span class="w-0 group-hover/link:w-1.5 h-px bg-[#ff3e00] transition-all duration-200 rounded-full" />
            Blog
          </router-link>
          <a href="https://astroblox.com/download" target="_blank"
            class="text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200 flex items-center gap-1.5 group/link">
            <span class="w-0 group-hover/link:w-1.5 h-px bg-[#ff3e00] transition-all duration-200 rounded-full" />
            Download
          </a>
          <a href="https://astroblox.com/changelog" target="_blank"
            class="text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200 flex items-center gap-1.5 group/link">
            <span class="w-0 group-hover/link:w-1.5 h-px bg-[#ff3e00] transition-all duration-200 rounded-full" />
            Changelog
          </a>
        </div>

        <!-- Community links -->
        <div class="flex flex-col gap-3">
          <p class="text-[10px] font-bold text-white/20 uppercase tracking-[0.18em] mb-1">Community</p>
          <a href="https://github.com/BloxGlobe" target="_blank"
            class="text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200 flex items-center gap-1.5 group/link">
            <span class="w-0 group-hover/link:w-1.5 h-px bg-[#ff3e00] transition-all duration-200 rounded-full" />
            GitHub
          </a>
          <a href="#"
            class="text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200 flex items-center gap-1.5 group/link">
            <span class="w-0 group-hover/link:w-1.5 h-px bg-[#ff3e00] transition-all duration-200 rounded-full" />
            Discord
          </a>
          <a href="#"
            class="text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200 flex items-center gap-1.5 group/link">
            <span class="w-0 group-hover/link:w-1.5 h-px bg-[#ff3e00] transition-all duration-200 rounded-full" />
            Twitter / X
          </a>
          <a href="#"
            class="text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200 flex items-center gap-1.5 group/link">
            <span class="w-0 group-hover/link:w-1.5 h-px bg-[#ff3e00] transition-all duration-200 rounded-full" />
            Privacy
          </a>
          <a href="#"
            class="text-[13px] text-white/35 hover:text-white/80 transition-colors duration-200 flex items-center gap-1.5 group/link">
            <span class="w-0 group-hover/link:w-1.5 h-px bg-[#ff3e00] transition-all duration-200 rounded-full" />
            Terms
          </a>
        </div>

        <!-- Newsletter -->
        <div class="flex flex-col gap-3 max-w-50">
          <p class="text-[10px] font-bold text-white/20 uppercase tracking-[0.18em] mb-1">Stay in the loop</p>
          <p class="text-[12px] text-white/25 leading-relaxed">Get new posts delivered straight to your inbox.</p>
          <div class="flex flex-col gap-2 mt-1">
            <input
              v-model="email"
              type="email"
              placeholder="your@email.com"
              class="w-full bg-white/5 border border-white/8 rounded-lg px-3 py-2 text-[12px] text-white/70 placeholder:text-white/20 outline-none focus:border-[#ff3e00]/50 transition-colors duration-200"
            />
            <button
              @click="subscribe"
              class="w-full bg-linear-to-r from-[#ff3e00] to-[#ff6b35] hover:shadow-[0_0_16px_rgba(255,62,0,0.4)] text-white text-[12px] font-semibold py-2 rounded-lg transition-all duration-200 hover:-translate-y-px"
            >
              {{ subscribed ? '✓ Subscribed!' : 'Subscribe' }}
            </button>
          </div>
        </div>

      </div>

      <!-- ── DIVIDER ── -->
      <div class="h-px w-full"
        style="background:linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 30%,rgba(255,255,255,0.07) 70%,transparent)"
      />

      <!-- ── BOTTOM BAR ── -->
      <div class="flex items-center justify-between flex-wrap gap-4">

        <div class="flex items-center gap-3">
          <span class="text-[11px] text-white/18">© {{ year }} Astroblox. All rights reserved.</span>
        </div>

        <!-- Social icon row -->
        <div class="flex items-center gap-2">
          <!-- GitHub -->
          <a href="https://github.com/BloxGlobe" target="_blank"
            class="w-7 h-7 flex items-center justify-center rounded-full border border-white/[0.07] bg-white/3 text-white/25 hover:text-white/70 hover:border-white/20 transition-all duration-200">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <!-- Discord -->
          <a href="#"
            class="w-7 h-7 flex items-center justify-center rounded-full border border-white/[0.07] bg-white/3 text-white/25 hover:text-white/70 hover:border-white/20 transition-all duration-200">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/>
            </svg>
          </a>
          <!-- Twitter/X -->
          <a href="#"
            class="w-7 h-7 flex items-center justify-center rounded-full border border-white/[0.07] bg-white/3 text-white/25 hover:text-white/70 hover:border-white/20 transition-all duration-200">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
            </svg>
          </a>
        </div>

        <span class="text-[11px] text-white/15 flex items-center gap-1.5">
          Made with
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M6 10.5S1.5 7.5 1.5 4.5a2.5 2.5 0 014.5-1.5A2.5 2.5 0 0110.5 4.5C10.5 7.5 6 10.5 6 10.5Z" fill="#ff3e00" opacity="0.8"/>
          </svg>
          for the community
        </span>

      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const year = new Date().getFullYear()
const email = ref('')
const subscribed = ref(false)

function subscribe() {
  if (!email.value || !email.value.includes('@')) return
  subscribed.value = true
  email.value = ''
  setTimeout(() => subscribed.value = false, 3000)
}
</script>