import axios from 'axios';
import {
  API_HEADLINES_URL,
  API_SOURCES_URL,
  API_SEARCH_URL,
  API_KEY,
} from '@/constants/apiSettings';

const INSTANCE = axios.create({
  timeout: 4000
})


export const fetchHeadlines = () => INSTANCE.get(`${API_HEADLINES_URL}&apiKey=${API_KEY}`)
    .catch((err) => {
      console.error(err);
    });

export const fetchSources = () => INSTANCE.get(`${API_SOURCES_URL}apiKey=${API_KEY}`)
    .catch((err) => {
      console.error(err);
    });

export const fetchSearch = (text) => INSTANCE.get(`${API_SEARCH_URL}${text}&apiKey=${API_KEY}`)
    .catch((err) => {
      console.error(err);
    });