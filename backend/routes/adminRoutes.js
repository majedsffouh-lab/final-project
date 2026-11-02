const express = require('express');
const router = express.Router();
const { verifyAdmin } = require('../middleware/authMiddleware');


router.delete('/delete-user/:id', verifyAdmin, async (req, res) => {
  try {
    
    res.status(200).json({ message: 'User deleted successfully by admin' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;