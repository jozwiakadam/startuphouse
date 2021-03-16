import { useDispatch, useSelector } from 'react-redux';

import * as api from './news.api';
import { getNewsSelector, getCategorySelector, getPhraseSelector, getPaginationSelector } from './news.selectors';
import { fetchNews, setCategory, setPhrase } from './news.actions';

export const useNews = () => {
	const dispatch = useDispatch();
	const news = useSelector(getNewsSelector);
	const selectedCategory = useSelector(getCategorySelector);
	const selectedPhrase = useSelector(getPhraseSelector);
	const paginationData = useSelector(getPaginationSelector);

	return {
		news,
		selectedCategory,
		selectedPhrase,
		paginationData,
		getNews: () =>
			api.fetchNews().then((response) => dispatch(fetchNews(response))),
		fetchCategory: (category, phrase, page) => {
			const formattedCategory = category === 'all' ? null : category;

			return api.fetchCustomNews(formattedCategory, phrase, page).then((response) => {
				dispatch(fetchNews(response));
				dispatch(setCategory(formattedCategory));
			});
		},
		fetchPhrase: (category, phrase, page) =>
			api.fetchCustomNews(category, phrase, page).then((response) => {
				dispatch(fetchNews(response));
				dispatch(setPhrase(phrase));
			}),
		fetchPage: (category, phrase, page) =>
			api.fetchCustomNews(category, phrase, page).then((response) => {
				dispatch(fetchNews(response));
			}),
	};
};
