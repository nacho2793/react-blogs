import React from 'react';
import './Posts.scss';

class Posts extends React.Component {
  state = {
    loading: true,
    posts: this.props.posts || [],
    title: '',
    body: '',
  }

  componentDidMount() {
    this.props.getPosts();
  }

  onChange = () => {
    return '';
  }

  render() {
    return (
      <div className="posts">
      <h1>Posts! :D</h1>
        <div className="post new">
        <label htmlFor="">Title</label>
          <input type="text" value={this.state.title} onChange={this.onChange}/>
        <label htmlFor="">Body</label>
          <input type="text" value={this.state.body} onChange={this.onChange}/>
          <button>Add post</button>
        </div>
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