/* eslint-disable prettier/prettier */
import axios from 'axios';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import _ from 'lodash';
import { API_URL, ARTICLE_API } from '../constants/api';
import {limitOfArticles} from '../constants';
import * as types from '../actions/actionTypes';
import {
  addArticles,
  changeArticles,
  changeOffset,
  loadMore,
  offLoad,
} from '../actions';
import checkValidArticles from '../utils/filterArticles';

const getArticles = ({ offset, limit, tag, author, favorited, token }: any) =>
  axios({
    method: 'get',
    url: `${API_URL}/articles?limit=${limit}
		${offset ? `&offset=${offset}` : ''}
		${tag ? `&tag=${tag}` : ''}
		${author ? `&author=${author}` : ''}
		${favorited ? `&favorited=${favorited}` : ''}`,
    headers: {
      Authorization: token ? `Token ${token}` : '',
    },
  });

const postArticle = ({ title, description, body, tags }: any) => {
  return axios.post(
    ARTICLE_API,
    {
      article: {
        title,
        description,
        body,
        tagList: tags,
      },
    },
    {
      headers: {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    }
  );
};

function* getArticlesAsync(action: any) {
  try {
    let results: any[] = [];
    yield put(changeOffset(0));
    do {
      const offset = yield select((state) => state.offset);
      const data = yield call(getArticles, { ...action.payload, offset });
      yield put(changeOffset(offset + limitOfArticles));
      results = _.unionBy(
        [...results, ...checkValidArticles(data.data.articles)],
        'title'
      );
      if (data.data.articles < limitOfArticles) {
        break;
      }
    } while (results.length < 20);
    yield put(offLoad());
    yield put(changeArticles(results));
  } catch (error) {}
}

function* getMoreArticlesAsync(action: any) {
  try {
    let results: any[] = [];
    do {
      const offset = yield select((state) => state.offset);
      const data = yield call(getArticles, {
        ...action.payload,
        offset,
      });
      yield put(changeOffset(offset + limitOfArticles));
      results = _.unionBy(
        [...results, ...checkValidArticles(data.data.articles)],
        'title'
      );
      if (data.data.articles.length < limitOfArticles) {
        yield put(loadMore(false));
        break;
      } else {
        yield put(loadMore(true));
      }
    } while (results.length < 20);
    yield put(addArticles(results));
  } catch (error) {}
}

function* postArticleAsync(action: any) {
  try {
    const response = yield call(postArticle, action.payload);
    yield put({
      type: types.POST_ARTICLE_SUCCESS,
      payload: response.data.article,
    });
  } catch (error) {
    yield put({ type: types.POST_ARTICLE_FAIL, message: error.message });
  }
}

function* articlesWorker() {
  yield takeLatest(types.GET_ARTICLES_REQUEST, getArticlesAsync);
  yield takeLatest(types.GET_MORE_ARTICLES_REQUEST, getMoreArticlesAsync);
  yield takeLatest(types.POST_ARTICLE_REQUEST, postArticleAsync);
}

export default articlesWorker;
