type Category = {
  label: string
  position?: number
  collapsed?: boolean
}

// Directory under contracts/ -> sidebar category. Keeping this explicit means the
// sidebar order does not shuffle when a new contract directory appears upstream.
export const categories: Record<string, Category> = {
  'base':             { label: 'Base',       position: 1, collapsed: true },
  'curators':         { label: 'Curators',   position: 2, collapsed: true },
  'keeper':           { label: 'Keeper',     position: 3, collapsed: true },
  'libraries':        { label: 'Libraries',  position: 4, collapsed: true },
  'misc':             { label: 'Misc',       position: 5 },
  'tokens':           { label: 'Tokens',     position: 6 },
  'validators':       { label: 'Validators', position: 7 },
  'vaults':           { label: 'Vaults',     position: 8 },
  'nodes':            { label: 'Nodes',      position: 9, collapsed: true },
  'vaults/ethereum':          { label: 'Ethereum', position: 1, collapsed: true },
  'vaults/gnosis':            { label: 'Gnosis',   position: 2, collapsed: true },
  'vaults/modules':           { label: 'Modules',  position: 3 },
  'vaults/ethereum/custom':   { label: 'Custom',   position: 1, collapsed: true },
  'vaults/ethereum/mev':      { label: 'MEV',      position: 2, collapsed: true },
  'vaults/gnosis/mev':        { label: 'MEV',      position: 1, collapsed: true },
}
