import { externalLinks } from './externalLinks'


export type PageRef = {
  // Path of the generated page relative to docs/contracts/api, without extension.
  docPath: string
}

type TransformInput = {
  body: string
  docPath: string
  commit: string
  pages: Map<string, PageRef>
}

const SOURCE_REPO = 'https://github.com/stakewise/v3-core'

const relativeLink = (from: string, to: string): string => {
  const fromParts = from.split('/').slice(0, -1)
  const toParts = to.split('/')
  const name = toParts.pop() as string

  let shared = 0

  while (shared < fromParts.length && shared < toParts.length && fromParts[shared] === toParts[shared]) {
    shared += 1
  }

  const up = fromParts.slice(shared).map(() => '..')
  const down = toParts.slice(shared)
  const segments = [ ...up, ...down, name ]

  return up.length ? segments.join('/') : `./${segments.join('/')}`
}

// forge doc links every contract as /contracts/<dir>/<File>.sol/<kind>.<Name>.md.
// Rewrite those to relative doc paths, drop links to pages we do not publish
// (interfaces, mocks), and link known lib/ base contracts by hand.
const rewriteLinks = (body: string, docPath: string, pages: Map<string, PageRef>): string =>
  body.replace(
    /\[([^\]]+)\]\(\/contracts\/[^)]*?\/(?:contract|abstract|library|interface|struct|enum)\.([A-Za-z0-9_]+)\.md\)/g,
    (_match, label: string, name: string) => {
      const page = pages.get(name)

      if (page) {
        return `[${label}](${relativeLink(docPath, page.docPath)})`
      }

      const external = externalLinks[name]

      return external ? `[${label} ↗](${external})` : label
    },
  )

// Solidity NatSpec inherited from OpenZeppelin carries AsciiDoc artefacts:
// `{Foo}` cross-references, which MDX would evaluate as JSX expressions, and
// ``double backticks``. Rewrite both to plain inline code, skipping code fences.
const sanitizeProse = (body: string): string => {
  let inFence = false

  return body
    .split('\n')
    .map((line) => {
      if (line.trimStart().startsWith('```')) {
        inFence = !inFence

        return line
      }

      if (inFence) {
        return line
      }

      return line
        .replace(/``([^`]+)``/g, '`$1`')
        .replace(/\{([A-Za-z_][A-Za-z0-9_-]*)\}/g, '`$1`')
        .replace(/xref:[^\s[]+\[([^\]]*)\]/g, '$1')
    })
    .join('\n')
}

export const transform = ({ body, docPath, commit, pages }: TransformInput): string => {
  let out = body.trimStart()

  // forge doc puts the Git Source link straight under the heading with no blank line.
  out = out.replace(/^(# .+)\n(\[Git Source\])/m, '$1\n\n$2')

  out = out.replace(
    /\[Git Source\]\(https:\/\/github\.com\/[^/]+\/[^/]+\/blob\/[0-9a-f]+\//,
    `[Git Source ↗](${SOURCE_REPO}/blob/${commit}/`,
  )

  // "**Title:**\nName" and "**Author:**\nStakeWise" duplicate the heading.
  out = out.replace(/\*\*Title:\*\*\n[^\n]*\n\n/g, '')
  out = out.replace(/\*\*Author:\*\*\n[^\n]*\n\n/g, '')

  // Collapse the inherits list onto one line, as the rest of the site does, and
  // link the lib/ base contracts that forge doc leaves as bare names.
  out = out.replace(/\*\*Inherits:\*\*\n([^\n]+)/, (_match, list: string) => {
    const linked = list
      .split(', ')
      .map((entry) => {
        const external = externalLinks[entry.trim()]

        return external ? `[${entry.trim()} ↗](${external})` : entry
      })
      .join(', ')

    return `**Inherits:** ${linked}`
  })

  out = rewriteLinks(out, docPath, pages)
  out = sanitizeProse(out)

  return `${out.trimEnd()}\n`
}

export const firstProseLine = (body: string): string => {
  const lines = body.split('\n')
  let index = 0

  const skip = (line: string): boolean =>
    !line.trim()
    || line.startsWith('#')
    || line.startsWith('[Git Source')
    || line.startsWith('**')
    || line.startsWith('```')

  while (index < lines.length && skip(lines[index])) {
    index += 1
  }

  const line = (lines[index] ?? '').trim()

  return line.startsWith('*') || line.startsWith('|') ? '' : line
}
