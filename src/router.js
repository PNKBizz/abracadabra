import Main from './pages/Main.vue'
import Works from './pages/Works.vue'
import About from './pages/About.vue'
import Info from './components/info.vue'
import Price from './components/price.vue'
import Gallery from './components/gallery.vue'
import DetailedGallery from './components/detailedGallery.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

var router = new VueRouter({
	routes: [
		{ path: '/', component: Main },
		{ path: '', redirect: '/' },
		{ path: '/works', component: Works, children: [{
			path: ':master', component: Gallery, props: true
		}, {
			path: ':master/:imageId', component: DetailedGallery, props: true
		}] },
		{ path: '/about', component: About, children: [{
            path: 'info', component: Info
		}, {
            path: 'price', component: Price
		}] }
	]
})

export default router