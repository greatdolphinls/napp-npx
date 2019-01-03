export const state = () => ({
  list: [],
  show: {}
})

export const mutations = {
  setList(state, list) {
    state.list = list
  },

  setShow(state, show) {
    state.show = show
  }
}

export const actions = {
  async get({ commit }) {
    try {
      const { data } = await this.$axios.get('/front/forms')
      commit('setList', data)
    } catch (e) {
      throw e
    }
  },

  async show({ commit }, { id }) {
    try {
      const { data } = await this.$axios.get(`/front/forms/${id}`)
      commit('setShow', data)
    } catch (e) {
      throw e
    }
  }
}
