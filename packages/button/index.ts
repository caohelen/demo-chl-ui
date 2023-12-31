import Button from './src/button.vue'
import {App} from 'vue'

Button.install = (app:App) => {
	// 注册组件
	app.component(Button.name, Button)
}

export default Button