import axios from 'axios';
import {
  API_HEADLINES_URL,
  API_SOURCES_URL,
  API_SEARCH_URL,
  API_KEY,
} from '@/constants/apiSettings';


export const fetchHeadlines = () => axios.get(`${API_HEADLINES_URL}${API_KEY}`)
    .catch((err) => {
      console.error(err);
    });

export const fetchSources = () => axios.get(`${API_SOURCES_URL}${API_KEY}`)
    .catch((err) => {
      console.error(err);
    });

export const fetchSearch = () => axios.get(`${API_SEARCH_URL}${API_KEY}`)
    .catch((err) => {
      console.error(err);
    });