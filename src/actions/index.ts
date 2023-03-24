import * as types from './actionTypes';

export const changeMode = () => ({
  type: types.CHANGE_MODE,
});

export const changeOffset = (payload: any) => ({
  type: types.CHANGE_OFFSET,
  payload,
});

export const onLoad = () => ({
  type: types.ON_LOAD,
});

export const offLoad = () => ({
  type: types.OFF_LOAD,
});

export const onCmtLoad = () => ({
  type: types.ON_CMT_LOAD,
});

export const offCmtLoad = () => ({
  type: types.OFF_CMT_LOAD,
});

export const loadMore = (payload: any) => ({
  type: types.HAS_LOAD_MORE,
  payload,
});

export const getUserRequest = () => ({
  type: types.GET_USER_REQUEST,
});

export const getUserSuccess = (payload: any) => ({
  type: types.GET_USER_SUCCESS,
  payload,
});

export const clearUser = () => ({
  type: types.CLEAR_USER,
});

export const getArticlesRequest = (payload: any) => ({
  type: types.GET_ARTICLES_REQUEST,
  payload,
});

export const getMoreArticlesRequest = (payload: any) => ({
  type: types.GET_MORE_ARTICLES_REQUEST,
  payload,
});

export const addArticles = (payload: any) => ({
  type: types.ADD_ARTICLES,
  payload,
});

export const changeArticles = (payload: any) => ({
  type: types.CHANGE_ARTICLES,
  payload,
});

export const updateArticles = (payload: any) => ({
  type: types.UPDATE_ARTICLES,
  payload,
});

export const getTagsRequest = () => ({
  type: types.GET_TAGS_REQUEST,
});

export const getTagsSuccess = (payload: any) => ({
  type: types.GET_TAGS_SUCCESS,
  payload,
});

export const getCommentsRequest = (payload: any) => ({
  type: types.GET_COMMENTS_REQUEST,
  payload,
});

export const getCommentsSuccess = (payload: any) => ({
  type: types.GET_COMMENTS_SUCCESS,
  payload,
});

export const deleteCommentsRequest = (payload: any) => ({
  type: types.DELETE_COMMENT_REQUEST,
  payload,
});

export const postComment = (payload: any) => ({
  type: types.POST_COMMENT,
  payload,
});

export const addComment = (payload: any) => ({
  type: types.ADD_COMMENT,
  payload,
});

export const fetchSignInData = (payload: any) => ({
  type: types.SIGN_IN_REQUEST,
  payload,
});

export const fetchSignUpData = (payload: any) => ({
  type: types.SIGN_UP_REQUEST,
  payload,
});

export const signOut = () => ({
  type: types.SIGN_OUT,
});

export const postArticleAsync = (payload: any) => ({
  type: types.POST_ARTICLE_REQUEST,
  payload,
});

export const updateSetting = (payload: any) => ({
  type: types.SETTING_UPDATE,
  payload,
});

export const updateSettingSuccess = (payload: any) => ({
  type: types.SETTING_UPDATE_SUCCESS,
  payload,
});
