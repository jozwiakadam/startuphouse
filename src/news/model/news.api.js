import apiService from 'services/apiService';
import endpoints from 'constants/endpoints';

import { getPastMonth } from 'utils/helpers';

export const fetchNews = () =>
  apiService.get(`${endpoints.search}&from-date=${getPastMonth()}`);

export const fetchCustomNews = (category, phrase, page) =>
  apiService.get(`${endpoints.search}&from-date=${getPastMonth()}${category ? `&section=${category}` : ''}${phrase ? `&q=${phrase}` : ''}${page ? `&page=${page}` : ''}`);
