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

  onChangeHandler = inputName => event => {
    this.setState({ [inputName]: event.target.value });
  }

  onClickHandler = () => {
    const { title, body } = this.state;
    const post = { title, body };
    this.props.createPost(post);
  }

  render() {
    return (
      <div className="posts">
        <h1>Posts! :D</h1>
        <div className="post new">
          <label htmlFor="">Title</label>
          <input type="text" value={this.state.title} onChange={this.onChangeHandler('title')} />
          <label htmlFor="">Body</label>
          <input type="text" value={this.state.body} onChange={this.onChangeHandler('body')} />
          <button onClick={this.onClickHandler}>Add post</button>
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