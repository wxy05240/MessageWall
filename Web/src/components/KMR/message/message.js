import { createVNode,render } from "vue";
import iMessage from './iMessage.vue'
const divVNode = createVNode('div',{class : 'xtx-message-container'})
render(divVNode,document.body)
const div = divVNode.el
const IMessage = ({message,type}) => {
    const comVNode = createVNode(iMessage,{message,type})
    render(comVNode,div)
    setTimeout(()=>{
        render(null,div)
    },6000)
}
export default IMessage