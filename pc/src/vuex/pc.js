const store = {
	loading: false
};

const mutation = {
	mutationLoading: (state, {Bool})=> {
		state.loading = Bool;
	}
};

const action = {
	actionLoading: ({commit}, Bool)=> {
		commit('mutationLoading',{Bool: Bool});
	}
};

const getter = {
	getterLoading: state=> {
		return state.loading;
	}
};

// 其他页面执行 action
// 方法一: this.$store.pc.dispatch("actionLoading", true);
// 方法二：import {mapActions} from 'vuex'; method: {...mapActions(['actionLoading'])}
// 
// 得到值 getter
// 方法一： this.$store.pc.getters.actionLoading
// 方法二： import { mapGetters } from 'vuex'; computed: {...mapGetters(['actionLoading'])}

export default {
	store,
	mutation,
	action,
	getter
};