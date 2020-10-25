import CellDiv from "./cellDiv.jsx"

export default {
  name: "Td",
  props: {
    isHead: Boolean
  },
  setup(props, {attrs, slots}){
    return () => props.isHead===true ?
      <th {...attrs}><CellDiv>{slots.default ? slots.default() : null}</CellDiv></th>:
      <td {...attrs}><CellDiv>{slots.default ? slots.default() : null}</CellDiv></td>
  }
}