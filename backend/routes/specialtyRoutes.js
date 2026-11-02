const express = require('express');
const router = express.Router();
const { getAllSpecialties, createSpecialty, deleteSpecialty } = require('../controllers/specialtyController');
const { verifyAdmin } = require('../middleware/authMiddleware');



router.get('/', getAllSpecialties);


router.post('/',verifyAdmin, createSpecialty);


router.delete('/:id',verifyAdmin, deleteSpecialty);

module.exports = router;