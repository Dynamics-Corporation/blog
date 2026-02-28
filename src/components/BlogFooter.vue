<template>
  <footer class="border-t border-white/6 mt-auto py-10 bg-[#0a0a0a]">
    <div class="max-w-5xl mx-auto px-6 flex flex-col gap-8">

      <!-- Top row -->
      <div class="flex items-start justify-between flex-wrap gap-10">

        <!-- Brand -->
        <div class="flex flex-col gap-4 max-w-xs">
          <router-link to="/" class="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
              <path d="M 50 20 Q 70 20 70 35 Q 70 45 50 50 Q 30 55 30 65 Q 30 80 50 80 Q 70 80 70 70" 
                    fill="none" 
                    stroke="#ff3e00" 
                    stroke-width="8" 
                    stroke-linecap="round"/>
            </svg>
            <span class="font-bold text-white text-base">Synoria Blog</span>
          </router-link>
          <p class="text-sm text-white/30 leading-relaxed">
            Stories, updates, and insights from the team building the future of communication.
          </p>
          <div class="flex items-center gap-2 text-xs text-[#57f287]">
            <span class="w-1.5 h-1.5 rounded-full bg-[#57f287] shadow-[0_0_8px_#57f287] animate-pulse" />
            All systems operational
          </div>
        </div>

        <!-- Links -->
        <div class="flex gap-16 flex-wrap">
          <div class="flex flex-col gap-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-widest mb-1">Product</h4>
            <a href="https://synoria.com" target="_blank" class="text-sm text-white/30 hover:text-white/70 transition-colors">Platform</a>
            <router-link to="/" class="text-sm text-white/30 hover:text-white/70 transition-colors">Blog</router-link>
            <a href="https://synoria.com/download" target="_blank" class="text-sm text-white/30 hover:text-white/70 transition-colors">Download</a>
          </div>
          <div class="flex flex-col gap-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-widest mb-1">Community</h4>
            <a href="https://github.com/BloxGlobe" target="_blank" class="text-sm text-white/30 hover:text-white/70 transition-colors">GitHub</a>
            <a href="#" class="text-sm text-white/30 hover:text-white/70 transition-colors">Discord</a>
            <a href="#" class="text-sm text-white/30 hover:text-white/70 transition-colors">Twitter</a>
          </div>
          <div class="flex flex-col gap-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-widest mb-1">Legal</h4>
            <a href="#" class="text-sm text-white/30 hover:text-white/70 transition-colors">Privacy</a>
            <a href="#" class="text-sm text-white/30 hover:text-white/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>

      <!-- Bottom row -->
      <div class="pt-6 border-t border-white/6 flex items-center justify-between flex-wrap gap-4">
        <span class="text-xs text-white/20">© {{ year }} Synoria. All rights reserved.</span>
        <span class="text-xs text-white/20 flex items-center gap-1.5">
          Made with
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 10.5S1.5 7.5 1.5 4.5a2.5 2.5 0 014.5-1.5A2.5 2.5 0 0110.5 4.5C10.5 7.5 6 10.5 6 10.5Z" fill="#ff3e00"/>
          </svg>
          for the community
        </span>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>