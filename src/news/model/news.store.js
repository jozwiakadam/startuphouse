import * as types from './news.actionTypes';

export const initialState = {
  news: [],
  category: null,
  phrase: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case types.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case types.SET_PHRASE:
      return {
        ...state,
        phrase: action.phrase,
      };
    default:
      return state;
  }
};
