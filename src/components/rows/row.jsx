import {rowCss} from "./src/cssStyle"

export default {
  props: {

  },
  setup(props, {attrs, slots}){
    return () => <div {...attrs} class={rowCss}>
      { slots.default ? slots.default() : null }
    </div>
  }
}