const Specialty = require('../models/Specialty');


const getAllSpecialties = async (req, res) => {
  try {
    const specialties = await Specialty.find();
    res.status(200).json(specialties);
  } catch (err) {
    res.status(500).json({ error: 'error in get specialties' });
  }
};


const createSpecialty = async (req, res) => {
  try {
  const { title, description, foundations, careerSimulation, imageUrl } = req.body;

  const newSpecialty = new Specialty({
  title,
  description,
  foundations,
  careerSimulation,
  imageUrl,
  createdBy: req.user.id 
  });

  await newSpecialty.save();
  res.status(201).json({
  message: 'create specialty is successfully',
  specialty: newSpecialty
  });

  } catch (err) {
  res.status(500).json({ error: 'error happen in create specialty' });
  }
};


const deleteSpecialty = async (req, res) => {
try {
const { id } = req.params;
await Specialty.findByIdAndDelete(id);
 res.status(200).json({ message: 'specialty delete is successfully' });
 }
  catch (err) {
   res.status(500).json({ error: 'error in delete specialty' });
  }
};

module.exports = { getAllSpecialties, createSpecialty, deleteSpecialty };
