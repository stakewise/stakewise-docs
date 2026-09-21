import {
  green, previousUrl, currentUrl, validateAnchors, printMissingRedirects, readDiff, parseDiff,
  isContentFile, readRedirectsSource, parseRedirectFroms, checkDuplicates, log,
} from './util'

import type { Missing } from './util'


const main = (): void => {
  const useStdin = process.argv.includes('--stdin')
  const diffOutput = readDiff(useStdin)

  const redirectsSource = readRedirectsSource()
  checkDuplicates(redirectsSource)
  validateAnchors(redirectsSource)

  const entries = parseDiff(diffOutput).filter((entry) => isContentFile(entry.oldPath))

  if (!entries.length) {
    process.exit(0)
  }

  const redirectFroms = parseRedirectFroms(redirectsSource)
  const missing: Missing[] = []

  for (const { oldPath, newPath } of entries) {
    const expectedUrl = previousUrl(oldPath)
    const toUrl = newPath ? currentUrl(newPath) : 'TODO_DESTINATION'

    // A file can move on disk while keeping its `slug`, which leaves the route untouched.
    if (newPath && toUrl === expectedUrl) {
      continue
    }

    if (!redirectFroms.includes(expectedUrl)) {
      missing.push({ oldPath, expectedUrl, newPath, toUrl })
    }
  }

  if (!missing.length) {
    if (useStdin) {
      log(`  ${green('ok:')} All renamed/deleted files have redirects.`)
    }

    process.exit(0)
  }

  printMissingRedirects(missing)

  process.exit(1)
}

main()

