import { readFileSync } from 'fs'

import { resolveToFilePath } from './contentRoots'
import { printBrokenAnchors } from './output'

import type { BrokenAnchor } from './output'


const slugifyHeading = (heading: string): string => {
  return heading
    .toLowerCase()
    .replace(/[^\p{L}\p{N}_ \-]/gu, '')
    .trim()
    .replace(/ /g, '-')
}

const extractHeadingSlugs = (markdown: string): string[] => {
  const content = markdown
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .replace(/```[\s\S]*?```/g, '')

  const slugs: string[] = []
  const occurrences: Record<string, number> = {}
  const regex = /^#{1,6}\s+(.+?)(?:\s*\{#([^}]+)\})?\s*$/gm

  let match

  while ((match = regex.exec(content)) !== null) {
    const [ _, text, id ] = match
    const baseSlug = id || slugifyHeading(text)
    const count = occurrences[baseSlug] ?? 0
    const slug = count === 0 ? baseSlug : `${baseSlug}-${count}`

    occurrences[baseSlug] = count + 1
    slugs.push(slug)
  }

  return slugs
}

export const validateAnchors = (redirectsSource: string): void => {
  const pairRegex = /\{\s*from:\s*['"]([^'"]+)['"]\s*,\s*to:\s*['"]([^'"]+)['"]/g
  const fromByTarget: Record<string, string[]> = {}

  let match

  while ((match = pairRegex.exec(redirectsSource)) !== null) {
    const [ _, from, target ] = match

    if (!target.includes('#')) {
      continue
    }

    fromByTarget[target] = fromByTarget[target] ?? []
    fromByTarget[target].push(from)
  }

  const broken: BrokenAnchor[] = []

  for (const [ target, fromList ] of Object.entries(fromByTarget)) {
    const [ pathPart, anchor ] = target.split('#')
    const filePath = resolveToFilePath(pathPart)

    if (!filePath) {
      broken.push({ target, anchor, filePath: null, fromList })
      continue
    }

    const slugs = extractHeadingSlugs(readFileSync(filePath, 'utf8'))

    if (!slugs.includes(anchor.toLowerCase())) {
      broken.push({ target, anchor, filePath, fromList, available: slugs })
    }
  }

  if (broken.length) {
    printBrokenAnchors(broken)

    process.exit(1)
  }
}
