// 自定义 标签

import { defineComponent, h, computed, inject } from 'vue'

export default defineComponent({
	name: "ChlCol",
	props: {
		tag: {
			type: String,
			default: 'div'
		},
		span: {
			type: Number,
			default: 24,
		},
		offset: { 
			type: Number,
			default: 0,
		}
	},
	setup(props, ctx) {
		// 获取数据
		const gutter = inject('ChlRow', 0);
		const Class = computed(() => {
			let ret = []
			const pops = ["span", "offset"] as const
			pops.forEach((item) => {
				const size = props[item]
				if(typeof size === 'number' && size > 0) {
					ret.push(`chl-col-${item}-${size}`)
				}
			})
			return [
				'chl-col',
				...ret
			]
		})
		const styless = computed(() => {
			if(gutter !== 0) {
				return {
					paddingLeft: gutter/2+'px',
					paddingRight:  gutter/2+'px'
				}
			}
			return {}
		})
		return () => h(props.tag, 
			{ 
				class: Class.value,
				style: styless.value,			
			}, 
		ctx.slots.default?.())
	},
})