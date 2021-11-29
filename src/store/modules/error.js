export const namespaced = true;

export const state = {
  message: null,
};

export const mutations = {
  SET_MESSAGE(state, message) {
    state.message = message;
  },
};

export const actions = {
  setMessage({ commit }, message) {
    commit('SET_MESSAGE', message);
  },
};
