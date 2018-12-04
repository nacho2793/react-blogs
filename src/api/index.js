import axios from 'axios';
import config from '../config';

export const getPosts = () => {
  return axios.get(config.api.users.posts)
};