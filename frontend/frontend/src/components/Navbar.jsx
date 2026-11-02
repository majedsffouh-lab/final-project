import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar=()=> {
  const navigate = useNavigate();


  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user')); // نفترض أنك تخزن بيانات المستخدم كـ JSON

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#2c3e50', color: '#fff' }}>
      <div>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>
          IT Specialties Directory
        </Link>
      </div>
      
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>home</Link>

        
        {token && user && user.role === 'admin' && (
          <Link to="/admin" style={{ color: '#f1c40f', textDecoration: 'none', fontWeight: 'bold' }}>
            admin panel⚙️
          </Link>
        )}

        
        {!token ? (
          <>
            <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>login</Link>
            <Link to="/register" style={{ background: '#3498db', padding: '5px 10px', borderRadius: '4px', color: '#fff', textDecoration: 'none' }}>regestir</Link>
          </>
        ) : (
          <button onClick={handleLogout} style={{ background: '#e74c3c', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
            log out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;