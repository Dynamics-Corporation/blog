import { ref } from 'vue'

export interface Post {
  slug: string
  title: string
  excerpt: string
  content: string
  cover: string
  category: string
  author: string
  date: string
  readTime: string
}

const MOCK_POSTS: Post[] = [
  {
    slug: 'introducing-synoria-2.0',
    title: 'Introducing Synoria 2.0: The Future of Communication',
    excerpt: 'We are excited to announce Synoria 2.0, packed with new features, improved performance, and a completely redesigned interface that puts your conversations first.',
    content: '...',
    cover: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
    category: 'Announcements',
    author: 'BloxGlobe',
    date: 'Feb 26, 2025',
    readTime: '5 min'
  },
  {
    slug: 'end-to-end-encryption',
    title: 'How We Built End-to-End Encryption',
    excerpt: 'A deep dive into our encryption architecture and how we ensure your messages stay private and secure.',
    content: '...',
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    category: 'Engineering',
    author: 'Security Team',
    date: 'Feb 24, 2025',
    readTime: '8 min'
  },
  {
    slug: 'community-highlights-february',
    title: 'Community Highlights: February 2025',
    excerpt: 'Celebrating our amazing community members and the incredible communities they have built this month.',
    content: '...',
    cover: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    category: 'Community',
    author: 'Community Team',
    date: 'Feb 20, 2025',
    readTime: '4 min'
  },
  {
    slug: 'custom-emojis-reactions',
    title: 'Custom Emojis and Reactions Are Here!',
    excerpt: 'Express yourself like never before with custom emojis, animated reactions, and a brand new emoji picker.',
    content: '...',
    cover: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    category: 'Features',
    author: 'Product Team',
    date: 'Feb 18, 2025',
    readTime: '3 min'
  },
  {
    slug: 'redesigning-synoria',
    title: 'Redesigning Synoria: A Design Journey',
    excerpt: 'Behind the scenes of our complete interface redesign and the principles that guided our design decisions.',
    content: '...',
    cover: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    category: 'Design',
    author: 'Design Team',
    date: 'Feb 15, 2025',
    readTime: '6 min'
  },
  {
    slug: 'voice-channels-update',
    title: 'Voice Channels Get a Major Upgrade',
    excerpt: 'Crystal clear audio, noise suppression, and new spatial audio features make voice chat better than ever.',
    content: '...',
    cover: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&q=80',
    category: 'Features',
    author: 'Audio Team',
    date: 'Feb 12, 2025',
    readTime: '4 min'
  },
  {
    slug: 'scaling-to-millions',
    title: 'Scaling Synoria to Millions of Users',
    excerpt: 'The engineering challenges we faced and how we built infrastructure to support millions of concurrent users.',
    content: '...',
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    category: 'Engineering',
    author: 'Infrastructure Team',
    date: 'Feb 10, 2025',
    readTime: '10 min'
  },
  {
    slug: 'moderator-tools',
    title: 'New Moderator Tools for Community Safety',
    excerpt: 'Empowering community moderators with better tools to keep their communities safe and welcoming.',
    content: '...',
    cover: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    category: 'Features',
    author: 'Safety Team',
    date: 'Feb 8, 2025',
    readTime: '5 min'
  },
  {
    slug: 'year-in-review-2024',
    title: 'Synoria 2024: Year in Review',
    excerpt: 'Looking back at an incredible year of growth, new features, and amazing community moments.',
    content: '...',
    cover: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80',
    category: 'General',
    author: 'Synoria Team',
    date: 'Jan 1, 2025',
    readTime: '7 min'
  }
]

export function usePosts() {
  const posts = ref<Post[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const categories = ['All', 'Announcements', 'Engineering', 'Design', 'Features', 'Community', 'General']

  async function load() {
    loading.value = true
    error.value = null
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800))
      posts.value = MOCK_POSTS
    } catch (e) {
      error.value = 'Failed to load posts'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  return {
    posts,
    loading,
    error,
    load,
    categories
  }
}