import React, { Component } from 'react';
import Posts from './containers/PostsContainer';
import './App.scss';

class App extends Component {
  render() {
    return (
     <div>
      <Posts />
     </div>
    );
  }
}

export default App;
