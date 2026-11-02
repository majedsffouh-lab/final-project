import React, { useState } from 'react';

const AdminPanel=()=> {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateSpecialty = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); 

    try {
      const response = await fetch('http://localhost:5000/api/specialties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ${token}' 
        },
        body: JSON.stringify({ name, description, department })
    });

      const data = await response.json();

      if (response.ok) {
        setMessage('add specialty successful ✅');
        setName('');
        setDescription('');
        setDepartment('');
      } else {
        setMessage(`error: ${data.error || 'create failed'}`);
      }
    } catch (err) {
      setMessage('error happen');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>(Admin Panel)</h2>
      <p>add new specialty</p>

      {message && <p style={{ padding: '10px', background: '#e2f0cb', color: '#2d6a4f' }}>{message}</p>}

      <form onSubmit={handleCreateSpecialty} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>specialty name</label><br />
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label>department</label><br />
          <input 
            type="text" 
            value={department} 
            onChange={(e) => setDepartment(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label>description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
            rows="4"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button type="submit" style={{ background: '#27ae60', color: '#fff', padding: '10px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
          
          add specialty
        </button>
      </form>
    </div>
  );
}

export default AdminPanel;