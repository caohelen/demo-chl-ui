import Col from './src/col'
import {App} from 'vue'

Col.install = (app:App) => {
	// 注册组件
	app.component(Col.name, Col)
}

export default Col