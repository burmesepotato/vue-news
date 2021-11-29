export const namespaced = true

export const state = {
  showModal: false,
  headline: null
}

export const mutations = {
  SET_SHOW_MODAL(state, value) {
    state.showModal = value
  },
  SET_HEADLINE(state, headline) {
    state.headline = headline
  }
}

export const actions = {
  setShowModal({ commit }, value) {
    commit('SET_SHOW_MODAL', value)
  },
  setHeadline({ commit }, headline) {
    commit('SET_HEADLINE', headline)
  }
}