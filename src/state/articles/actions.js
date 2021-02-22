import * as types from './types';

export const getArticles = () => {
  return {
    type: types.GET_ARTICLE,
  }
};

export const getArticlesLoading = () => {
  return {
    type: types.GET_ARTICLE_LOADING,
  }
};

export const getArticlesSuccess = (articles) => {
  return {
    type: types.GET_ARTICLE_SUCCESS,
    payload: articles
  }
};

export const getArticlesFailure = (error) => {
  return {
    type: types.GET_ARTICLE_FAILURE,
    payload: error
  }
};
