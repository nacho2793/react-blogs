import { getPosts } from '../api';
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

export const getUsersPosts = () => dispatch => {
  getPosts().then(response => {
    console.log(response)
    if (response.status === 200) {
      dispatch(getUsersSuccess(response.data))
    }
  }).catch(error => {
    dispatch(getUsersFail(error))
  }) 
}