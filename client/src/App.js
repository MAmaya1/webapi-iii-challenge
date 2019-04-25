import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import UsersView from './views/UsersView';
import PostsView from './views/PostsView';

function App() {
  return (
    <Router>
      <Route exact path='/' component={UsersView}/>
      <Route path='/:id/posts' component={PostsView}/>
    </Router>
  );
}

export default App;