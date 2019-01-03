export const state = () => ({
  components: null
})

export const mutations = {
  setComponents(state, components) {
    state.components = components
  }
}

export const actions = {
  async getComponents({ commit }) {
    try {
      const { data } = await this.$axios.get('/screens/home')
      console.log(data)

      commit('setComponents', data.body)
    } catch (e) {
      throw e
    }
  }
}
