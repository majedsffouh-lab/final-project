import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login=()=> {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault(); 
    setErrorMsg(''); 

    try {
    
      const response = await axios.post('https://final-project-20pp.onrender.com/api/auth/login', {
        email,
        password
      });

      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      alert('login successfully');
      navigate('/'); 
   } catch (err) {
  console.log('Login Error:', err);

  if (err.response) {
    setErrorMsg(
      `Error ${err.response.status}: ${JSON.stringify(err.response.data)}`
    );
  } else if (err.request) {
    setErrorMsg('The server did not respond: ' + err.message);
  } else {
    setErrorMsg(err.message);
  }
}
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'Arial, sans-serif' }}>
      <h2>login</h2>
      
      {errorMsg && <p style={{ color: 'red', backgroundColor: '#ffe6e6', padding: '8px', borderRadius: '4px' }}>{errorMsg}</p>}

      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>email</label><br />
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label>password:</label><br />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#0066cc', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          login
        </button>
      </form>

      <p style={{ marginTop: '15px', textAlign: 'center' }}>
        no account?<Link to="/register" style={{ color: '#0066cc' }}>create new account</Link>
      </p>
    </div>
  );
}

export default Login;