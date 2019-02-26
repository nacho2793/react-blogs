import { connect } from 'react-redux';
import { getUsersPosts } from '../actions/postsActions';
import Posts from '../components/Posts';

const mapStateToProps = state => {
  return ({
    errors: state.postsReducer.errors,
    posts: state.postsReducer.posts,
  })
}
const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getUsersPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
