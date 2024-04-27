const express = require('express');
const Form = require('../models/formDetails'); // Import the Form model
const router = express.Router();

// POST route to handle form submissions
router.post('/', async (req, res) => {
  try {
    // Extract form data from request body
    const { name, email, message } = req.body;

    // Validate form data (optional)
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    // Create a new form entry
    const newForm = new Form({ name, email, message });
    await newForm.save();

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
