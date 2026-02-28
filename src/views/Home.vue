<template>
  <div class="pt-20">

    <!-- Hero -->
    <section class="text-center py-20 px-8 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(88,101,242,0.12),transparent_60%)] pointer-events-none" />
      <div class="relative max-w-xl mx-auto">
        <div class="inline-flex items-center gap-2 text-[#a8b0ff] text-xs font-semibold tracking-wider uppercase bg-[#5865f2]/10 border border-[#5865f2]/25 px-4 py-1.5 rounded-full mb-6">
          <span class="w-1.5 h-1.5 bg-[#57f287] rounded-full shadow-[0_0_8px_#57f287] animate-pulse" />
          The Astroblox Blog
        </div>
        <h1 class="font-['Syne'] font-extrabold text-white text-5xl md:text-6xl leading-[1.08] tracking-[-2px] mb-5">
          Stories from<br/>
          <span class="bg-gradient-to-r from-[#7c8df8] to-[#eb459e] bg-clip-text text-transparent">the universe</span>
        </h1>
        <p class="text-white/40 text-base leading-relaxed">
          Announcements, deep dives, and community highlights from the team building Astroblox.
        </p>
      </div>
    </section>

    <!-- Content -->
    <div class="max-w-6xl mx-auto px-8 pb-24">

      <!-- Category pills -->
      <div class="flex gap-2 flex-wrap mb-8">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          class="text-xs font-semibold px-4 py-1.5 rounded-full border transition-all"
          :class="activeCategory === cat
            ? 'bg-[#5865f2] border-[#5865f2] text-white'
            : 'bg-white/[0.03] border-white/[0.08] text-white/40 hover:text-white/70 hover:border-white/20'"
        >{{ cat }}</button>
      </div>

      <!-- Loading skeletons -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="i in 6" :key="i" class="bg-[#13151c] border border-white/[0.07] rounded-2xl overflow-hidden animate-pulse">
          <div class="aspect-video bg-white/[0.04]" />
          <div class="p-5 space-y-3">
            <div class="h-3 bg-white/[0.05] rounded w-1/3" />
            <div class="h-5 bg-white/[0.05] rounded w-4/5" />
            <div class="h-3 bg-white/[0.03] rounded w-full" />
            <div class="h-3 bg-white/[0.03] rounded w-2/3" />
          </div>
        </div>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="text-center py-24 flex flex-col items-center gap-4">
        <p class="text-white/30 text-sm">Couldn't load posts — {{ error }}</p>
        <button @click="load" class="text-[#5865f2] text-sm hover:underline">Try again</button>
      </div>

      <!-- Posts grid -->
      <div v-else-if="filtered.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <PostCard
          v-for="(post, i) in filtered"
          :key="post.slug"
          :post="post"
          :featured="i === 0 && activeCategory === 'All'"
          :class="i === 0 && activeCategory === 'All' ? 'md:col-span-2 lg:col-span-2' : ''"
        />
      </div>

      <!-- Empty -->
      <div v-else class="text-center py-24 text-white/25 text-sm">
        No posts found{{ activeCategory !== 'All' ? ' in ' + activeCategory : '' }}.
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { usePosts } from '../composables/usePosts.js'
import PostCard from '../components/PostCard.vue'

const { posts, loading, error, load, categories } = usePosts()
const activeCategory = ref('All')

onMounted(load)

const filtered = computed(() =>
  activeCategory.value === 'All'
    ? posts.value
    : posts.value.filter(p => p.category === activeCategory.value)
)
</script>