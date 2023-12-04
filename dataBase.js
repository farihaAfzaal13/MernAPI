
const mongoose = require('mongoose');
require('dotenv').config();

const api_uri = process.env.API_KEY;

const connectDB = async () => {
  try {
    await mongoose.connect(api_uri, {
    });
    console.log(' connected to MongoDB');
  } catch (error) {
    console.error('Connection error detected', error);
  }
};

module.exports = connectDB;