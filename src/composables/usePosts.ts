import { ref } from 'vue'

// POST INTERFACE

export interface Post {
  slug:     string
  title:    string
  excerpt:  string
  content:  string   // sanitized HTML
  cover:    string
  category: string
  author:   string
  date:     string
  readTime: string
}

// 
// PROFANITY FILTER
// Add / remove words as needed. Matching is case-insensitive, whole-word.
// 
const BLOCKED_WORDS: string[] = [
  'fuck', 'fuck', 'f+ck', 'fck',
  'shit', 'sh1t', 'sh!t',
  'bitch', 'b1tch',
  'ass', 'asshole',
  'bastard',
  'cunt',
  'dick', 'd1ck',
  'cock',
  'nigger', 'nigga',
  'faggot', 'fag',
  'retard',
  'whore', 'slut',
  'damn', 'crap',   // softer — remove if too aggressive
]

const PROFANITY_REGEX = new RegExp(
  `\\b(${BLOCKED_WORDS.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`,
  'gi'
)

/** Strips profanity from a plain-text string. Returns censored version. */
function censorText(text: string): string {
  return text.replace(PROFANITY_REGEX, match => match[0] + '*'.repeat(match.length - 1))
}

/** Strips profanity from HTML without breaking tags.
 *  Walks only text nodes so tag attributes / structure are untouched. */
function censorHtml(html: string): string {
  // Simple approach: replace only in text content between tags
  return html.replace(/>([^<]*)</g, (_, text: string) => `>${censorText(text)}<`)
}

/** Returns true if the raw HTML contains any uncensored blocked word. */
function containsProfanity(text: string): boolean {
  return PROFANITY_REGEX.test(text)
}

// 
// HTML FILE IMPORTS  (Vite glob — /posts/*.html lives at project root)
//
// Each .html file is the full post body.
// Metadata is read from <meta> tags in the file's <head>:
//
//   <meta name="title"    content="My Post Title">
//   <meta name="excerpt"  content="Short description...">
//   <meta name="cover"    content="https://...">
//   <meta name="category" content="Engineering">
//   <meta name="author"   content="Dev Team">
//   <meta name="date"     content="Feb 26, 2025">
//   <meta name="readTime" content="5 min">
//
// Everything in <body> (or the full file if no <body> tag) is used as content.
// 
const htmlModules = import.meta.glob('/posts/*.html', {
  eager: true,
  as: 'raw',
}) as Record<string, string>

// helpers 

function getMeta(html: string, name: string): string {
  const match = html.match(
    new RegExp(`<meta[^>]+name=["']${name}["'][^>]+content=["']([^"']+)["']`, 'i')
  ) ?? html.match(
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+name=["']${name}["']`, 'i')
  )
  return match?.[1]?.trim() ?? ''
}

function getBody(html: string): string {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  return (bodyMatch?.[1] ?? html).trim()
}

function slugFromPath(path: string): string {
  return path.replace('/posts/', '').replace('.html', '')
}

function estimateReadTime(html: string): string {
  const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.round(words / 200))} min`
}

//  Parse all .html files into Post objects 

function parsePostsFromModules(): Post[] {
  const result: Post[] = []

  for (const [path, raw] of Object.entries(htmlModules)) {
    const slug    = slugFromPath(path)
    const body    = getBody(raw)

    // Skip posts that contain uncensored profanity in the title/excerpt
    const title   = getMeta(raw, 'title')   || slug.replace(/-/g, ' ')
    const excerpt = getMeta(raw, 'excerpt') || ''

    // We censor the content but drop the post if title or excerpt are profane
    // (those surface publicly in cards / feeds — we want them clean)
    if (containsProfanity(title) || containsProfanity(excerpt)) {
      console.warn(`[usePosts] Post "${slug}" blocked — profanity in title/excerpt.`)
      continue
    }

    result.push({
      slug,
      title:    censorText(title),
      excerpt:  censorText(excerpt),
      content:  censorHtml(body),          // inline content gets censored, not dropped
      cover:    getMeta(raw, 'cover'),
      category: getMeta(raw, 'category') || 'General',
      author:   censorText(getMeta(raw, 'author') || 'Astroblox Team'),
      date:     getMeta(raw, 'date'),
      readTime: getMeta(raw, 'readTime') || estimateReadTime(body),
    })
  }

  // Sort newest first (basic lexicographic on date string — swap for Date parse if needed)
  return result.sort((a, b) => (b.date > a.date ? 1 : -1))
}

const POSTS: Post[] = parsePostsFromModules()


// COMPOSABLE

export function usePosts() {
  const posts   = ref<Post[]>([])
  const loading = ref(false)
  const error   = ref<string | null>(null)

  const categories = [
    'All',
    'Announcements',
    'Engineering',
    'Design',
    'Features',
    'Community',
    'General',
  ] as const

  async function load() {
    loading.value = true
    error.value   = null
    try {
      await new Promise(resolve => setTimeout(resolve, 400))
      posts.value = POSTS
    } catch (e) {
      error.value = 'Failed to load posts'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  /** Get a single post by slug — use in PostView.vue */
  function getPost(slug: string): Post | undefined {
    return POSTS.find(p => p.slug === slug)
  }

  /** Search posts by query string (title + excerpt + author) */
  function search(query: string): Post[] {
    const q = query.toLowerCase().trim()
    if (!q) return POSTS
    return POSTS.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    )
  }

  return { posts, loading, error, load, getPost, search, categories }
}