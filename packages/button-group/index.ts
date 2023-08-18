import ButtonGroup from '../button/src/button-group.vue'
import {App} from 'vue'

ButtonGroup.install = (app:App) => {
	// 注册组件
	app.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup