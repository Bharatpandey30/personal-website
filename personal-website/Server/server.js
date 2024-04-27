const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formRouter = require('../Server/Routes/FormRouter');

const app = express();
const PORT = 5000;

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use route handler for /api/forms
app.use('/api/forms', formRouter); // Use the correct endpoint here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
