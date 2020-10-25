import {Td} from "../table"

export default {
  name: "Column",
  props: {
    text: String, // Head文字
  },
  setup(props, {attrs, slots}){
    return () => <Td {...attrs}>{ slots.default ? slots.default() : null}</Td>
  }
}