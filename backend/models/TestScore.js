const mongoose = require('mongoose');

const testScoreSchema = new mongoose.Schema({
  rollNumber: {
    type: String,
    required: true,
  },
  testName: {
    type: String,
    required: true,
  },
  scores: {
    type: [Number],
    required: true,
  }
});

module.exports = mongoose.model('TestScore', testScoreSchema);
