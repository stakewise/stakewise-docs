import { errorLabel, bold, dim, red } from './colors'
import { log } from './log'


export type BrokenAnchor = {
  target: string
  anchor: string
  filePath: string | null
  fromList: string[]
  available?: string[]
}

export type Missing = {
  oldPath: string
  expectedUrl: string
  newPath?: string
  toUrl: string
}

export const printBrokenAnchors = (broken: BrokenAnchor[]): void => {
  const heading = broken.length === 1
    ? 'Broken redirect target in redirects.ts'
    : `Broken redirect targets in redirects.ts (${broken.length})`

  log(`  ${errorLabel} ${bold(heading)}`)

  broken.forEach((entry, index) => {
    const { target, anchor, filePath, fromList, available } = entry
    const lines: string[] = [ `    ${bold(target)}`, '' ]

    if (filePath) {
      lines.push(
        `    ${dim('file:')}            ${filePath}`,
        `    ${dim('missing anchor:')}  ${red('#' + anchor)}`,
      )
    }
    else {
      const [ pathPart ] = target.split('#')
      lines.push(`    ${dim('issue:')}  ${red('target file not found')} for ${pathPart}`)
    }

    lines.push('')

    if (fromList.length === 1) {
      lines.push(`    ${dim('used by:')}         ${fromList[0]}`)
    }
    else {
      lines.push(`    ${dim(`used by ${fromList.length} redirects:`)}`)
      fromList.forEach((from) => lines.push(`      ${from}`))
    }

    if (available && available.length) {
      lines.push('', `    ${dim('available anchors:')}`)
      available.forEach((slug) => lines.push(`      #${slug}`))
    }

    if (index < broken.length - 1) {
      lines.push('', `    ${dim('─'.repeat(50))}`)
    }

    log(lines)
  })
}

export const printMissingRedirects = (missing: Missing[]): void => {
  const heading = missing.length === 1
    ? 'Missing redirect in redirects.ts'
    : `Missing redirects in redirects.ts (${missing.length})`

  const lines: string[] = [
    `  ${errorLabel} ${bold(heading)}`,
    '',
    `    ${dim('Add the following entries:')}`,
    '',
  ]

  missing.forEach(({ oldPath, expectedUrl, newPath, toUrl }) => {
    const note = newPath
      ? `from ${oldPath} → ${newPath}`
      : `from ${oldPath} (deleted)`

    lines.push(
      `      // ${note}`,
      `      { from: '${expectedUrl}', to: '${toUrl}' },`,
      '',
    )
  })

  lines.push(`    ${dim('Then re-stage:')}  git add redirects.ts && git commit`)

  log(lines)
}
