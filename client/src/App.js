import React, { Suspense, lazy, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AdminDashboard from './Dashboards/AdminDashboard';
const App = () => (
  <Router>
    <Routes>
      <Route path='/Login'>
        <Navigate to={'/login'} />
      </Route>
      <Route path='/Dashboard'>
        <AdminDashboard />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Routes>
  </Router>
);

export default App;
