import { ref, computed } from 'vue'
import { fetchPostList, fetchPost, parseFrontmatter } from '../github/api.js'
import type { PostMeta } from '../github/api.js'

export interface Post extends PostMeta {
  slug: string
  name: string
  sha:  string
  size: number
}

export function usePosts() {
  const posts   = ref<Post[]>([])
  const loading = ref(true)
  const error   = ref<string | null>(null)

  async function load() {
    try {
      loading.value = true
      error.value   = null
      const list = await fetchPostList()

      const detailed = await Promise.all(
        list.map(async item => {
          const raw = await fetchPost(item.slug)
          const { meta } = parseFrontmatter(raw)
          return {
            ...item,
            title:    meta.title    || item.slug,
            date:     meta.date     || '',
            category: meta.category || 'General',
            excerpt:  meta.excerpt  || '',
            cover:    meta.cover    || '',
            author:   meta.author   || 'BloxGlobe',
            readTime: meta.readTime || '3 min read',
          } satisfies Post
        })
      )

      posts.value = detailed.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    } catch (e: unknown) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    } finally {
      loading.value = false
    }
  }

  const categories = computed<string[]>(() => {
    return ['All', ...new Set(posts.value.map(p => p.category))]
  })

  return { posts, loading, error, load, categories }
}