<template>
  <div>

    <!-- ── HERO BANNER (like Polytoria) ── -->
    <section class="relative h-72 flex items-center justify-center overflow-hidden">
      <!-- Background with space nebula -->
      <div class="absolute inset-0 bg-linear-to-b from-[#0d0f1a] via-[#111420] to-[#0c0d11]" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(88,101,242,0.2),transparent_60%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(235,69,158,0.08),transparent_50%)]" />
      <!-- Grid lines -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[48px_48px]" />

      <!-- Centered logo + title -->
      <div class="relative flex flex-col items-center gap-3 text-center">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
          <polygon points="12,2 14.5,8.5 22,8.5 16,13 18.5,20 12,16 5.5,20 8,13 2,8.5 9.5,8.5" fill="white"/>
          <circle cx="12" cy="12" r="2" fill="#5865f2"/>
        </svg>
        <h1 class="font-['Syne'] font-extrabold text-white text-3xl tracking-tight">Astroblox</h1>
        <p class="text-white/40 text-sm tracking-wide">The Astroblox Blog</p>
      </div>

      <!-- Purple top border (like Polytoria) -->
      <div class="absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r from-transparent via-[#5865f2] to-transparent" />
    </section>

    <!-- ── MAIN CONTENT (dark card, floats over hero) ── -->
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
          <button @click="load" class="text-[#5865f2] text-sm hover:underline">Try again</button>
        </div>

        <template v-else-if="posts.length">

          <!-- ── RECENTLY POSTED (featured, like Polytoria) ── -->
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
                <div v-else class="w-full h-full flex items-center justify-center bg-linear-to-br from-[#5865f2]/20 to-[#eb459e]/20">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <polygon points="12,2 14.5,8.5 22,8.5 16,13 18.5,20 12,16 5.5,20 8,13 2,8.5 9.5,8.5" fill="#5865f2" opacity="0.4"/>
                  </svg>
                </div>
              </div>

              <!-- Text right -->
              <div class="flex flex-col gap-3 py-1">
                <h2 class="font-['Syne'] font-bold text-white text-3xl leading-tight tracking-tight">
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
                  ? 'bg-[#5865f2] border-[#5865f2] text-white'
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
          No posts found. Upload a <code class="text-white/40">.md</code> file to the posts folder to get started.
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