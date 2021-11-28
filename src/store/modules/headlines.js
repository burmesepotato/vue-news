import { fetchHeadlines, displayError } from '@/helpers/useFetchData';

const LS_NAME = 'vue-news'

export const namespaced = true;

export const state = {
  headlines: [],
  currentHeadline: null,
  isSearching: false,
  searchResults: [],
  visitedHeadlines: new Set(),
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
  },
  SET_VISITED_HEADLINES(state, url) {
    state.visitedHeadlines.add(url)
  }
};

export const actions = {
  getHeadlines({ commit, dispatch }) {
    dispatch('loader/setLoader', true, { root: true })

    fetchHeadlines().then(({ data }) => {
      commit('SET_HEADLINES', data.articles);
    })
    .catch(displayError)
    .finally(() => {
      dispatch('loader/setLoader', false, { root: true})
    })
  },
  getCurrentHeadline({ commit }) {
    let headlineString = localStorage.getItem(LS_NAME)
    if(headlineString && headlineString.length)
      commit('SET_CURRENT_HEADLINE', JSON.parse(headlineString));
  },
  setCurrentHeadline({ commit }, headline) {
    localStorage.setItem(LS_NAME, JSON.stringify(headline))
    commit('SET_CURRENT_HEADLINE', headline);
  },
  setIsSearching({ commit }, isSearching) {
    commit('SET_IS_SEARCHING', isSearching)
  },
  setSearchResult({ commit }, searchResults) {
    commit('SET_SEARCH_RESULTS', searchResults)
  },
  setVisitedHeadlines({ commit }, url) {
    commit('SET_VISITED_HEADLINES', url)
  }
};

export const getters = {
  filteredHeadlines: (state, getters, rootState) => {
    let results;
    if(state.isSearching) results = [...state.searchResults]
    else results = [...state.headlines]
    
    if(rootState.sources.selectedSource) {
      results = results.filter((headline) => 
        headline.source.name.toLowerCase() === rootState.sources.selectedSource.toLowerCase()
      )
    }
    return results
  },
};
