import moment from 'moment';

export const getPastMonth = () => moment().subtract(1, 'month').format('YYYY-MM-DD');

export const parseReadLaterArticlesToArray = () => JSON.parse(localStorage.getItem('readLaterArticles') || '[]');

export const setArticlesInStorage = (articles) => localStorage.setItem('readLaterArticles', JSON.stringify(articles));
