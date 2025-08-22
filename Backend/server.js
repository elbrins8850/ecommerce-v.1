const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Debug: Check if env vars are loaded
console.log('MONGO_URI from env:', process.env.MONGO_URI);
console.log('Current directory:', __dirname);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.post('/test', (req, res) => {
  console.log('Test Body:', req.body);
  res.json({ message: 'Success', body: req.body });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


exports.register = async (req, res) => {
  try {
    console.log('Request body:', req.body); // للت debugging
    
    // تحقق إذا req.body undefined
    if (!req.body) {
      return res.status(400).json({ message: 'Request body is missing' });
    }

    const { name, email, password } = req.body;
    
    // ... باقي الكود
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};