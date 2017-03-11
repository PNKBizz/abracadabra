import Vue from 'vue'
import Resourse from 'vue-resource'

Vue.use(Resourse);

export default {
	getMasters() {
		return Vue.http.get('api/update')
	}
}