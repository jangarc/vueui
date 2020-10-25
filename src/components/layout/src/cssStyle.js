import {cssFramework} from "/src/ase.ui.config.js"

export const containerCss = (() =>
  cssFramework==="bulma" ? "container" : null
)()

export const sectionCss = (() =>
  cssFramework==="bulma" ? "section" : null
)()

