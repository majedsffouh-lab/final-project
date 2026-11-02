import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home=()=> {
  
  const [specialties, setSpecialties] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    axios.get('https://final-project-20pp.onrender.com/api/specialties')
      .then((response) => {
        setSpecialties(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.log('Error fetching specialties:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <h1>it academy</h1>
        <div>
          <Link to="/login" style={{ marginRight: '15px', textDecoration: 'none', color: '#0066cc' }}>login</Link>
          <Link to="/register" style={{ textDecoration: 'none', color: '#0066cc' }}>register</Link>
        </div>
      </header>

      
      <section style={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <h2>explore your journey in IT world</h2>
        
      </section>

      
      <h3>specialties</h3>
      
      {loading ? (
        <p>loading data..</p>
      ) : specialties.length === 0 ? (
        <p>no specialties currently</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
         {specialties.map((spec) => (
         <div key={spec._id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', backgroundColor: '#fff' }}>
         <h3>{spec.title}</h3>
          <p>{spec.description}</p>
          <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '10px 0' }} />
          <p><strong>foundation</strong> {spec.foundations.substring(0, 50)}...</p>
   </div>
     ))}
    </div>
   )}
    </div>
  );
}

export default Home;