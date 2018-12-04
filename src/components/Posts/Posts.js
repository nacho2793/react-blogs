import React from 'react';
import './Posts.scss';

class Posts extends React.Component {
  state = {
    loading: true,
    posts: this.props.posts || [],
  }

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    if (this.props.errors) {
      return (
        <div className="error">{this.props.errors.message}</div>
      )
    }
    console.log(this.props.posts);
    return (
      <div className="posts">
        {this.props.posts.map(post => {
          const { title, body } = post;
          return (
            <div key={post.id} className="post">
              <span>{title}</span>
              <div>{body}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Posts;