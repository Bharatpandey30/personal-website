const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors middleware
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Use cors middleware

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
  });
  
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define Schema and Model for Form Data
const formSchema = new mongoose.Schema({
  email: String,
  name: String,
  message: String,
});
const Form = mongoose.model('Form', formSchema);

// Route to handle form submission
app.post('/submitForm', async (req, res) => {
  const { email, name, message } = req.body;

  try {
    const newForm = new Form({ email, name, message });
    await newForm.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'An error occurred while saving form data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
