import Vue from 'vue'
import Vuex from 'vuex'
import shop from '../api/shop'

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
		getCurrentMaster: state => state.currentMaster
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
			shop.getMasters().then(data => {
				const mastersArr = data.body;
				commit('receiveMasters', { mastersArr });
				commit('setCurrentMaster', { masterName: state.masters[0].master });
			});
		}
	}
})