require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  
  db.on('connected', () => {
    console.log('MongoDB connected');
  });
  
  db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  const gfs = new mongoose.mongo.GridFSBucket(db, {
    bucketName: 'Attachments',
  });
  const gfs1 = new mongoose.mongo.GridFSBucket(db, {
    bucketName: 'Worksheet',
  });


  module.exports = { gfs,gfs1};