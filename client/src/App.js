import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import UsersView from './views/UsersView';

function App() {
  return (
    <Router>
      <Route exact path='/' component={UsersView}/>
    </Router>
  );
}

export default App;