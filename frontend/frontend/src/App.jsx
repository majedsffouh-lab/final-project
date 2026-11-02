import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Simulation from './pages/Simulation';
import Navbar from './components/Navbar';
import AdminPanel from './pages/AdminPanel';

const App=()=> {
  return (
  <Router>
 <div className="app-container">
   <Navbar />

  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/simulation" element={<Simulation />} />
   <Route path="/admin" element={<AdminPanel />} />
  </Routes>
      </div>
    </Router>
  );
}

export default App;