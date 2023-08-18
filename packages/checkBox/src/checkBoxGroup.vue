<template>
	<div>
		<slot></slot>
	</div>
</template>
<script lang="ts">
import { defineComponent, computed, provide } from 'vue'

export default defineComponent({
	name: 'chl-check-box-group',
	props: {
		modelValue: Array,
	},
	emits: ["update:modelValue", "change"],
	setup(props, { emit }) {
		let modelValue = computed(() => props.modelValue)
		const handleChange = (val) => {
			emit('update:modelValue', val);
			emit('change', val)
		}
		// 给子组件提供数据
		provide("ChlCheckBoxGroup", {
			modelValue,
			handleChange,
			name: "ChlCheckBoxGroup"
		})
	},
})
</script>
