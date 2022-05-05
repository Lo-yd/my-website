import { reqGetArticleList } from '@/api'
export default {
  actions: {
    async getArticleList ({ commit }, params = {}) {
      const res = await reqGetArticleList(params)
      if (res.length != 0) {
        commit('GETARTICLELIST', res)
      }
    }
  },
  mutations: {
    GETARTICLELIST (state, value) {
      state.articleList = value
    }
  },
  state: {
    articleList: {}
  },
  getters: {}
}