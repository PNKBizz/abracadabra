import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	strict: debug,
	state: {
		masters: [],
		currentMaster: {}
	},
	getters: {
		allMasters: state => state.masters,
		getCurrentMaster: state => state.currentMaster,
		getGalleryItems: state => (master) => {
			if (!state.masters.length) return [];
			return state.masters.filter(current => current.master === master)[0].gallery
				.map( (item) => {
					console.log(master, item);
					return {
						src: '/src/assets/gallery/' + master + '/' + item,
						name: item
					}
				});
		}
	},
	mutations: {
		receiveMasters(state, { mastersArr }) {
			state.masters = mastersArr;
		},
		setCurrentMaster(state, { masterName }) {
			state.currentMaster = state.masters.filter( master => master.master === masterName)[0]
		}
	},
	actions: {
		getMasters({ state, commit }) {
			api.getMasters().then(data => {
				const mastersArr = data.body.masters;
				commit('receiveMasters', { mastersArr });
				commit('setCurrentMaster', { masterName: state.masters[0].master });
			});
		}
	}
})