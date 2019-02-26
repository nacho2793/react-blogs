import api from '../api';
import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL
} from '../actionTypes/postsActionTypes';

const getUsersSuccess = payload => ({
  type: GET_POSTS_SUCCESS,
  payload,
});

const getUsersFail = payload => ({
  type: GET_POSTS_FAIL,
  payload,
});

export const getUsersPosts = () => async dispatch => {
  try {
    const posts = await api.getPosts();
    dispatch(getUsersSuccess(posts));
  } catch (error) {
    dispatch(getUsersFail(error));
  }
}