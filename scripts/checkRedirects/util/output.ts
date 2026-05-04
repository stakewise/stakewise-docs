import { errorLabel, bold, dim, red } from './colors'


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

  console.error('')
  console.error(`  ${errorLabel} ${bold(heading)}`)

  broken.forEach((entry, index) => {
    const { target, anchor, filePath, fromList, available } = entry

    console.error('')
    console.error(`    ${bold(target)}`)
    console.error('')

    if (filePath) {
      console.error(`    ${dim('file:')}            ${filePath}`)
      console.error(`    ${dim('missing anchor:')}  ${red('#' + anchor)}`)
    }
    else {
      const [ pathPart ] = target.split('#')
      console.error(`    ${dim('issue:')}  ${red('target file not found')} for ${pathPart}`)
    }

    console.error('')

    if (fromList.length === 1) {
      console.error(`    ${dim('used by:')}         ${fromList[0]}`)
    }
    else {
      console.error(`    ${dim(`used by ${fromList.length} redirects:`)}`)
      fromList.forEach((from) => console.error(`      ${from}`))
    }

    if (available && available.length) {
      console.error('')
      console.error(`    ${dim('available anchors:')}`)
      available.forEach((slug) => console.error(`      #${slug}`))
    }

    if (index < broken.length - 1) {
      console.error('')
      console.error(`    ${dim('─'.repeat(50))}`)
    }
  })

  console.error('')
}

export const printMissingRedirects = (missing: Missing[]): void => {
  const heading = missing.length === 1
    ? 'Missing redirect in redirects.ts'
    : `Missing redirects in redirects.ts (${missing.length})`

  console.error('')
  console.error(`  ${errorLabel} ${bold(heading)}`)
  console.error('')
  console.error(`    ${dim('Add the following entries:')}`)
  console.error('')

  missing.forEach(({ oldPath, expectedUrl, newPath, toUrl }) => {
    const note = newPath
      ? `from ${oldPath} → ${newPath}`
      : `from ${oldPath} (deleted)`

    console.error(`      // ${note}`)
    console.error(`      { from: '${expectedUrl}', to: '${toUrl}' },`)
    console.error('')
  })

  console.error(`    ${dim('Then re-stage:')}  git add redirects.ts && git commit`)
  console.error('')
}
