import Vue from 'vue'
import Vuex from 'vuex'
import city from  './city'

Vue.use(Vuex)

export default new Vuex.Store({
  //由于项目状态太多不方便管理，所以最好状态组件化
  state: {

  },
  mutations: {

  },
  actions: {

  },
  //引入子状态
  modules: {
    city
  }
})
