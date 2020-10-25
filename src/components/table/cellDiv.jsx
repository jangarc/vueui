import {genCellDivCss} from "./src/cssStyle.js"

export default {
  name: "CellDiv",
  props:{

  },
  setup(props, {attrs, slots}){
    return () => <div {...attrs} class={genCellDivCss}>
      {slots.default ? slots.default() : null}
    </div>
  }
}