import Vue from 'vue'
import App from './pages/App.vue'
import router from './router'
import store from './store'

new Vue({
	router,
	store,
	el: '#app',
	render: h => h(App)
})
