import Vue from 'vue';
import Vuex from 'vuex';

import * as headlines from './modules/headlines';
import * as loader from './modules/loader';
import * as sources from './modules/sources';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    headlines,
    loader,
    sources
  },
});
