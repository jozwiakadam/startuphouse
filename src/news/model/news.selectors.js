import { createSelector } from 'reselect';

const getNewsStore = (store) => store.news;

export const getNewsSelector = createSelector(
  getNewsStore,
  (news) => news.news.data?.response.results,
);

export const getPaginationSelector = createSelector(
  getNewsStore,
  (news) => news.news.data?.response,
);

export const getCategorySelector = createSelector(
  getNewsStore,
  (news) => news.category,
);

export const getPhraseSelector = createSelector(
  getNewsStore,
  (news) => news.phrase,
);
