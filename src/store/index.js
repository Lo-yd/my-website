import Vue from "vue"
import Vuex from "vuex"

//导入模块
import home from "./home"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home
  }
})