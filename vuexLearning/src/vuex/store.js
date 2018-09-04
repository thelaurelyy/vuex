import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);     //引用Vuex

//状态对象
const state = {
  count: 1
}

//改变state的数值的方法，必须写在mutations里
const mutations = {
  add(state, n){
    state.count += n;
  },
  reduce(state){
    state.count--;
  }
}

//数据过滤
const getters = {
    count: function (state) {
        return state.count += 100;
    }
}

//异步修改状态
const actions = {
  addActions(context){    //context 上下文对象，这里等同于 store
    context.commit('add', 10);
    setTimeout(()=> {context.commit('reduce')}, 3000);
    console.log("程序异步，我比reduce先执行");
  },
  reduceActions({commit}){
    commit('reduce');
  }
}

const moduleA = {
  state,
  mutations,
  getters,
  actions
}


/*export default  new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});*/
export default  new Vuex.Store({
  modules: {
    a: moduleA
  }
});
