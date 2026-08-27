import { execFileSync } from 'child_process'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'fs'
import { tmpdir } from 'os'
import { dirname, join, relative, resolve } from 'path'

import { categories } from './util/categories'
import { transform, firstProseLine } from './util/transform'

import type { PageRef } from './util/transform'


const API_DIR = 'docs/contracts/api'
const SKIP_DIRS = [ 'interfaces', 'mocks' ]
// Contracts are documented; interfaces declared inside a contract file are not.
const PAGE_KINDS = [ 'contract', 'abstract', 'library' ]

type Generated = {
  name: string
  docPath: string
  sourcePath: string
  body: string
}

const walk = (dir: string): string[] =>
  readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry)

    return statSync(full).isDirectory() ? walk(full) : [ full ]
  })

const readFrontmatter = (file: string): Record<string, string> => {
  if (!existsSync(file)) {
    return {}
  }

  const match = readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---\n/)

  if (!match) {
    return {}
  }

  return Object.fromEntries(
    match[1]
      .split('\n')
      .map((line) => line.match(/^([a-zA-Z_]+):\s*(.*)$/))
      .filter((m): m is RegExpMatchArray => Boolean(m))
      .map((m) => [ m[1], m[2].trim() ]),
  )
}

const quote = (value: string): string => `"${value.replace(/"/g, '\\"')}"`

const collect = (docsRoot: string): Generated[] => {
  const contractsRoot = join(docsRoot, 'src', 'contracts')

  return walk(contractsRoot)
    .filter((file) => file.endsWith('.md') && !file.endsWith('README.md'))
    .flatMap((file) => {
      const rel = relative(contractsRoot, file)
      const parts = rel.split('/')
      const fileName = parts.pop() as string
      const solFile = parts.pop() as string
      const dir = parts.join('/')

      if (parts.some((part) => SKIP_DIRS.includes(part))) {
        return []
      }

      const [ kind, name ] = fileName.replace(/\.md$/, '').split('.')

      if (!PAGE_KINDS.includes(kind)) {
        return []
      }

      // Docusaurus turns a doc whose filename matches its folder into that
      // category's index page, which removes its own route. Suffix those so
      // e.g. keeper/Keeper.sol becomes keeper/KeeperContract.md.
      const parent = parts[parts.length - 1] ?? ''
      const slug = parent.toLowerCase() === name.toLowerCase() ? `${name}Contract` : name

      return [ {
        name,
        docPath: dir ? `${dir}/${slug}` : slug,
        sourcePath: dir ? `contracts/${dir}/${solFile}` : `contracts/${solFile}`,
        body: readFileSync(file, 'utf8'),
      } ]
    })
    .sort((a, b) => a.docPath.localeCompare(b.docPath))
}

const writeCategories = (dirs: Set<string>): void => {
  for (const dir of dirs) {
    if (!dir) {
      continue
    }

    const file = join(API_DIR, dir, '_category_.json')

    if (existsSync(file)) {
      continue
    }

    const known = categories[dir]
    const label = known?.label ?? (dir.split('/').pop() as string)
    const payload: Record<string, unknown> = { label }

    if (known?.position !== undefined) {
      payload.position = known.position
    }

    if (known?.collapsed) {
      payload.collapsed = true
    }

    writeFileSync(file, `${JSON.stringify(payload, null, 2)}\n`)
  }
}

const main = (): void => {
  const repo = resolve(process.env.V3_CORE_PATH ?? '../eth-core')

  if (!existsSync(join(repo, 'foundry.toml'))) {
    console.error(`No foundry project at ${repo}. Set V3_CORE_PATH to your v3-core checkout.`)
    process.exit(1)
  }

  const commit = execFileSync('git', [ '-C', repo, 'rev-parse', 'HEAD' ], { encoding: 'utf8' }).trim()
  const out = mkdtempSync(join(tmpdir(), 'contracts-api-'))

  console.log(`Generating from ${repo} @ ${commit.slice(0, 10)}`)

  try {
    // The default profile builds with via_ir, which currently fails to compile;
    // the test profile does not and forge doc only needs the parsed sources.
    execFileSync('forge', [ 'doc', '--root', repo, '--out', out ], {
      env: { ...process.env, FOUNDRY_PROFILE: 'test' },
      stdio: 'inherit',
    })

    const generated = collect(out)
    const pages = new Map<string, PageRef>(generated.map(({ name, docPath }) => [ name, { docPath } ]))

    const positions = new Map<string, number>()
    const dirs = new Set<string>()

    for (const page of generated) {
      const dir = dirname(page.docPath) === '.' ? '' : dirname(page.docPath)
      const next = (positions.get(dir) ?? 0) + 1

      positions.set(dir, next)
      dirs.add(dir)

      const target = join(API_DIR, `${page.docPath}.md`)
      const existing = readFrontmatter(target)
      const body = transform({ body: page.body, docPath: page.docPath, commit, pages })
      const description = existing.description ?? quote(firstProseLine(body))

      const frontmatter = [
        '---',
        `title: ${existing.title ?? page.name}`,
        `sidebar_position: ${next}`,
        `description: ${description}`,
        '---',
        '',
      ].join('\n')

      mkdirSync(dirname(target), { recursive: true })
      writeFileSync(target, `${frontmatter}\n${body}`)
    }

    writeCategories(dirs)

    const kept = new Set(generated.map((page) => join(API_DIR, `${page.docPath}.md`)))
    const stale = walk(API_DIR)
      .filter((file) => file.endsWith('.md') && !file.endsWith('index.md') && !kept.has(file))

    for (const file of stale) {
      rmSync(file)
    }

    console.log(`Wrote ${generated.length} pages.`)

    if (stale.length) {
      console.log('\nRemoved pages with no matching contract — add redirects for these:')
      stale.forEach((file) => console.log(`  ${file}`))
    }
  }
  finally {
    rmSync(out, { recursive: true, force: true })
  }
}


main()
