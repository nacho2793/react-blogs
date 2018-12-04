import { GET_POSTS_SUCCESS, GET_POSTS_FAIL } from '../actionTypes/postsActionTypes';

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
    default:
      return { ...state };
  }
};
