export const namespaced = true;

export const state = {
  isLoading: true,
};

export const mutations = {
  SET_LOADER(state, isLoading) {
    state.isLoading = isLoading;
  },
};

export const actions = {
  setLoader({ commit }, isLoading) {
    commit('SET_LOADER', isLoading);
  },
};
