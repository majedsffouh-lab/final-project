import React, { useState } from 'react';

const AdminPanel = () => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [foundations, setFoundations] = useState('');
const [careerSimulation, setCareerSimulation] = useState('');
const [imageUrl, setImageUrl] = useState('');
const [message, setMessage] = useState('');

const handleCreateSpecialty = async (e) => {
e.preventDefault();


const token = localStorage.getItem('token');

if (!token) {
  setMessage('You must login first.');
  return;
}

try {
  const response = await fetch(
    'https://final-project-20pp.onrender.com/api/specialties',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        title,
        description,
        foundations,
        careerSimulation,
        imageUrl
      })
    }
  );

  const data = await response.json();

  if (response.ok) {
    setMessage('Specialty added successfully!');
    setTitle('');
    setDescription('');
    setFoundations('');
    setCareerSimulation('');
    setImageUrl('');
  } else {
    setMessage(`Error: ${data.error || 'Creation failed'}`);
    console.log('Server response:', data);
  }

} catch (err) {
  console.error('Create specialty error:', err);
  setMessage('Cannot connect to server.');
}


};

return (
<div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}> <h2>Admin Panel</h2> <p>Add new specialty</p>


  {message && (
    <p style={{ padding: '10px', background: '#e2f0cb', color: '#2d6a4f' }}>
      {message}
    </p>
  )}

  <form
    onSubmit={handleCreateSpecialty}
    style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
  >
    <div>
      <label>Specialty title</label><br />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: '100%', padding: '8px' }}
      />
    </div>

    <div>
      <label>Description</label><br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        rows="4"
        style={{ width: '100%', padding: '8px' }}
      />
    </div>

    <div>
      <label>Foundations</label><br />
      <textarea
        value={foundations}
        onChange={(e) => setFoundations(e.target.value)}
        required
        rows="4"
        style={{ width: '100%', padding: '8px' }}
      />
    </div>

    <div>
      <label>Career Simulation</label><br />
      <textarea
        value={careerSimulation}
        onChange={(e) => setCareerSimulation(e.target.value)}
        required
        rows="4"
        style={{ width: '100%', padding: '8px' }}
      />
    </div>

    <div>
      <label>Image URL (optional)</label><br />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        style={{ width: '100%', padding: '8px' }}
      />
    </div>

    <button
      type="submit"
      style={{
        background: '#27ae60',
        color: '#fff',
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      Add Specialty
    </button>
  </form>
</div>


);
};

export default AdminPanel;
