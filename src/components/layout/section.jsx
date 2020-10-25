import {sectionCss} from "./src/cssStyle"

export default {
  name: "Section",
  props: {

  },
  setup(props, {attrs, slots}){
    return () => <div {...attrs} class={sectionCss}>
      {slots.default ? slots.default() : null}
    </div>
  }
}