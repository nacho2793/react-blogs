import { GET_POSTS_SUCCESS, GET_POSTS_FAIL, CREATE_USER_POST_SUCCESS } from '../actionTypes/postsActionTypes';

const defaultState = {
  posts: [],
  errors: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        errors: null,
        posts: action.payload,
      };
    case GET_POSTS_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    case CREATE_USER_POST_SUCCESS:
      return {
        ...state,
        error: null,
        posts: action.payload,
      }
    default:
      return { ...state };
  }
};
