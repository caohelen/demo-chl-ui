import CheckBoxGroup from '../checkBox/src/checkBoxGroup.vue'
import {App} from 'vue'

CheckBoxGroup.install = (app:App) => {
	// 注册组件
	app.component(CheckBoxGroup.name, CheckBoxGroup)
}

export default CheckBoxGroup