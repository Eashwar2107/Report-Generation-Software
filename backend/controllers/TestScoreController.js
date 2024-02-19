const TestScore = require('../models/TestScore');

exports.createTestScore = async (req, res) => {
  try {
    const testScore = new TestScore(req.body);
    await testScore.save();
    res.status(201).json(testScore);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getTestScores = async (req, res) => {
  try {
    const testScores = await TestScore.find({ rollNumber: req.params.rollNumber });
    res.json(testScores);
  } catch (err) {
    res.status(404).json({ message: 'Test scores not found' });
  }
};
