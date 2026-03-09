/// <reference types="@docusaurus/plugin-ideal-image" />

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
