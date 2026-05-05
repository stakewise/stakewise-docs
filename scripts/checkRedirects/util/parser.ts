import { execSync } from 'child_process'

import { errorLabel, bold, cyan } from './colors'


const normalizeFrom = (value: string): string =>
  value.replace(/#.*$/, '').replace(/\/$/, '').toLowerCase()

export const readRedirectsSource = (): string => {
  try {
    return execSync('git show :redirects.ts', { encoding: 'utf8' })
  }
  catch {
    try {
      return execSync('git show HEAD:redirects.ts', { encoding: 'utf8' })
    }
    catch {
      console.error('')
      console.error(`  ${errorLabel} ${bold('redirects.ts not found in git index or HEAD.')}`)
      console.error('')

      process.exit(1)
    }
  }
}

export const parseRedirectFroms = (source: string): string[] => {
  const froms: string[] = []
  const regex = /from:\s*['"]([^'"]+)['"]/g

  let match

  while ((match = regex.exec(source)) !== null) {
    froms.push(normalizeFrom(match[1]))
  }

  return froms
}

export const checkDuplicates = (source: string): void => {
  const regex = /from:\s*['"]([^'"]+)['"]/g
  const counts: Record<string, number> = {}

  let match

  while ((match = regex.exec(source)) !== null) {
    const key = normalizeFrom(match[1])
    counts[key] = (counts[key] ?? 0) + 1
  }

  const duplicates = Object.entries(counts).filter(([ , count ]) => count > 1)

  if (duplicates.length) {
    const heading = duplicates.length === 1
      ? 'Duplicate `from` in redirects.ts'
      : `Duplicate \`from\` entries in redirects.ts (${duplicates.length})`

    console.error('')
    console.error(`  ${errorLabel} ${bold(heading)}`)
    console.error('')

    duplicates.forEach(([ key ]) => console.error(`    ${cyan(key)}`))

    console.error('')

    process.exit(1)
  }
}
