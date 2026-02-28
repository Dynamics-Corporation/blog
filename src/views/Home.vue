<template>
  <div>
    <!-- ── HERO BANNER ── -->
    <section class="relative h-72 flex items-center justify-center overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-linear-to-b from-[#0d0f1a] via-[#111420] to-[#0c0d11]" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,62,0,0.2),transparent_60%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(255,107,53,0.08),transparent_50%)]" />
      <!-- Grid lines -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" style="background-size: 48px 48px;" />

      <!-- Centered logo + title -->
      <div class="relative flex flex-col items-center gap-3 text-center">
        <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#ff3e00;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#ff6b35;stop-opacity:1" />
            </linearGradient>
          </defs>
          <path d="M 50 20 Q 70 20 70 35 Q 70 45 50 50 Q 30 55 30 65 Q 30 80 50 80 Q 70 80 70 70" 
                fill="none" 
                stroke="url(#logoGrad)" 
                stroke-width="8" 
                stroke-linecap="round"/>
          <circle cx="50" cy="50" r="40" fill="none" stroke="url(#logoGrad)" stroke-width="2" opacity="0.3"/>
        </svg>
        <h1 class="font-bold text-white text-3xl tracking-tight">Synoria</h1>
        <p class="text-white/40 text-sm tracking-wide">The Synoria Blog</p>
      </div>

      <!-- Top border -->
      <div class="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#ff3e00] to-transparent" />
    </section>

    <!-- ── MAIN CONTENT ── -->
    <div class="relative -mt-6 mx-auto max-w-5xl px-6 pb-24">
      <div class="bg-[#161820] rounded-2xl shadow-[0_-8px_60px_rgba(0,0,0,0.6)] overflow-hidden">

        <!-- Loading -->
        <div v-if="loading" class="p-8 space-y-8">
          <div class="h-4 bg-white/5 rounded w-32 animate-pulse" />
          <div class="flex gap-6">
            <div class="w-1/2 aspect-video bg-white/4 rounded-xl animate-pulse" />
            <div class="flex-1 space-y-4 py-4">
              <div class="h-8 bg-white/5 rounded w-3/4 animate-pulse" />
              <div class="h-4 bg-white/3 rounded animate-pulse" />
              <div class="h-4 bg-white/3 rounded w-5/6 animate-pulse" />
            </div>
          </div>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="p-12 text-center flex flex-col items-center gap-3">
          <p class="text-white/30 text-sm">{{ error }}</p>
          <button @click="load" class="text-[#ff3e00] text-sm hover:underline">Try again</button>
        </div>

        <template v-else-if="posts.length">

          <!-- ── FEATURED POST ── -->
          <div v-if="featured" class="p-8 border-b border-white/6">
            <p class="text-[11px] font-bold tracking-[0.15em] text-white/30 uppercase mb-5">Recently Posted</p>

            <router-link
              :to="`/post/${featured.slug}`"
              class="group flex gap-8 items-start hover:opacity-90 transition-opacity"
            >
              <!-- Image left -->
              <div class="w-1/2 shrink-0 rounded-xl overflow-hidden aspect-video bg-[#1e2030]">
                <img
                  v-if="featured.cover"
                  :src="featured.cover"
                  :alt="featured.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div v-else class="w-full h-full flex items-center justify-center bg-linear-to-br from-[#ff3e00]/20 to-[#ff6b35]/20">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#ff3e00" opacity="0.4"/>
                  </svg>
                </div>
              </div>

              <!-- Text right -->
              <div class="flex flex-col gap-3 py-1">
                <h2 class="font-bold text-white text-3xl leading-tight tracking-tight">
                  {{ featured.title }}
                </h2>
                <p class="text-white/50 text-[15px] leading-relaxed line-clamp-4">
                  {{ featured.excerpt }}
                </p>
                <div class="flex items-center gap-2 text-xs text-white/25 mt-1">
                  <span>{{ featured.author }}</span>
                  <span>·</span>
                  <span>{{ featured.date }}</span>
                  <span>·</span>
                  <span>{{ featured.readTime }}</span>
                </div>
              </div>
            </router-link>
          </div>

          <!-- ── BLOG POSTS GRID ── -->
          <div class="p-8">
            <p class="text-[11px] font-bold tracking-[0.15em] text-white/30 uppercase mb-5">Blog Posts</p>

            <!-- Category filter -->
            <div class="flex gap-2 flex-wrap mb-6">
              <button
                v-for="cat in categories"
                :key="cat"
                @click="activeCategory = cat"
                class="text-xs font-semibold px-3 py-1 rounded-full border transition-all"
                :class="activeCategory === cat
                  ? 'bg-[#ff3e00] border-[#ff3e00] text-white'
                  : 'bg-white/3 border-white/[0.07] text-white/35 hover:text-white/60 hover:border-white/15'"
              >{{ cat }}</button>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <PostCard
                v-for="post in gridPosts"
                :key="post.slug"
                :post="post"
              />
            </div>

            <!-- Empty -->
            <div v-if="gridPosts.length === 0" class="text-center py-16 text-white/25 text-sm">
              No posts in this category yet.
            </div>
          </div>

        </template>

        <!-- No posts at all -->
        <div v-else class="p-12 text-center text-white/25 text-sm">
          No posts found.
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