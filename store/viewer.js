export const state = () => ({
  currentFolderId: 0,
  folders: [],
  publications: [],
  showPublication: {}
})

export const mutations = {
  setCurrentFolderId(state, folderId) {
    state.currentFolderId = folderId
  },

  setFolders(state, folders) {
    state.folders = folders
  },

  setPublications(state, publications) {
    state.publications = publications
  },

  setShowPublication(state, publication) {
    state.showPublication = publication
  }
}

export const getters = {
  foldersInContext: state => {
    return state.folders.filter(
      folder => folder.parent_id === state.currentFolderId
    )
  },

  publicationsInContext: state => {
    return state.publications
  },

  publication: state => state.showPublication
}

export const actions = {
  async getFolders({ commit }) {
    try {
      const { data } = await this.$axios.get('/foldertree')

      commit('setFolders', data)
    } catch (e) {
      throw e
    }
  },

  async getPublications({ commit }, folderId = 0) {
    try {
      const { data } = await this.$axios.get(`/foldertree/${folderId}/pubs`)

      commit('setPublications', data)
      commit('setCurrentFolderId', folderId)
    } catch (e) {
      throw e
    }
  },

  getPublication({ commit, state }, id) {
    const publication = state.publications.find(
      publication => publication.id === id
    )

    commit('setShowPublication', publication)
  }
}
