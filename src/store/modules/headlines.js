import { fetchHeadlines } from '@/helpers/useFetchData';
// import dummyArticles from '@/constants/dummyArticles';

export const namespaced = true;

export const state = {
  headlines: [],
  currentHeadline: null,
  isSearching: false,
  searchResults: [],
};

export const mutations = {
  SET_HEADLINES(state, data) {
    state.headlines = data;
  },
  SET_CURRENT_HEADLINE(state, currentHeadline) {
    state.currentHeadline = currentHeadline;
  },
  SET_IS_SEARCHING(state, isSearching) {
    state.isSearching = isSearching
  },
  SET_SEARCH_RESULTS(state, searchResults) {
    state.searchResults = searchResults
  }
};

export const actions = {
  getHeadlines({ commit, dispatch }) {
    dispatch('loader/setLoader', true, { root: true })

    fetchHeadlines().then(({ data }) => {
      commit('SET_HEADLINES', data.articles);
    }).finally(() => {
      dispatch('loader/setLoader', false, { root: true})
    })

    // commit('SET_HEADLINES', dummyArticles);
  },
  setCurrentHeadline({ commit }, currentHeadline) {
    commit('SET_CURRENT_HEADLINE', currentHeadline);
  },
  setIsSearching({ commit }, isSearching) {
    commit('SET_IS_SEARCHING', isSearching)
  },
  setSearchResult({ commit }, searchResults) {
    commit('SET_SEARCH_RESULTS', searchResults)
  }
};

export const getters = {
  filteredHeadlines: (state, getters, rootState) => {
    if(!rootState.sources.selectedSource) return state.headlines
    else {
      return state.headlines.filter((headline) => 
        headline.source.name.toLowerCase() === rootState.sources.selectedSource.toLowerCase()
      )
    }
  },
  detailHeadline: () => {
    if(state.currentHeadline) return state.currentHeadline
  }
};
