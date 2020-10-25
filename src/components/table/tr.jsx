import {genTrCss} from "./src/cssStyle.js"

export default {
  name: "Tr",
  props: {
    isSelected: Boolean,
  },
  setup(props, {attrs, slots}){
    return () => <tr {...attrs} class={genTrCss(props)}>
      {slots.default ? slots.default() : null}
    </tr>
  }
}