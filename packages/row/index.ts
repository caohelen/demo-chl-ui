import Row from '../col/src/row'
import {App} from 'vue'

Row.install = (app:App) => {
	// 注册组件
	app.component(Row.name, Row)
}

export default Row