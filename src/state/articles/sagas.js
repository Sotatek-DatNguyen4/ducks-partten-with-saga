import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './types';
import { fetchArticles } from './api';

export function* getAllArticles() {
  const articleURL = 'https://5aeb604f046d7b0014fb6e2d.mockapi.io/api/articles';

  try {
    yield put(actions.getArticlesLoading());
    const apiResponse = yield call(fetchArticles, articleURL);
    console.log(111, apiResponse);
    yield put(actions.getArticlesSuccess(apiResponse.data));
  } catch(error) {
    yield put(actions.getArticlesFailure(error));
    console.log(error);
  }
}

// Watches for specific action, and then executes the related saga
export function* watchGetAllArticlesAsync() {
  yield takeEvery(types.GET_ARTICLE, getAllArticles);
}

// export only watcher sagas in one variable
export const sagas = [
  watchGetAllArticlesAsync
];



