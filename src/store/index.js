import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	strict: debug,
	state: {
		masters: []
	},
	getters: {
		allMasters: state => state.masters,
		getGalleryItems: state => (master) => {
			if (!state.masters.length) return [];
			return state.masters.filter(current => current.master === master)[0].gallery
				.map( (item) => {
					return {
						src: 'src/assets/gallery/' + master + '/' + item,
						name: item
					}
				});
		}
	},
	mutations: {
		receiveMasters(state, { mastersArr }) {
			state.masters = mastersArr;
		}
	},
	actions: {
		getMasters({ state, commit }) {
			api.getMasters().then(data => {
				const mastersArr = data.body.masters;
				commit('receiveMasters', { mastersArr });
			});
		}
	}
})
