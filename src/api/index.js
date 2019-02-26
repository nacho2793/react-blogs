import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

class Api {
  getPosts = async () => {
    const { data: posts } = await apiClient.get('/posts');
    return posts;
  };

  publishPost = async postInfo => {
    const { data: post } = await apiClient.post('/posts', postInfo);
    return post;
  }

  deletePost = async postId => {
    const response = await apiClient.delete(`/posts/${postId}`);
    return response;
  }
}

export default new Api();
