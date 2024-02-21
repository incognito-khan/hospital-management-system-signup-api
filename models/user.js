const mongoose = require('mongoose');

// Define the schema for the User
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /.+\@.+\..+/
  },
  token: {
    type: String,
    required: true,
  },
  role:{
    type: String,
    default: "Admin",
    required: true,
    enum: ['Admin', 'User', 'Guest']
  },
  phoneNumber: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);