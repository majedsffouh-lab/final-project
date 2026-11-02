const express = require('express');
const router = express.Router();

const {
  getAllSpecialties,
  createSpecialty,
  deleteSpecialty
} = require('../controllers/specialtyController');

const {verifyToken, verifyAdmin} = require('../middleware/authMiddleware');

router.get('/', getAllSpecialties);

router.post('/', verifyToken, verifyAdmin, createSpecialty);

router.delete('/:id', verifyToken, verifyAdmin, deleteSpecialty);

module.exports = router;