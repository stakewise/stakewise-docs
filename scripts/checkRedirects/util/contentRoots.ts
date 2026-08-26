import { existsSync } from 'fs'


type ContentRoot = {
  dir: string
  basePath: string
}

export const contentRoots: ContentRoot[] = [
  { dir: 'docs',     basePath: ''          },
  { dir: 'operator', basePath: '/operator' },
  { dir: 'staker',   basePath: '/staker'   },
]

export const pathToUrl = (filePath: string): string => {
  const stripped = filePath
    .replace(/\.(mdx|md)$/, '')
    .toLowerCase()

  const root = contentRoots.find(({ dir }) => stripped.startsWith(dir + '/'))

  let url = root
    ? root.basePath + stripped.slice(root.dir.length)
    : '/' + stripped

  url = url.replace(/\/index$/, '')

  if (!url.startsWith('/')) {
    url = '/' + url
  }

  return url.replace(/\/$/, '')
}

export const resolveToFilePath = (toPath: string): string | null => {
  for (const { dir, basePath } of contentRoots) {
    let subPath: string | null = null

    if (basePath === '') {
      subPath = toPath.startsWith('/') ? toPath.slice(1) : toPath
    }
    else if (toPath === basePath) {
      subPath = ''
    }
    else if (toPath.startsWith(basePath + '/')) {
      subPath = toPath.slice(basePath.length + 1)
    }

    if (subPath === null) {
      continue
    }

    const candidates = [
      `${dir}/${subPath}.mdx`,
      `${dir}/${subPath}.md`,
      `${dir}/${subPath}/index.mdx`,
      `${dir}/${subPath}/index.md`,
    ]

    for (const candidate of candidates) {
      if (existsSync(candidate)) {
        return candidate
      }
    }
  }

  return null
}
