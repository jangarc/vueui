import {rowsCss} from "./src/cssStyle"

export default {
  props: {
    isMobile: Boolean,
  },
  setup(props, {attrs, slots}){
    return () => <div {...attrs} class={rowsCss}>
      { slots.default ? slots.default() : null }
    </div>
  }
}