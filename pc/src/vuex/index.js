import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import m from './m'
import pc from './pc'
import admin from './admin'

Vue.use(Vuex);


const state = {
	loading: false
};

const mutations = {
	mutationLoading: (state, {Bool})=> {
		state.loading = Bool;
	}
};

const actions = {
	actionLoading: ({commit}, Bool)=> {
		commit('mutationLoading',{Bool: Bool});
	}
};

const getters = {
	getterLoading: state=> {
		return state.loading;
	}
};

// 其他页面执行 action
// 方法一: this.$store.dispatch("actionLoading", true);
// 方法二：import {mapActions} from 'vuex'; method: {...mapActions(['actionLoading'])}
// 
// 得到值 getter
// 方法一： this.$store.pc.getters.actionLoading
// 方法二： import { mapGetters } from 'vuex'; computed: {...mapGetters(['actionLoading'])}
// 
// this.$store.dispatch('actionLoading', true)
// this.$store.getters.getterLoading

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});