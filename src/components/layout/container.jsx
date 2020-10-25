import {containerCss} from "./src/cssStyle"

export default {
  name: "Container",
  props: {
    isWidescreen: Boolean,
    isFullhd: Boolean,
    isMaxDesktop: Boolean,
    isMaxWidescreen: Boolean,
  },
  setup(props, {attrs, slots}){
    return () => <div {...attrs} class={containerCss}>
      {slots.default ? slots.default() : null}
    </div>
  }
}