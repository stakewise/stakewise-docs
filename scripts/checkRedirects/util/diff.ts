import { execSync } from 'child_process'
import { readFileSync } from 'fs'

import { contentRoots } from './contentRoots'


export type DiffEntry = {
  oldPath: string
  newPath?: string
}

export const parseDiff = (raw: string): DiffEntry[] => {
  const entries: DiffEntry[] = []
  const lines = raw.split('\n').filter(Boolean)

  for (const line of lines) {
    const [ status, oldPath, newPath ] = line.split('\t')

    if (status === 'D' && oldPath) {
      entries.push({ oldPath })
    }
    else if (status.startsWith('R') && oldPath && newPath) {
      entries.push({ oldPath, newPath })
    }
  }

  return entries
}

export const isContentFile = (filePath: string): boolean => {
  const isContent = contentRoots.some(({ dir }) => filePath.startsWith(dir + '/'))
  const isMarkdown = /\.(mdx|md)$/.test(filePath)

  return isContent && isMarkdown
}

export const readDiff = (useStdin: boolean): string => {
  if (useStdin) {
    try {
      return readFileSync(0, 'utf8')
    }
    catch {
      return ''
    }
  }

  try {
    return execSync('git diff --cached --name-status -M50', { encoding: 'utf8' })
  }
  catch {
    return ''
  }
}
