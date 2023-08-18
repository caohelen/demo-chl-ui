import { createRouter, createWebHashHistory }  from 'vue-router'

import button from '../components/button.vue'


const routes = [
	{
		path: '/',
		name: "Button",
		component: button
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

export default router;