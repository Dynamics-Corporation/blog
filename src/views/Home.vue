<template>
  <div class="min-h-screen bg-[#08090e]">

    <!-- hero cinematic meteor -->
    <section class="relative h-svh min-h-145 max-h-215 overflow-hidden flex items-center justify-center">

      <!-- Space background -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#13091a,transparent_70%),radial-gradient(ellipse_60%_40%_at_20%_100%,#0e0505,transparent_60%),linear-gradient(180deg,#04050c_0%,#07080f_40%,#0a0507_100%)]" />

      <!-- Stars layer 1 -->
      <div class="absolute inset-0"
        style="background-image:radial-gradient(1px 1px at 10% 15%,rgba(255,255,255,.7),transparent),radial-gradient(1px 1px at 25% 8%,rgba(255,255,255,.5),transparent),radial-gradient(1.5px 1.5px at 40% 22%,rgba(255,255,255,.8),transparent),radial-gradient(1px 1px at 60% 5%,rgba(255,255,255,.6),transparent),radial-gradient(1px 1px at 75% 18%,rgba(255,255,255,.4),transparent),radial-gradient(1.5px 1.5px at 88% 10%,rgba(255,255,255,.7),transparent),radial-gradient(1px 1px at 95% 30%,rgba(255,255,255,.5),transparent),radial-gradient(1px 1px at 5% 40%,rgba(255,255,255,.6),transparent),radial-gradient(1px 1px at 30% 48%,rgba(255,255,255,.8),transparent),radial-gradient(1px 1px at 70% 42%,rgba(255,255,255,.6),transparent),radial-gradient(1px 1px at 82% 38%,rgba(255,255,255,.3),transparent)"
      />
      <!-- Stars layer 2 -->
      <div class="absolute inset-0 opacity-70"
        style="background-image:radial-gradient(1px 1px at 12% 70%,rgba(255,255,255,.5),transparent),radial-gradient(1px 1px at 33% 80%,rgba(255,255,255,.4),transparent),radial-gradient(1.5px 1.5px at 55% 65%,rgba(255,255,255,.7),transparent),radial-gradient(1px 1px at 78% 72%,rgba(255,255,255,.4),transparent),radial-gradient(1px 1px at 45% 85%,rgba(255,255,255,.3),transparent)"
      />
      <!-- Stars layer 3 — twinkling -->
      <div class="absolute inset-0 opacity-40 anim-twinkle"
        style="background-image:radial-gradient(1.5px 1.5px at 20% 25%,rgba(180,200,255,.8),transparent),radial-gradient(1px 1px at 65% 15%,rgba(200,180,255,.6),transparent),radial-gradient(2px 2px at 50% 60%,rgba(255,220,180,.5),transparent)"
      />

      <!-- Nebula 1 -->
      <div class="absolute rounded-full blur-[60px] w-125 h-75 -top-20 -left-24 anim-nebula"
        style="background:radial-gradient(ellipse,rgba(80,0,120,.18),transparent 70%)"
      />
      <!-- Nebula 2 -->
      <div class="absolute rounded-full blur-[60px] w-100 h-62.5 bottom-0 -right-20 anim-nebula2"
        style="background:radial-gradient(ellipse,rgba(180,40,0,.12),transparent 70%)"
      />

      <!-- SVG Meteor Scene -->
      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="meteorCore" cx="70%" cy="30%" r="60%">
            <stop offset="0%"   stop-color="#fff8e0"/>
            <stop offset="30%"  stop-color="#ffb347"/>
            <stop offset="70%"  stop-color="#ff5500"/>
            <stop offset="100%" stop-color="#c02000" stop-opacity=".6"/>
          </radialGradient>
          <linearGradient id="tailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#ff6a00" stop-opacity="0"/>
            <stop offset="40%"  stop-color="#ff9500" stop-opacity=".35"/>
            <stop offset="75%"  stop-color="#ffcc00" stop-opacity=".65"/>
            <stop offset="100%" stop-color="#fff5c0" stop-opacity=".9"/>
          </linearGradient>
          <radialGradient id="plasmaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stop-color="#ff8800" stop-opacity=".9"/>
            <stop offset="50%"  stop-color="#ff4400" stop-opacity=".4"/>
            <stop offset="100%" stop-color="#ff2200" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="craterGrad" cx="50%" cy="30%" r="50%">
            <stop offset="0%"   stop-color="#ff6600" stop-opacity=".9"/>
            <stop offset="30%"  stop-color="#cc3300" stop-opacity=".7"/>
            <stop offset="70%"  stop-color="#440000" stop-opacity=".5"/>
            <stop offset="100%" stop-color="#000"    stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="groundGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stop-color="#ff6600" stop-opacity=".8"/>
            <stop offset="100%" stop-color="#ff2200" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="dustGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stop-color="#cc5500" stop-opacity=".6"/>
            <stop offset="100%" stop-color="#331100" stop-opacity="0"/>
          </radialGradient>
          <filter id="blur2"><feGaussianBlur stdDeviation="2"/></filter>
          <filter id="blur4"><feGaussianBlur stdDeviation="4"/></filter>
          <filter id="blur8"><feGaussianBlur stdDeviation="8"/></filter>
          <filter id="blur16"><feGaussianBlur stdDeviation="16"/></filter>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <ellipse cx="600" cy="490" rx="700" ry="80" fill="#0a0b0f"/>
        <line x1="0" y1="460" x2="1200" y2="460" stroke="#1a1c26" stroke-width="1"/>

        <!-- Trail -->
        <g class="anim-trail-group">
          <path class="anim-trail-wide" d="M 180 -20 L 615 390" stroke="url(#tailGrad)" stroke-width="28" stroke-linecap="round" fill="none" filter="url(#blur8)"/>
          <path class="anim-trail-mid"  d="M 200 -10 L 615 390" stroke="url(#tailGrad)" stroke-width="12" stroke-linecap="round" fill="none" filter="url(#blur4)"/>
          <path class="anim-trail-core" d="M 215   0 L 615 390" stroke="#fff8d0" stroke-width="2.5" stroke-linecap="round" fill="none" opacity=".9"/>
          <path class="anim-trail-f1"   d="M 225  20 L 640 370" stroke="#ff9944" stroke-width="1.5" stroke-linecap="round" fill="none" opacity=".5" filter="url(#blur2)"/>
          <path class="anim-trail-f2"   d="M 195  10 L 595 400" stroke="#ff7722" stroke-width="1"   stroke-linecap="round" fill="none" opacity=".35" filter="url(#blur2)"/>
        </g>

        <!-- Meteor body -->
        <g class="anim-meteor-body">
          <ellipse cx="615" cy="388" rx="55" ry="45" fill="url(#plasmaGlow)" filter="url(#blur16)"/>
          <ellipse cx="615" cy="390" rx="30" ry="26" fill="url(#plasmaGlow)" filter="url(#blur8)"/>
          <path d="M 600 360 Q 640 365 645 390 Q 645 415 615 420 Q 585 420 580 395 Q 575 365 600 360 Z" fill="url(#meteorCore)" filter="url(#glow)"/>
          <ellipse cx="618" cy="388" rx="12" ry="10" fill="#fff8e8" opacity=".95"/>
          <circle class="anim-sa" cx="650" cy="370" r="3.5" fill="#ffaa44" opacity=".8"/>
          <circle class="anim-sb" cx="660" cy="380" r="2"   fill="#ff8800" opacity=".7"/>
          <circle class="anim-sc" cx="570" cy="375" r="2.5" fill="#ffcc66" opacity=".6"/>
          <circle class="anim-sd" cx="580" cy="360" r="1.5" fill="#ffaa00" opacity=".5"/>
          <circle class="anim-se" cx="635" cy="355" r="2"   fill="#ff9900" opacity=".65"/>
        </g>

        <!-- Impact -->
        <g class="anim-impact">
          <ellipse class="anim-gflash"    cx="612" cy="460" rx="260" ry="70"  fill="url(#groundGlow)" filter="url(#blur8)"/>
          <ellipse class="anim-crater-bowl" cx="612" cy="462" rx="90" ry="22" fill="url(#craterGrad)"/>
          <ellipse class="anim-crater-in"   cx="612" cy="460" rx="55" ry="13" fill="#ff4400" opacity=".5"/>
          <ellipse class="anim-crater-hot"  cx="612" cy="458" rx="28" ry="7"  fill="#ff8800" opacity=".7"/>
          <ellipse class="anim-crater-core" cx="612" cy="457" rx="10" ry="3"  fill="#ffee88" opacity=".9"/>
          <ellipse class="anim-sw1" cx="612" cy="460" rx="10" ry="4" fill="none" stroke="#ff6600" stroke-width="3"/>
          <ellipse class="anim-sw2" cx="612" cy="460" rx="10" ry="4" fill="none" stroke="#ff9900" stroke-width="2" opacity=".7"/>
          <ellipse class="anim-sw3" cx="612" cy="460" rx="10" ry="4" fill="none" stroke="#ffcc00" stroke-width="1.5" opacity=".5"/>
          <line class="anim-ej" x1="612" y1="460" x2="510" y2="410" stroke="#ff7700" stroke-width="2"   stroke-linecap="round"/>
          <line class="anim-ej" x1="612" y1="460" x2="490" y2="445" stroke="#ff9900" stroke-width="1.5" stroke-linecap="round"/>
          <line class="anim-ej" x1="612" y1="460" x2="520" y2="390" stroke="#ff5500" stroke-width="1.5" stroke-linecap="round"/>
          <line class="anim-ej" x1="612" y1="460" x2="714" y2="410" stroke="#ff7700" stroke-width="2"   stroke-linecap="round"/>
          <line class="anim-ej" x1="612" y1="460" x2="730" y2="445" stroke="#ff9900" stroke-width="1.5" stroke-linecap="round"/>
          <line class="anim-ej" x1="612" y1="460" x2="700" y2="390" stroke="#ff5500" stroke-width="1.5" stroke-linecap="round"/>
          <line class="anim-ej" x1="612" y1="460" x2="612" y2="370" stroke="#ffaa00" stroke-width="2"   stroke-linecap="round"/>
          <line class="anim-ej" x1="612" y1="460" x2="560" y2="380" stroke="#ff6600" stroke-width="1"   stroke-linecap="round"/>
          <line class="anim-ej" x1="612" y1="460" x2="665" y2="375" stroke="#ff6600" stroke-width="1"   stroke-linecap="round"/>
          <circle class="anim-da" cx="612" cy="460" r="4"   fill="#ff8800"/>
          <circle class="anim-db" cx="612" cy="460" r="3"   fill="#ffcc44"/>
          <circle class="anim-dc" cx="612" cy="460" r="2.5" fill="#ff5500"/>
          <circle class="anim-dd" cx="612" cy="460" r="2"   fill="#ffaa00"/>
          <circle class="anim-de" cx="612" cy="460" r="3.5" fill="#ff7700"/>
          <circle class="anim-df" cx="612" cy="460" r="2"   fill="#ffdd88"/>
          <circle class="anim-dg" cx="612" cy="460" r="3"   fill="#ff4400"/>
          <circle class="anim-dh" cx="612" cy="460" r="2.5" fill="#ff9900"/>
          <circle class="anim-di" cx="612" cy="460" r="2"   fill="#ffbb55"/>
          <circle class="anim-dj" cx="612" cy="460" r="1.5" fill="#ffee99"/>
          <circle class="anim-dk" cx="612" cy="460" r="3"   fill="#ff6600"/>
          <circle class="anim-dl" cx="612" cy="460" r="2"   fill="#ffaa33"/>
          <ellipse class="anim-dust-l" cx="480" cy="440" rx="80" ry="30" fill="url(#dustGrad)" filter="url(#blur8)"/>
          <ellipse class="anim-dust-r" cx="744" cy="440" rx="80" ry="30" fill="url(#dustGrad)" filter="url(#blur8)"/>
          <ellipse class="anim-dust-u" cx="612" cy="380" rx="50" ry="40" fill="url(#dustGrad)" filter="url(#blur16)" opacity=".6"/>
          <ellipse class="anim-heat"   cx="612" cy="460" rx="180" ry="50" fill="#ff3300" opacity="0" filter="url(#blur16)"/>
        </g>
        <ellipse class="anim-atmos" cx="612" cy="462" rx="400" ry="40" fill="#ff4400" opacity="0" filter="url(#blur16)"/>
      </svg>

      <!-- Top accent line -->
      <div class="absolute top-0 left-0 right-0 h-0.5 anim-accent"
        style="background:linear-gradient(90deg,transparent,#ff3e00 40%,#ff9d6c 60%,transparent)"
      />

      <!-- Brand center -->
      <div class="relative z-10 flex flex-col items-center text-center gap-3">
        <!-- Orbit mark -->
        <div class="anim-orbit" style="filter:drop-shadow(0 0 18px rgba(255,62,0,.6))">
          <svg width="64" height="64" viewBox="0 0 26 26" fill="none">
            <defs>
              <linearGradient id="heroOrbitGrad" x1="2" y1="2" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#ff3e00"/>
                <stop offset="100%" stop-color="#ff9d6c"/>
              </linearGradient>
            </defs>
            <ellipse cx="13" cy="13" rx="11" ry="5.5" stroke="url(#heroOrbitGrad)" stroke-width="1.2" transform="rotate(-30 13 13)"/>
            <circle cx="13" cy="13" r="3.5" fill="url(#heroOrbitGrad)"/>
          </svg>
        </div>

        <h1 class="anim-name font-extrabold text-white leading-none tracking-[-0.03em]"
          style="font-size:clamp(2.8rem,6vw,4.8rem);text-shadow:0 0 60px rgba(255,62,0,.35),0 2px 20px rgba(0,0,0,.8)">
          Astroblox
        </h1>

        <p class="anim-sub text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-[#ff6b35]">
          The Official Blog
        </p>

        <p class="anim-desc text-white/35 leading-relaxed" style="font-size:clamp(.82rem,1.5vw,.95rem)">
          Announcements, engineering insights,<br>and stories from the team.
        </p>

        <div class="anim-cta flex items-center gap-3 mt-2">
          <a href="#content"
            class="bg-linear-to-br from-[#ff3e00] to-[#ff7240] text-white text-[0.82rem] font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_24px_rgba(255,62,0,.55)] hover:-translate-y-px">
            Read Latest
          </a>
          <a href="https://astroblox.com" target="_blank"
            class="flex items-center gap-1.5 text-white/40 text-[0.8rem] font-medium border border-white/10 px-4 py-2.5 rounded-full transition-all hover:text-white/80 hover:border-white/25">
            Open Astroblox
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </a>
        </div>
      </div>

      <!-- Scroll cue -->
      <div class="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-scroll">
        <span class="text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-white/20">Scroll</span>
        <div class="w-px h-8 anim-scroll-line"
          style="background:linear-gradient(180deg,rgba(255,62,0,.6),transparent)"
        />
      </div>
    </section>

    <!-- Content Panel -->
    <div id="content" class="bg-[#08090e] pb-24">
      <div class="max-w-275 mx-auto px-6">

        <!-- Loading -->
        <div v-if="loading" class="pt-12 flex flex-col gap-6">
          <div v-for="n in 3" :key="n" class="flex gap-6">
            <div class="w-55 shrink-0 aspect-video bg-white/4 rounded-xl animate-pulse" />
            <div class="flex-1 flex flex-col gap-3 pt-2">
              <div class="h-3 w-20 bg-white/4 rounded animate-pulse" />
              <div class="h-3 w-full bg-white/4 rounded animate-pulse" />
              <div class="h-3 w-4/5 bg-white/4 rounded animate-pulse" />
            </div>
          </div>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="py-20 flex flex-col items-center gap-4 text-center">
          <span class="text-3xl text-[#ff3e00]/50">⚠</span>
          <p class="text-white/35 text-sm">{{ error }}</p>
          <button @click="load" class="text-[#ff3e00] text-sm hover:underline">Try again</button>
        </div>

        <template v-else-if="posts.length">

          <!-- Featured -->
          <div v-if="featured" class="pt-12 pb-8 border-b border-white/5 mb-10">
            <p class="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/22 mb-5">Recently Posted</p>
            <router-link :to="`/post/${featured.slug}`" class="group flex flex-col sm:flex-row gap-8 items-start">
              <!-- Thumb -->
              <div class="w-full sm:w-[46%] shrink-0 rounded-[14px] overflow-hidden aspect-video bg-[#141620] relative">
                <img v-if="featured.cover" :src="featured.cover" :alt="featured.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                <div v-else class="w-full h-full flex items-center justify-center bg-linear-to-br from-[#ff3e00]/12 to-[#ff6b35]/6">
                  <div class="w-10 h-10 rounded-full bg-[#ff3e00]/20" />
                </div>
                <span class="absolute top-3 left-3 bg-[#ff3e00] text-white text-[0.58rem] font-bold tracking-[0.12em] uppercase px-2 py-0.5 rounded-full">Featured</span>
              </div>
              <!-- Body -->
              <div class="flex-1 flex flex-col gap-3 pt-1">
                <p class="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-[#ff6b35]">{{ featured.category }}</p>
                <h2 class="font-bold text-white leading-tight tracking-[-0.02em] group-hover:text-white/90 transition-colors"
                  style="font-size:clamp(1.4rem,2.5vw,2rem)">{{ featured.title }}</h2>
                <p class="text-white/42 text-[0.88rem] leading-[1.75] line-clamp-4">{{ featured.excerpt }}</p>
                <div class="flex items-center gap-1.5 text-[0.72rem] text-white/22">
                  <span>{{ featured.author }}</span><span class="opacity-50">·</span>
                  <span>{{ featured.date }}</span><span class="opacity-50">·</span>
                  <span>{{ featured.readTime }}</span>
                </div>
                <div class="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#ff6b35] mt-1 transition-all group-hover:gap-2.5">
                  Read article
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
              </div>
            </router-link>
          </div>

          <!-- Grid -->
          <div>
            <div class="flex items-center justify-between flex-wrap gap-4 mb-6">
              <p class="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-white/22">All Posts</p>
              <div class="flex flex-wrap gap-1.5">
                <button
                  v-for="cat in categories" :key="cat"
                  @click="activeCategory = cat"
                  class="text-[0.72rem] font-semibold px-3.5 py-1 rounded-full border transition-all"
                  :class="activeCategory === cat
                    ? 'bg-[#ff3e00] border-[#ff3e00] text-white shadow-[0_0_14px_rgba(255,62,0,.35)]'
                    : 'bg-white/3 border-white/8 text-white/35 hover:text-white/70 hover:border-white/18'"
                >{{ cat }}</button>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <PostCard v-for="post in gridPosts" :key="post.slug" :post="post" />
            </div>

            <div v-if="gridPosts.length === 0" class="py-16 flex flex-col items-center gap-3 text-center">
              <span class="text-3xl text-white/10">◌</span>
              <p class="text-[0.82rem] text-white/22">No posts in this category yet.</p>
            </div>
          </div>

        </template>

        <div v-else class="py-20 flex flex-col items-center gap-3 text-center">
          <span class="text-3xl text-white/10">◌</span>
          <p class="text-[0.82rem] text-white/22">No posts found.</p>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { usePosts } from '../composables/usePosts.js'
import type { Post } from '../composables/usePosts.js'
import PostCard from '../components/PostCard.vue'

const { posts, loading, error, load, categories } = usePosts()
const activeCategory = ref('All')

onMounted(load)

const featured = computed<Post | undefined>(() => posts.value[0])
const gridPosts = computed<Post[]>(() => {
  const rest = posts.value.slice(1)
  if (activeCategory.value === 'All') return rest
  return rest.filter(p => p.category === activeCategory.value)
})
</script>

<style>
/* ── Keyframe animations (can't be done in Tailwind) ── */
@keyframes twinkle      { from{opacity:.3} to{opacity:.7} }
@keyframes nebulaBreath { from{transform:scale(1) rotate(-5deg);opacity:.6} to{transform:scale(1.15) rotate(5deg);opacity:1} }
@keyframes trailDraw    { from{stroke-dashoffset:600} to{stroke-dashoffset:0} }
@keyframes trailFade    { 0%{opacity:0} 10%{opacity:1} 80%{opacity:1} 100%{opacity:.15} }
@keyframes meteorFly    { 0%{transform:translate(-380px,-400px);opacity:0} 5%{opacity:1} 90%{transform:translate(0,0);opacity:1} 100%{transform:translate(0,0);opacity:0} }
@keyframes shockExpand  { from{transform:scale(0);opacity:.9} to{transform:scale(12);opacity:0} }
@keyframes groundFlash  { 0%{opacity:0;transform:scaleX(.1)} 15%{opacity:1;transform:scaleX(1)} 60%{opacity:.7} 100%{opacity:0} }
@keyframes impactReveal { 0%{opacity:0} 5%{opacity:1} 100%{opacity:1} }
@keyframes dustLeft     { 0%{transform:translate(0,0) scaleX(.1);opacity:0} 10%{opacity:.8} 100%{transform:translate(-100px,-20px) scaleX(1.6);opacity:0} }
@keyframes dustRight    { 0%{transform:translate(0,0) scaleX(.1);opacity:0} 10%{opacity:.8} 100%{transform:translate(100px,-20px) scaleX(1.6);opacity:0} }
@keyframes dustUp       { 0%{transform:translateY(0) scale(.2);opacity:0} 10%{opacity:.6} 100%{transform:translateY(-80px) scale(2);opacity:0} }
@keyframes heatPulse    { 0%{opacity:0} 20%{opacity:.5} 60%{opacity:.25} 100%{opacity:0} }
@keyframes atmosScatter { 0%{opacity:0;transform:scaleX(.3)} 20%{opacity:.3;transform:scaleX(1)} 100%{opacity:0} }
@keyframes accentFade   { from{opacity:0;transform:scaleX(.5)} to{opacity:1;transform:scaleX(1)} }
@keyframes orbitReveal  { from{opacity:0;transform:scale(.5) rotate(-30deg)} to{opacity:1;transform:scale(1) rotate(0deg)} }
@keyframes nameReveal   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
@keyframes scrollReveal { from{opacity:0} to{opacity:1} }
@keyframes scrollPulse  { 0%,100%{transform:scaleY(1);opacity:.6} 50%{transform:scaleY(1.4);opacity:1} }
@keyframes ejectaGrow   { 0%{stroke-dashoffset:120;opacity:0} 20%{opacity:.9} 100%{stroke-dashoffset:0;opacity:0} }
@keyframes debrisA  { to{transform:translate(-120px,-130px);opacity:0} }
@keyframes debrisB  { to{transform:translate(140px,-150px);opacity:0} }
@keyframes debrisC  { to{transform:translate(-80px,-170px);opacity:0} }
@keyframes debrisD  { to{transform:translate(100px,-120px);opacity:0} }
@keyframes debrisE  { to{transform:translate(-160px,-90px);opacity:0} }
@keyframes debrisF  { to{transform:translate(180px,-80px);opacity:0} }
@keyframes debrisG  { to{transform:translate(-50px,-200px);opacity:0} }
@keyframes debrisH  { to{transform:translate(60px,-190px);opacity:0} }
@keyframes debrisI  { to{transform:translate(-200px,-60px);opacity:0} }
@keyframes debrisJ  { to{transform:translate(220px,-50px);opacity:0} }
@keyframes debrisK  { to{transform:translate(-30px,-220px);opacity:0} }
@keyframes debrisL  { to{transform:translate(30px,-215px);opacity:0} }
@keyframes spallA   { to{transform:translate(30px,-25px);opacity:0} }
@keyframes spallB   { to{transform:translate(40px,-10px);opacity:0} }
@keyframes spallC   { to{transform:translate(-30px,-20px);opacity:0} }
@keyframes spallD   { to{transform:translate(-25px,-35px);opacity:0} }
@keyframes spallE   { to{transform:translate(15px,-40px);opacity:0} }

/* Animation utility classes */
.anim-trail-group { animation: trailFade 2s ease-out .3s both; }
.anim-trail-wide  { stroke-dasharray:600;stroke-dashoffset:600; animation: trailDraw 1.4s cubic-bezier(.4,0,.2,1) .3s both; }
.anim-trail-mid   { stroke-dasharray:600;stroke-dashoffset:600; animation: trailDraw 1.3s cubic-bezier(.4,0,.2,1) .4s both; }
.anim-trail-core  { stroke-dasharray:600;stroke-dashoffset:600; animation: trailDraw 1.2s cubic-bezier(.4,0,.2,1) .5s both; }
.anim-trail-f1    { stroke-dasharray:500;stroke-dashoffset:500; animation: trailDraw 1.1s cubic-bezier(.4,0,.2,1) .55s both; }
.anim-trail-f2    { stroke-dasharray:500;stroke-dashoffset:500; animation: trailDraw 1.0s cubic-bezier(.4,0,.2,1) .6s both; }
.anim-meteor-body { animation: meteorFly 1.8s cubic-bezier(.3,0,.6,1) .2s both; }
.anim-impact      { animation: impactReveal 3s ease 1.9s both; }
.anim-gflash      { transform-origin:612px 460px; animation: groundFlash 1.2s ease-out 1.9s both; }
.anim-crater-bowl { animation: groundFlash 2s ease-out 1.95s both; }
.anim-crater-in   { animation: groundFlash 2.5s ease-out 1.95s both; }
.anim-crater-hot  { animation: heatPulse 3s ease-out 1.95s both; }
.anim-crater-core { animation: heatPulse 4s ease-out 1.95s both; }
.anim-sw1         { transform-origin:612px 460px;transform:scale(0); animation: shockExpand 2s cubic-bezier(.1,0,.4,1) 1.95s both; }
.anim-sw2         { transform-origin:612px 460px;transform:scale(0); animation: shockExpand 2.4s cubic-bezier(.1,0,.4,1) 2.0s both; }
.anim-sw3         { transform-origin:612px 460px;transform:scale(0); animation: shockExpand 2.8s cubic-bezier(.1,0,.4,1) 2.05s both; }
.anim-dust-l      { transform-origin:480px 440px; animation: dustLeft  2.5s ease-out 2.0s both; }
.anim-dust-r      { transform-origin:744px 440px; animation: dustRight 2.5s ease-out 2.0s both; }
.anim-dust-u      { transform-origin:612px 380px; animation: dustUp    2.5s ease-out 2.0s both; }
.anim-da { animation: debrisA 1.8s ease-out 2.0s both; } .anim-db { animation: debrisB 1.6s ease-out 2.0s both; }
.anim-dc { animation: debrisC 2.0s ease-out 2.0s both; } .anim-dd { animation: debrisD 1.5s ease-out 2.0s both; }
.anim-de { animation: debrisE 2.2s ease-out 2.0s both; } .anim-df { animation: debrisF 1.7s ease-out 2.0s both; }
.anim-dg { animation: debrisG 1.9s ease-out 2.0s both; } .anim-dh { animation: debrisH 2.1s ease-out 2.0s both; }
.anim-di { animation: debrisI 1.4s ease-out 2.0s both; } .anim-dj { animation: debrisJ 1.3s ease-out 2.0s both; }
.anim-dk { animation: debrisK 2.3s ease-out 2.0s both; } .anim-dl { animation: debrisL 2.0s ease-out 2.0s both; }
.anim-ej   { stroke-dasharray:120; animation: ejectaGrow 1.5s ease-out 1.95s both; }
.anim-heat { animation: heatPulse 2s ease-out 2.0s both; }
.anim-atmos { transform-origin:612px 462px; animation: atmosScatter 2.5s ease-out 1.9s both; }
.anim-sa { animation: spallA 1.0s ease-out .8s  both; } .anim-sb { animation: spallB .9s  ease-out .9s  both; }
.anim-sc { animation: spallC 1.1s ease-out .7s  both; } .anim-sd { animation: spallD .8s  ease-out 1.0s both; }
.anim-se { animation: spallE 1.2s ease-out .85s both; }
.anim-accent  { animation: accentFade .8s ease .1s both; }
.anim-orbit   { animation: orbitReveal .8s cubic-bezier(.34,1.56,.64,1) 2.6s both; }
.anim-name    { animation: nameReveal .9s cubic-bezier(.16,1,.3,1) 2.7s both; }
.anim-sub     { animation: nameReveal .7s ease 2.85s both; }
.anim-desc    { animation: nameReveal .7s ease 3.0s  both; }
.anim-cta     { animation: nameReveal .7s ease 3.15s both; }
.anim-scroll  { animation: scrollReveal .8s ease 3.5s both; }
.anim-scroll-line { animation: scrollPulse 2s ease-in-out infinite; }
.anim-nebula  { animation: nebulaBreath 8s ease-in-out infinite alternate; }
.anim-nebula2 { animation: nebulaBreath 8s ease-in-out -4s infinite alternate; }
.anim-twinkle { animation: twinkle 4s ease-in-out infinite alternate; }
</style>