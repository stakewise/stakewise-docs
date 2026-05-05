export const log = (value: string | string[]) => console.log(`
${Array.isArray(value) ? value.join('\n') : value}
`)
