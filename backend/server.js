const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);

const specialtyRoutes = require('./routes/specialtyRoutes');
app.use('/api/specialties', specialtyRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/it_specialties_db';


mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((err) => {
    console.log('Database connection error: ', err);
  });

  

const authRoutes = require('./routes/authRoutes'); 

app.use('/api/auth', authRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/', (req, res) => {
  res.send('API is working...');
});