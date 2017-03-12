import Vue from 'vue'
import Vuex from 'vuex'
import shop from '../api/shop'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	strict: debug,
	state: {
		masters: []
	},
	getters: {
		allMasters: state => state.masters
	},
	mutations: {
		receiveMasters(state, { mastersArr }) {
			state.masters = mastersArr;
		}
	},
	actions: {
		getMasters({ commit }) {
			shop.getMasters().then(data => {
				const mastersArr = data.body.masters;
				commit('receiveMasters', { mastersArr })
			});
		}
	}
})