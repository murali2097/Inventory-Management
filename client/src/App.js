import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Navigate,
} from 'react-router-dom';
import NoMatch from './components/common/404';
import CircleLoader from './components/common/circular-loader';
import Login from './pages/Login';

const App = () => (
  <Router>
    <Suspense fallback={<CircleLoader />}>
      <Route exact path='/'>
        {window.loggedIn ? (
          <Navigate to='/dashboard' />
        ) : (
          <Navigate to='/login' />
        )}
      </Route>
      <Route path='/login' component={Login} />
      <Route path='*'>
        <NoMatch />
      </Route>
    </Suspense>
  </Router>
);

export default App;
