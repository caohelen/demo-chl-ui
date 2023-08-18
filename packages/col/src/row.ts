// 自定义 标签

import { defineComponent, h, computed, provide } from 'vue'

export default defineComponent({
	name: "ChlRow",
	props: {
		tag: {
			type: String,
			default: 'div'
		},
		gutter: {
			type: Number,
			default: 0,
		},
		justify: {
			type: String,
			default: 'start'
		}
	},
	setup(props, ctx) {
		provide('ChlRow', props.gutter)
		const clas = computed(() => {
			// justify
			const justify = props.justify !== "start" ? `is-justify-${props.justify}`:""
			return `chl-row ${justify}`
		})
		// 解决gutter 给开头和结尾元素和容器对齐
		const styles = computed(() => {
			let ret = {
				marginLeft: '',
				marginRight: '',
			};
			if(props.gutter) {
				ret.marginLeft = ret.marginRight = `-${props.gutter/2}px`

			}
			return ret;
		})
		return () => h(props.tag, {
			class: clas.value,
			style: styles.value
		}, ctx.slots.default?.())
	},
})