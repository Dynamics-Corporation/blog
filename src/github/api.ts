const OWNER  = 'BloxGlobe'
const REPO   = 'blog'  
const BRANCH = 'main'
const FOLDER = 'posts'

const BASE = `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FOLDER}`
const RAW  = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${FOLDER}`

export interface PostFile {
  slug: string
  name: string
  sha:  string
  size: number
}

export interface PostMeta {
  title:    string
  date:     string
  category: string
  excerpt:  string
  cover:    string
  author:   string
  readTime: string
}

export interface ParsedPost {
  meta:    PostMeta
  content: string
}

export async function fetchPostList(): Promise<PostFile[]> {
  const res = await fetch(BASE)
  if (!res.ok) throw new Error('Failed to fetch post list')
  const files = await res.json()
  return (files as any[])
    .filter((f: any) => f.name.endsWith('.md'))
    .map((f: any) => ({
      slug: (f.name as string).replace('.md', ''),
      name: f.name,
      sha:  f.sha,
      size: f.size,
    }))
}

export async function fetchPost(slug: string): Promise<string> {
  const res = await fetch(`${RAW}/${slug}.md`)
  if (!res.ok) throw new Error(`Post "${slug}" not found`)
  return await res.text()
}

export function parseFrontmatter(raw: string): ParsedPost {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match || !match[1] || !match[2]) return { meta: {} as PostMeta, content: raw }

  const frontmatter = match[1]
  const body        = match[2]
  const meta: Record<string, string> = {}

  frontmatter.split('\n').forEach((line: string) => {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) return
    const key   = line.slice(0, colonIndex).trim()
    const value = line.slice(colonIndex + 1).trim()
    if (key) meta[key] = value
  })

  return {
    meta:    meta as unknown as PostMeta,
    content: body.trim(),
  }
}