import * as types from './news.actionTypes';

export const fetchNews = (payload) => ({
	type: types.FETCH_NEWS,
	payload,
});

export const setCategory = (category) => ({
	type: types.SET_CATEGORY,
	category,
});

export const setPhrase = (phrase) => ({
	type: types.SET_PHRASE,
	phrase,
});
