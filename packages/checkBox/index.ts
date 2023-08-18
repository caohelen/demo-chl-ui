import CheckBox from './src/checkBox.vue'
import {App} from 'vue'

CheckBox.install = (app:App) => {
	// 注册组件
	app.component(CheckBox.name, CheckBox)
}

export default CheckBox