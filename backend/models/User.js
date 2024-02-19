const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  rollNumber: {
    type: Number,
    required: true,
    unique: true,
  }
});

module.exports = mongoose.model('User', userSchema);
