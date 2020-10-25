import {cssFramework} from "/src/ase.ui.config.js"

export const titleCss = (() =>
  cssFramework==="bulma" ? "title" : null
)()