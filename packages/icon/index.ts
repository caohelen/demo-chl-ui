import Icon from './src/icon.vue'
import {App} from 'vue'

Icon.install = (app:App) => {
	// 注册组件
	app.component(Icon.name, Icon)
}

export default Icon