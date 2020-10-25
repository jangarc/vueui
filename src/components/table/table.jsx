import {genTableCss} from "./src/cssStyle.js"
import {renderSlot} from "vue"

export default {
  name: "Table",
  props: {
    isBordered: Boolean,
		isStriped: Boolean,
		isNarrow: Boolean,
		isHoverable: Boolean,
		isFullwidth: Boolean,
  },
  setup(props, {attrs, slots}){
    return () => <table {...attrs} class={genTableCss(props)}>
      {slots.default ? slots.default() : null}
    </table>
  }
}