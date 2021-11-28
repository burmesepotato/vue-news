import { fetchSources } from '@/helpers/useFetchData';

export const namespaced = true;

export const state = {
  sources: [],
  selectedSource: null,
};

export const mutations = {
  SET_SOURCES(state, data) {
    state.sources = data
  },
  SET_SELECTED_SOURCE(state, selectedSource) {
    state.selectedSource = selectedSource;
  },
};

export const actions = {
  getSources({ commit }) {
    fetchSources().then(({ data }) => {
      commit('SET_SOURCES', data.sources);
    });
  },
  setSelectedSource({ commit }, selectedSource) {
    commit('SET_SELECTED_SOURCE', selectedSource);
  },
};
