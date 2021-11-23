import React from 'react'
import './App.css';
import Login from './pages/Login/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Profile from './pages/Profile/Profile';
import AdminDashboard from './Dashboards/AdminDashboard';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
          <Route exact path="profile" element={<Profile/>} />
          <Route exact path="AdminDashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
