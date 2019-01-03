export const state = () => ({
  config: {}
})

export const mutations = {
  setConfig(state, config) {
    state.config = config
  }
}

export const getters = {
  title(state) {
    if (
      state.config &&
      state.config.appConfig &&
      state.config.appConfig.appName
    ) {
      return state.config.appConfig.appName
    }
  }
}

export const actions = {
  async getConfig({ commit }) {
    try {
      const { data } = await this.$axios.get('/configuration')
      commit('setConfig', data)
    } catch (e) {
      throw e
    }
  }
}
