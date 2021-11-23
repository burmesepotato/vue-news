import axios from 'axios';
import {
  API_HEADLINES_URL,
  API_SOURCES_URL,
  API_SOURCE_SEARCH_URL,
  API_KEY,
} from '@/constants/apiSettings';

export default function useFetchData() {
  const fetchHeadlines = () => axios.get(`${API_HEADLINES_URL}${API_KEY}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });

  const fetchSources = () => axios.get(`${API_SOURCES_URL}${API_KEY}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });

  const searchBySource = () => axios.get(`${API_SOURCE_SEARCH_URL}${API_KEY}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });

  return {
    fetchHeadlines,
    fetchSources,
    searchBySource,
  };
}
