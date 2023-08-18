<template>
	<button :class="propsClass">
		<!-- <i  v-if="loading" class="chl-icon-loading"></i> -->
		<i v-if="icon && !loading" :class="icon"></i>
		<span v-if="$slots.default"><slot></slot></span>
	</button>
	<!-- <span>{{propsClass}}ddd</span> -->
</template>

<script lang="ts">
import { defineComponent, PropType, computed, onMounted } from 'vue';
type buttonType = "primary" | "success" | "danger" | "info" | "text"
export default defineComponent({
	name: "chl-button",
	props: {
		type: {
			type: String as PropType<buttonType>,
			validator(value) {
				return ['primary', 'success', 'danger', 'info', 'text'].includes(value)
			},
			default: 'primary'
		},
		icon: {
			type: String,
			default: ''
		},
		disabled: {
			type: Boolean,
		},
		round: Boolean,
		roading: Boolean,
	},
	setup(props, ctx) {
		const propsClass = computed(() => [
			"chl-button",
			"chl-button--"+props.type, // 修饰
			// 嵌套对象
			{
				"is-disabled": props.disabled,
				"is-round": props.round,
				"is-roading": props.roading,
			}
		]);
		return {
			propsClass,
		}
	}
})
</script>