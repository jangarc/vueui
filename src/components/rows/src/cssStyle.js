import {cssFramework} from "/src/ase.ui.config.js"

export const rowsCss = (() =>
  cssFramework==="bulma" ? "columns" : null
)()

export const rowCss = (() =>
  cssFramework==="bulma" ? "column" : null
)()