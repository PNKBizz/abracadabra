import Main from './pages/Main.vue'
import Works from './pages/Works.vue'
import About from './pages/About.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{path: '/', component: Main},
		{path: '', redirect: '/'},
		{path: '/works/:master', component: Works},
		{path: '/about', component: About}
	]
})

export default router