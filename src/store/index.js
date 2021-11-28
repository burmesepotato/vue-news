import Vue from 'vue';
import Vuex from 'vuex';

import * as error from './modules/error';
import * as headlines from './modules/headlines';
import * as loader from './modules/loader';
import * as sources from './modules/sources';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    error,
    headlines,
    loader,
    sources
  },
});

export default store