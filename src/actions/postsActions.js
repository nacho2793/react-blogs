import api from '../api';
import {
  CREATE_USER_POST_SUCCESS,
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

const createUserPostSuccess = payload => ({
  type: CREATE_USER_POST_SUCCESS,
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

export const createUserPost = postInfo => async (dispatch, getStore) => {
  const { postsReducer } = getStore();
  try {
    const newPost = await api.publishPost(postInfo);
    const updatedPosts = [newPost, ...postsReducer.posts];
    dispatch(createUserPostSuccess(updatedPosts));
  } catch { }
}