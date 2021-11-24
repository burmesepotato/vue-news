import { fetchHeadlines, fetchSources } from '@/helpers/useFetchData';
// import dummyArticles from '@/constants/dummyArticles';

export const namespaced = true;

export const state = {
  headlines: [],
  sources: [],
  selectedSource: null,
};

export const mutations = {
  SET_HEADLINES(state, data) {
    state.headlines = data;
  },
  SET_SOURCES(state, data) {
    state.sources = data
  },
  SET_SELECTED_SOURCE(state, selectedSource) {
    state.selectedSource = selectedSource;
  },
};

export const actions = {
  getHeadlines({ commit }) {
    fetchHeadlines().then(({ data }) => {
      commit('SET_HEADLINES', data.articles);
    });

    // commit('SET_HEADLINES', dummyArticles);
  },
  getSources({ commit }) {
    fetchSources().then(({ data }) => {
      commit('SET_SOURCES', data.sources);
    });
  },
  setSelectedSource({ commit }, selectedSource) {
    commit('SET_SELECTED_SOURCE', selectedSource);
  },
};

export const getters = {
  filteredHeadlines: () => {
    if(!state.selectedSource) return state.headlines
    else {
      return state.headlines.filter((headline) => 
        headline.source.name.toLowerCase() === state.selectedSource.toLowerCase()
      )
    }
  },
};
