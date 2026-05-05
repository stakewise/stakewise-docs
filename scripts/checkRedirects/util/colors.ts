const supportsColor = Boolean(process.stderr.isTTY)

const wrap = (code: string) => (text: string): string =>
  supportsColor ? `\x1b[${code}m${text}\x1b[0m` : text


export const dim = wrap('2')
export const red = wrap('31')
export const cyan = wrap('36')
export const bold = wrap('1')
export const green = wrap('32')

export const errorLabel = bold(red('error:'))
