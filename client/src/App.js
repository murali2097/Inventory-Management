import React from 'react'
import './App.css';
import Login from './pages/Login/Login';
import {Routes, Route} from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Profile from './pages/Profile/Profile';
import AdminDashboard from './Dashboards/AdminDashboard';
import PrivateRouting from './PrivateRouting';


function App() {
  return (
    <div>
      
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          
        </Routes>
        <PrivateRouting/>
    
    </div>
  );
}

export default App;
