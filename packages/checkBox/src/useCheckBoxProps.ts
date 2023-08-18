import  type {checkBoxProps, IGroupProvide} from './checkBox'
import { computed, getCurrentInstance, inject } from 'vue'

function useModel(props:checkBoxProps) {
	// 通过计算属性 来处理
	let { emit } = getCurrentInstance()
	let useProvide = inject<IGroupProvide>("ChlCheckBoxGroup", {})
	const model = computed({
		get() {
			return useProvide.modelValue ? useProvide.modelValue.value : props.modelValue
		},
		set(val) {
			if(useProvide.modelValue) {
				return useProvide.handleChange(val)
			}
			// 拿到当前组件实例
			emit('update:modelValue', val)
		}
	})
	return model
}

function usecheckbox(props:checkBoxProps, model) {
	const isChecked = computed(() => {
		const value = model.value // 当前是否选中
		// 如果是group情况
		if(Array.isArray(value)) {
			return value.includes(props.label)
		} else {
			// 单个使用情况
			return value
		}
	})
	return isChecked
}

function useEvent() {
	let { emit } = getCurrentInstance()
	function handleChange(e) {
		let target = e.target
		let value = target.checked ? true : false;
		emit("change", value);
	}
	return handleChange;
}

export const useCheckBoxProps = (props: checkBoxProps) => {
	// (1) modelValue 
	let model = useModel(props)
	// (2) 是否选中状态
	let isChecked = usecheckbox(props, model)
	// (3) 触发事件
	let handleChange = useEvent()
	return {
		model,
		isChecked,
		handleChange,
	}
}

