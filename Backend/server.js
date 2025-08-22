// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Debug: Check env
console.log('MONGO_URI from env:', process.env.MONGO_URI);
console.log('JWT_SECRET set?', !!process.env.JWT_SECRET);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Basic test routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.post('/test', (req, res) => {
  console.log('Test Body:', req.body);
  res.json({ message: 'Success', body: req.body });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
