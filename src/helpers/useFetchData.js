import axios from 'axios';
import store from '@/store/index';
import {
  API_HEADLINES_URL,
  API_SOURCES_URL,
  API_SEARCH_URL,
  API_KEY,
} from '@/constants/apiSettings';

const INSTANCE = axios.create({
  timeout: 5000,
});

export const fetchHeadlines = () => INSTANCE.get(`${API_HEADLINES_URL}&apiKey=${API_KEY}`);

export const fetchSources = () => INSTANCE.get(`${API_SOURCES_URL}apiKey=${API_KEY}`);

export const fetchSearch = (text) => INSTANCE.get(`${API_SEARCH_URL}${text}&apiKey=${API_KEY}`);

export const displayError = (err) => {
  store.dispatch('error/setMessage', err.message);
};
