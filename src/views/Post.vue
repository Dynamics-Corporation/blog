<template>
  <div class="pt-24 pb-24 max-w-3xl mx-auto px-8">

    <!-- Loading -->
    <div v-if="loading" class="animate-pulse space-y-5 mt-8">
      <div class="h-4 bg-white/[0.05] rounded w-1/4" />
      <div class="h-10 bg-white/[0.05] rounded w-3/4" />
      <div class="h-4 bg-white/[0.03] rounded w-full" />
      <div class="h-64 bg-white/[0.03] rounded-2xl mt-8" />
    </div>

    <!-- Error -->
    <div v-else-if="error" class="text-center py-24 flex flex-col items-center gap-4">
      <p class="text-white/30 text-sm">{{ error }}</p>
      <router-link to="/" class="text-[#5865f2] text-sm hover:underline">← Back to blog</router-link>
    </div>

    <!-- Post -->
    <article v-else-if="post">

      <!-- Back -->
      <router-link to="/" class="inline-flex items-center gap-2 text-white/30 hover:text-white/70 text-sm mb-8 transition-colors">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M14 8H2M7 3L2 8l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Back to Blog
      </router-link>

      <!-- Meta -->
      <div class="flex items-center gap-3 text-xs text-white/30 mb-5 flex-wrap">
        <span
          class="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border"
          :style="{ color: catColor, borderColor: catColor + '50', background: catColor + '18' }"
        >{{ post.meta.category || 'General' }}</span>
        <span>{{ post.meta.date }}</span>
        <span>·</span>
        <span>{{ post.meta.readTime || '3 min read' }}</span>
      </div>

      <!-- Title -->
      <h1 class="font-['Syne'] font-extrabold text-white text-4xl md:text-5xl leading-tight tracking-[-1.5px] mb-5">
        {{ post.meta.title }}
      </h1>

      <!-- Excerpt -->
      <p v-if="post.meta.excerpt" class="text-white/40 text-lg leading-relaxed mb-8 italic">
        {{ post.meta.excerpt }}
      </p>

      <!-- Author -->
      <div class="flex items-center gap-3 pb-8 border-b border-white/[0.07] mb-10">
        <div class="w-9 h-9 rounded-full bg-[#5865f2] flex items-center justify-center text-white text-xs font-bold shrink-0">
          {{ (post.meta.author || 'BG').slice(0, 2).toUpperCase() }}
        </div>
        <div>
          <p class="text-sm font-semibold text-white/80">{{ post.meta.author || 'BloxGlobe' }}</p>
          <p class="text-xs text-white/30">Author</p>
        </div>
      </div>

      <!-- Cover -->
      <img
        v-if="post.meta.cover"
        :src="post.meta.cover"
        :alt="post.meta.title"
        class="w-full rounded-2xl mb-10 object-cover max-h-96"
      />

      <!-- Rendered markdown -->
      <div class="prose-blog" v-html="renderedContent" />

    </article>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import { fetchPost, parseFrontmatter } from '../github/api.js'
import type { ParsedPost } from '../github/api.js'

const route   = useRoute()
const post    = ref<ParsedPost | null>(null)
const loading = ref(true)
const error   = ref<string | null>(null)

onMounted(async () => {
  try {
    const raw = await fetchPost(route.params.slug as string)
    post.value = parseFrontmatter(raw)
  } catch (e: unknown) {
    error.value = e instanceof Error ? e.message : 'Failed to load post'
  } finally {
    loading.value = false
  }
})

const categoryColors: Record<string, string> = {
  Announcements: '#5865f2',
  Engineering:   '#57f287',
  Design:        '#eb459e',
  Features:      '#fee75c',
  Community:     '#9b8ef8',
  General:       '#a8b0ff',
}

const catColor = computed(() =>
  categoryColors[post.value?.meta?.category ?? ''] ?? '#a8b0ff'
)

const renderedContent = computed(() =>
  post.value ? marked(post.value.content) : ''
)
</script>

<style>
.prose-blog { color: rgba(200,205,216,0.85); line-height: 1.85; font-size: 16px; }
.prose-blog h1, .prose-blog h2, .prose-blog h3 {
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  color: #eceef5;
  margin: 2rem 0 1rem;
  letter-spacing: -0.3px;
}
.prose-blog h1 { font-size: 2rem; }
.prose-blog h2 { font-size: 1.5rem; }
.prose-blog h3 { font-size: 1.2rem; }
.prose-blog p  { margin-bottom: 1.25rem; }
.prose-blog a  { color: #5865f2; text-decoration: underline; }
.prose-blog code {
  background: rgba(255,255,255,0.07);
  border-radius: 5px;
  padding: 2px 7px;
  font-size: 0.875em;
}
.prose-blog pre {
  background: #13151c;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 1.25rem;
  overflow-x: auto;
  margin-bottom: 1.5rem;
}
.prose-blog pre code { background: none; padding: 0; }
.prose-blog blockquote {
  border-left: 3px solid #5865f2;
  padding-left: 1rem;
  color: rgba(200,205,216,0.5);
  font-style: italic;
  margin: 1.5rem 0;
}
.prose-blog ul, .prose-blog ol { padding-left: 1.5rem; margin-bottom: 1.25rem; }
.prose-blog li { margin-bottom: 0.4rem; }
.prose-blog img { border-radius: 12px; margin: 1.5rem 0; max-width: 100%; }
.prose-blog hr { border: none; border-top: 1px solid rgba(255,255,255,0.07); margin: 2rem 0; }
</style>