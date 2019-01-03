import Cookies from 'js-cookie'

const AUTH_COOKIE = 'auth'
const ACCOUNT_COOKIE = 'currentAccount'
// cookie expiration
const expires = new Date(new Date().getTime() + 30 * 60 * 1000)

export const state = () => ({
  auth: Cookies.getJSON(AUTH_COOKIE) || {},
  currentAccount: Cookies.getJSON(ACCOUNT_COOKIE) || {}
})

export const getters = {
  loggedIn(state) {
    return Boolean(
      Object.keys(state.auth).length && Object.keys(state.currentAccount).length
    )
  },

  availableAccounts(state) {
    return state.auth.accounts || []
  },

  loggedInUser({ auth }) {
    return auth
  }
}

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },

  setCurrentAccount(state, account) {
    state.currentAccount = account
  }
}

export const actions = {
  async login({ commit }, form) {
    try {
      const { data } = await this.$axios.post('/login', form)
      commit('setAuth', data)
      Cookies.set(AUTH_COOKIE, data, { expires })

      return data
    } catch (e) {
      throw e
    }
  },

  async selectAccount({ commit, dispatch }, account) {
    commit('setCurrentAccount', account)
    Cookies.set(ACCOUNT_COOKIE, account, { expires })
  }
}
