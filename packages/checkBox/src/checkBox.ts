export interface checkBoxProps {
	indeterminate?: boolean,
	checked?: boolean,
	name?:string,
	disabled?:boolean,
	label?:string|number|object,
	modelValue?: string|number|boolean,
}

import { ComputedRef } from "vue";
export interface IGroupProvide {
	modelValue?: ComputedRef,
	handleChange?: (val: unknown) => void
}