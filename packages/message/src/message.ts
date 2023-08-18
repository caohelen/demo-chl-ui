import { ImessageOptions } from './message.type'
import messageComponet from './message.vue'
import { createVNode, render } from 'vue'


let instanceList:any[] = [] // 保存实例
export default function Message(options: ImessageOptions) {
	// 字符串
	if(typeof options === 'string') {
		options = {
			message: options
		}
	}

	// 添加一个offset
	let offset = options.offset || 20;
	instanceList.forEach(item => {
		offset += 60
	})

	let useClose = options.onclose
	let ops = {
		...options,
		offset,
		onclose: () => {
			useClose && useClose()
		},
	}
	// 接收父组件实例
	// 对象
	// 渲染组件
	// createVNode 将组件渲染成虚拟dom
	let vm = createVNode(messageComponet, ops)
	const container = document.createElement("div")
	vm.props!.onDestroy = () => {
		render(null, container)
		instanceList.shift()
		if(instanceList.length === 0) {
			offset = 20
		}
	}
	// // 渲染，位置
	render(vm, container)
	// // 放到指定位置
	document.body.appendChild(container.firstElementChild!)
	instanceList.push(vm)
}