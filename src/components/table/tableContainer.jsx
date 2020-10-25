import {genTableContainerCss} from "./src/cssStyle.js"

export default {
  name: "TableContainer",
  props: {

  },
  setup(props, {attrs, slots}){
    return () => <div {...attrs} class={genTableContainerCss}>
      {slots.default ? slots.default() : null}
    </div>
  }
}