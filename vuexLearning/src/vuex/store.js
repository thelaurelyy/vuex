import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);     //引用Vuex


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


export default  new Vuex.Store({
  state,
  mutations,
  getters
});
