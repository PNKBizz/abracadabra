import Vue from 'vue'
import App from './pages/App.vue'
import router from './router'

new Vue({
	router,
	el: '#app',
	render: h => h(App)
})
