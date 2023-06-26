const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });