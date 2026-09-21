import { execFileSync } from 'child_process'
import { existsSync, readdirSync, readFileSync } from 'fs'

import { contentRoots, pathToUrl } from './contentRoots'


let slugIndex: Record<string, string> | null = null

const runGit = (args: string[]): string | null => {
  try {
    return execFileSync('git', args, { encoding: 'utf8', stdio: [ 'ignore', 'pipe', 'ignore' ] })
  }
  catch {
    return null
  }
}

const normalizeUrl = (value: string): string => {
  const url = value.startsWith('/') ? value : `/${value}`

  return url.replace(/\/$/, '')
}

export const extractSlug = (source: string): string | null => {
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/)

  if (!frontmatter) {
    return null
  }

  const match = frontmatter[1].match(/^slug:\s*['"]?([^'"\s]+)['"]?\s*$/m)

  return match ? match[1] : null
}

const readPreviousSource = (filePath: string): string | null => {
  const head = runGit([ 'show', `HEAD:${filePath}` ])

  if (head !== null) {
    return head
  }

  const sha = runGit([ 'rev-list', '-n', '1', 'HEAD', '--', filePath ])?.trim()

  return sha ? runGit([ 'show', `${sha}^:${filePath}` ]) : null
}

const readCurrentSource = (filePath: string): string | null => {
  const staged = runGit([ 'show', `:${filePath}` ])

  if (staged !== null) {
    return staged
  }

  return existsSync(filePath) ? readFileSync(filePath, 'utf8') : null
}

const toUrl = (filePath: string, source: string | null): string => {
  const slug = source ? extractSlug(source) : null

  return slug ? normalizeUrl(slug) : pathToUrl(filePath)
}

export const previousUrl = (filePath: string): string => (
  toUrl(filePath, readPreviousSource(filePath))
)

export const currentUrl = (filePath: string): string => (
  toUrl(filePath, readCurrentSource(filePath))
)

const buildSlugIndex = (): Record<string, string> => {
  const index: Record<string, string> = {}

  for (const { dir } of contentRoots) {
    if (!existsSync(dir)) {
      continue
    }

    const files = readdirSync(dir, { recursive: true, encoding: 'utf8' })

    for (const file of files) {
      if (!/\.(mdx|md)$/.test(file)) {
        continue
      }

      const filePath = `${dir}/${file}`
      const slug = extractSlug(readFileSync(filePath, 'utf8'))

      if (slug) {
        index[normalizeUrl(slug)] = filePath
      }
    }
  }

  return index
}

export const findFileBySlug = (url: string): string | null => {
  slugIndex = slugIndex || buildSlugIndex()

  return slugIndex[normalizeUrl(url)] || null
}
