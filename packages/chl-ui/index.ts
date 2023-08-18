import Button from '@chl-ui/button'
import ButtonGroup from '@chl-ui/button-group'
import Icon from '@chl-ui/icon'
import Row from '@chl-ui/row'
import Col from '@chl-ui/col'
import CheckBox from '@chl-ui/check-box'
import CheckBoxGroup from '@chl-ui/check-box-group'
import {App} from 'vue'
import Message from '@chl-ui/message'

const components = [
	Button,
	ButtonGroup,
	Icon,
	Row,
	Col,
	CheckBox,
	CheckBoxGroup,
]

// 全局动态添加组件
const install = (app:App) => {
	components.forEach(component => {
		app.component(component.name, component)
	})
	// 全局应用
	app.config.globalProperties.$message = Message
}

// 全局注册
export default {
	install
}