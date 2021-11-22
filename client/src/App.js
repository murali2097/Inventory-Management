import React from 'react'
import './App.css';
import Login from './pages/Login/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Profile from './pages/Profile/Profile';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
          <Route exact path="profile" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
