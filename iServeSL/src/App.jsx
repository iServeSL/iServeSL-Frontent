import React from 'react';
import Welcome from './routes/Welcome';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Dashboard from './routes/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Welcome />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/signup" element = {<Signup />} />
          <Route path="/dashboard" element = {<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
