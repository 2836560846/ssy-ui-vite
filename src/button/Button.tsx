import { defineComponent, PropType } from "vue";
import "uno.css";

export type IColor= 'black' | 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue'
  },
}

export default defineComponent({
  name: "SButton",
  props,
  setup(props,{slots}){
    return () => <button
      class={`
        py-2
        px-4
        font-semibold
        rounded-lg 
        shadow-md 
        text-white
        bg-green-500 
        hover:bg-green-700
        border-none 
        cursor-pointer
        m-1
        `}
        >
      {slots.default ? slots.default() : ''}
        </button>
  }
});