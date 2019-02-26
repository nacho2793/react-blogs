import { connect } from 'react-redux';
import { getUsersPosts, createUserPost } from '../actions/postsActions';
import Posts from '../components/Posts';

const mapStateToProps = state => {
  return ({
    errors: state.postsReducer.errors,
    posts: state.postsReducer.posts,
  })
}
const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getUsersPosts()),
  createPost: postInfo => dispatch(createUserPost(postInfo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
