const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const Router = require('./Router/useRouter');
const Routers = require('./Router/productRouter'); 
const Routing = require('./Router/createRouter');
const Airpodes = require('./airpodesdata/Router');

require('dotenv').config();
  
const server = express();  

server.use(cors());
server.use(express.json());

server.use('/', Airpodes);
server.use('/', Router);
server.use('/', Routers);
server.use('/', Routing);

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected successfully to MongoDB');
  } catch (err) {
    console.error('Database connection error:');
  }
};

// Global error handling


// Start the server and connect to the database
const startServer = async () => {
  try {
    await connectDB();
    server.listen(9000, () => {
      console.log('Server is running on port 9000');
    });
} catch (err) {
  console.error('Server error:', err);
}
  }
startServer();

