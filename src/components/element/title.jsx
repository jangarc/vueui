import {titleCss} from "./src/cssStyle"
import { h } from "vue"

export default {
  props: {
    level: {type:Number, default: () => 1},
  },
  setup(props, {attrs, slots}){
    let levelHead = ["h1", "h2", "h3", "h4", "h5", "h6"];

    return () => h(
      levelHead[props.level - 1],
      {...attrs, ...{class: titleCss}} ,
      slots.default ? slots.default() : null
    )
  }
}