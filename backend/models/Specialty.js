const mongoose = require('mongoose');

const specialtySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  foundations: {
    type: String, 
    required: true
  },
  careerSimulation: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Specialty', specialtySchema);